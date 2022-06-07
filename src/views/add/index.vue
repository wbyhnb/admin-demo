<template>
	<div class="container">
		<el-table :data="dataSource" :border="true"
			:header-cell-style="{ 'font-weight': 'normal', 'text-align': 'center' }"
			:cell-style="{ 'text-align': 'center' }" size="mini" style="width: 100%" :span-method="arraySpanMethod">
			<el-table-column type="index" label="序号" width="100"></el-table-column>
			<el-table-column prop="product_name" label="名称1"></el-table-column>
			<el-table-column prop="cap_name" label="名称2"></el-table-column>
			<el-table-column prop="name" label="名称3"></el-table-column>
			<el-table-column prop="name1" label="名称4"></el-table-column>
			<el-table-column prop="name2" label="名称5"></el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		name: "tableCom",
		data() {
			return {
				dataSource: [{
						product_name: "aaaa",
						cap_name: "aa1",
						"name": 1,
						"name1": 1,
						"name2": 0
					},
					{
						product_name: "aaaa",
						cap_name: "aa2",
						"name": 0,
						"name1": 0,
						"name2": 0
					},
					{
						product_name: "bbbb",
						cap_name: "bb1",
						"name": 1,
						"name1": 1,
						"name2": 0
					},
					{
						product_name: "bbbb",
						cap_name: "bb2",
						"name": 0,
						"name1": 1,
						"name2": 1
					},
					{
						product_name: "bbbb",
						cap_name: "bb3",
						"name": 0,
						"name1": 1,
						"name2": 1
					},
					{
						product_name: "ccccc",
						cap_name: "cc2",
						"name": 0,
						"name1": 1,
						"name2": 1
					},
					{
						product_name: "ddddd",
						cap_name: "dd3",
						"name": 0,
						"name1": 1,
						"name2": 1
					},
				],
			};
		},
		methods: {
			arraySpanMethod({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				// 合并行  产品名字相同合并
				if (columnIndex === 1) {
					if (rowIndex === 0 || row.product_name != this.dataSource[rowIndex - 1].product_name) {
						let rowspan = 0;
						this.dataSource.forEach(element => {
							if (element.product_name === row.product_name) {
								rowspan++;
							}
						});
						return [rowspan, 1];
					} else {
						return [0, 0];
					}
				}

				//合并列 名称值都为1 的合并
				if (columnIndex > 2) {
					let colspan = 0;
					let colkeys = Object.keys(row);
					let currentindex = columnIndex - 1;
					if (row[colkeys[currentindex]] === 1) {
						if (row[colkeys[currentindex - 1]] != row[colkeys[currentindex]]) {
							for (let i = currentindex; i < colkeys.length; i++) {
								if (row[colkeys[i]] === 1) {
									colspan++;
								} else {
									break;
								}
							}
							return [1, colspan];
						} else {
							return [0, 0];
						}
					}

				}
			}
		},
		created() {

		}
	};
</script>