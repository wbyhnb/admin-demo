<template>
  <div class="o_table">
    <div class="o_table_header">
      <slot name="header"></slot>
    </div>
    <div class="o_table_header_buttons">
      <slot name="button"></slot>
    </div>
    <el-table
      ref="table"
      :data="tableData"
      v-loading="setList.loading"
      :border="setList.border ? true : false"
      :stripe="setList.stripe ? true : false"
      :size="setList.size || 'mini'"
      :fit="setList.fit || true"
      :default-sort="setList.defaultSort || { prop: '', order: '' }"
      :empty-text="setList.emptyText || '-'"
      :height="setList.height ? setList.height : 'calc(100vh - 300px )'"
      :row-key="setList.rowKey || ''"
      :max-height="
        setList.maxHeight ? setList.maxHeight : 'calc(100vh - 300px )'
      "
      :style="{ width: setList.width ? setList.width : '100%' }"
      :tree-props="setList.treeProps || { children: 'children' }"
      @row-click="clickRow"
      @row-dblclick="dblclickRow"
      @row-contextmenu="contextmenu"
      @header-click="headClick"
      @header-contextmenu="headcontextmenu"
      @select="select"
      @select-all="select"
      @current-change="rowChange"
      @selection-change="handleSelectionChange"
    >
      <template v-for="(column, index) in columns">
        <!-- 多选框 -->
        <el-table-column
          v-if="column.type === 'selection'"
          type="selection"
          :key="index"
          :width="column.width ? column.width : 50"
          :min-width="column.minWidth ? column.minWidth : null"
          :fixed="column.fixed ? column.fixed : null"
          :align="column.align ? column.align : 'center'"
          :selectable="selectable ? selectable : selectables"
        ></el-table-column>
        <!-- 序号 -->
        <el-table-column
          v-else-if="column.type === 'index'"
          type="index"
          :key="index"
          :label="column.label ? column.label : '序号'"
          :min-width="column.minWidth ? column.minWidth : ''"
          :width="column.width ? column.width : 50"
          :fixed="column.fixed ? column.fixed : null"
          :align="column.align ? column.align : 'center'"
        ></el-table-column>
        <!-- 动态表格 -->
        <el-table-column
          v-else
          :prop="column.prop ? column.prop : null"
          :label="column.label"
          :key="index"
          :sortable="column ? column.sortable : false"
          :width="column.width ? column.width : null"
          :fixed="column.fixed ? column.fixed : null"
          :filters="column.filters ? column.filters : null"
          :filter-method="column.filters ? filterHandler : null"
          :min-width="column.minWidth ? column.minWidth : null"
          :show-overflow-tooltip="
            column.showOverflowTooltip ? column.showOverflowTooltip : true
          "
          :resizable="column.resizable ? column.resizable : false"
          :align="column.align ? column.align : 'center'"
          :class-name="column.className ? column.className : ''"
          :header-align="column.headerAlign ? column.headerAlign : ''"
        >
          <template slot-scope="scope">
            <o-solt
              v-if="column.render"
              :render="column.render"
              :index="scope.$index"
              :row="scope.row"
              :column="column"
            ></o-solt>
            <span v-else>{{ scope.row[column.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <div class="o_table_pagination">
      <el-pagination
        v-if="setList.showPagination"
        :hide-on-single-page="
          setList.hideOnSinglePage ? setList.hideOnSinglePage : false
        "
        :page-size="pagination.pageSize ? pagination.pageSize : 10"
        :page-sizes="
          pagination.pageSizes ? pagination.pageSizes : [10, 20, 30, 40, 50]
        "
        :total="pagination.total ? pagination.total : 0"
        :layout="
          pagination.layout
            ? pagination.layout
            : 'total, sizes, prev, pager, next, jumper'
        "
        :pager-count="pagination.pagerCount ? pagination.pagerCount : 5"
        :current-page="pagination.currentPage ? pagination.currentPage : 1"
        @size-change="pagination.sizeChange"
        @current-change="pagination.currentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
const oSolt = {
  name: "o-solt",
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    };
    if (data.props.column) {
      params.column = data.props.column;
    }
    return data.props.render(h, params);
  }
};
export default {
  name: "o-table",
  components: {
    oSolt
  },
  props: {
    //数据
    data: {
      type: Object,
      default: () => {}
    },
    selectable: {
      type: Function,
      default: () => {
        return true;
      }
    }
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    //计算表格数据
    tableData() {
      return this.data.list;
    },
    //计算表格列配置
    columns() {
      return this.data.columns;
    },
    //计算表格配置
    setList() {
      return this.data.setList;
    },
    //分页配置
    pagination() {
      return this.data.pagination;
    }
  },
  created() {
    // console.log(this.data);
  },
  mounted() {
    if (this.$refs.table && this.$refs.table.doLayout) {
      this.$refs.table.doLayout();
    }
  },
  methods: {
    //数据筛查过滤
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    // 单击行事件
    clickRow(row, column, event) {
      let data = { row, column, event };
      this.$emit("clickRow", data);
    },
    // 双击行事件
    dblclickRow(row, column, event) {
      let data = { row, column, event };
      this.$emit("dblclickRow", data);
    },
    // 右击行事件
    contextmenu(row, column, event) {
      let data = { row, column, event };
      this.$emit("contextmenu", data);
    },
    // 头部列点击事件
    headClick(row, column, event) {
      let data = { row, column, event };
      this.$emit("headClick", data);
    },
    // 头部列右击事件
    headcontextmenu(row, column, event) {
      let data = { row, column, event };
      this.$emit("headcontextmenu", data);
    },
    // 勾选复选框事件
    select(row, column, event) {
      let data = { row, column, event };
      this.$emit("select", data);
    },
    // 勾选全选事件
    selectAll(row, column, event) {
      let data = { row, column, event };
      this.$emit("selectAll", data);
    },
    // 行改变事件
    rowChange(row, column, event) {
      let data = { row, column, event };
      this.$emit("rowChange", data);
    },
    // 多行选中事件
    handleSelectionChange(row, column, event) {
      let data = { row, column, event };
      this.$emit("handleSelectionChange", data);
    },
    // 分页改变事件
    sizeChange(pageSize) {
      this.$emit("sizeChange", pageSize);
    },
    // 分页改变事件
    currentChange(page) {
      this.$emit("currentChange", page);
    },
    //选择框事件
    selectables(row) {
      if (row) return true;
      else return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/dynamic.scss";
.o_table_header_buttons {
  margin: 0px 0 10px;
}
.el-pagination {
  display: flex;
  justify-content: flex-end;
}
>>> .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: $leftColor;
  border: 1px solid #ddd;
  overflow: hidden;
  z-index: 999;
  border-radius: 5px;
}
>>> .el-table__body-wrapper::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
>>> .el-table__fixed-right {
  right: 10px !important;
  bottom: 0px !important;
}
// >>>.el-table__body-wrapper{
//   height:  !important;
// }
>>> .el-table__fixed {
  bottom: 0px !important;
}
>>> .el-table--scrollable-x:not(.el-table--scrollable-y)
  .el-table__fixed-right {
  right: 0 !important;
}
</style>
