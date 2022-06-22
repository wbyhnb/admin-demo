<template>
  <div>
    <el-row v-loading="quillUpdateImgOrVideo">
      <div class="edit_container">
        <quill-editor
          :disabled="isDisabled"
          v-model="content"
          ref="myQuillEditor"
          :options="quillOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        >
        </quill-editor>
        <div v-if="!isDisabled && isShowNum">
          <div class="limit" v-if="nowLength <= numLength">
            当前已输入 <span>{{ nowLength }}</span> 个字符，您还可以输入
            <span>{{ SurplusLength }}</span> 个字符。
          </div>
          <div class="limit" v-else style="color: #ee2a7b">当前字数超长。</div>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
import { quillEditor, Quill } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  data() {
    return {
      TiLength: 0,
      quillUpdateImgOrVideo: false, // 根据图片/视频上传状态来确定是否显示loading动画，刚开始是false,不显示
      content: this.value, //消息内容
      uploadConfig: {
        methods: "POST", // 必填参数 图片上传方式
        name: "img", // 必填参数 文件的参数名
        size: 1048576 * 3, // 可选参数   图片大小，单位为b, 1M = 1048576b
        accept: "image/png, image/gif, image/jpeg, image/bmp, image/x-icon", // 可选 可上传的图片格式
      },
      uploadVideoConfig: {
        methods: "POST", // 必填参数 图片上传方式
        name: "video", // 必填参数 文件的参数名
        size: 1048576 * 20, // 可选参数   图片大小，单位为b, 1M = 1048576b
        accept: "audio/mp4,video/mp4", // 可选 可上传的图片格式
      },
    };
  },
  props: {
    isDisabled: false,
    numLength: {
      type: Number,
      default: 1500,
    },
    isShowNum: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
  },
  components: {
    quillEditor,
  },
  created() {
    var that = this;
    /*富文本编辑图片上传配置*/

    var fonts = [
      "Microsoft-YaHei",
      "SimSun",
      "SimHei",
      "KaiTi",
      "Arial",
      "Times-New-Roman",
    ];
    var Font = Quill.import("formats/font");
    Font.whitelist = fonts; //将字体加入到白名单
    var sizes = ["12", "14", "16", "18", "20", "24", "28", "32", "36"];
    var Size = Quill.import("formats/size");
    Size.whitelist = sizes; //将字体大小加入到白名单

    // toolbar工具栏的工具选项（默认展示全部）
    const toolOptions = [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: sizes }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: fonts }],
      [{ align: [] }],
      // ["clean"],
      ["link", "image", "video"],
    ];
    const handlers = {
      image: function image() {
        var self = this;
        that.handleUpload("img", that, self);
      },
      video: function video() {
        var self = this;
        that.handleUpload("video", that, self);
      },
    };

    this.quillOption = {
      placeholder: "",
      theme: "snow", // 主题
      modules: {
        toolbar: {
          container: toolOptions, // 工具栏选项
          handlers: handlers, // 事件重写
        },
      },
    };
  },
  methods: {
    handleUpload(type, that, self) {
      console.log(type, that, self);
      var fileInput, config, fn;
      if (type == "img") {
        config = that.uploadConfig;
        fn = uploadPicBase64;
        fileInput = self.container.querySelector("input.ql-image[type=file]");
      } else {
        config = that.uploadVideoConfig;
        fn = uploadFile;
        fileInput = self.container.querySelector("input.ql-video[type=file]");
      }

      if (fileInput === null) {
        fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("style", "display:none");
        // 设置图片参数名
        if (config.name) {
          fileInput.setAttribute(
            "name",
            config.name + "?t=" + new Date().getTime()
          );
        }
        // 可设置上传图片的格式
        fileInput.setAttribute("accept", config.accept);
        if (type == "img") fileInput.classList.add("ql-image");
        else fileInput.classList.add("ql-video");
        // 监听选择文件
        fileInput.addEventListener("change", function () {
          console.log(fileInput.files[0], fileInput.files[0].size, config.size);
          // 限制图片/视频大小
          if (fileInput.files[0].size >= config.size) {
            that.$message.warning(
              type == "img" ? "图片大小不能超过3M" : "视频大小不能超过20M"
            );
            fileInput.value = "";
            return;
          }
          that.quillUpdateImgOrVideo = true;
          let reader = new FileReader();
          let img_base64 = "";
          reader.readAsDataURL(fileInput.files[0]);
          reader.onload = function (event) {
            img_base64 = this.result;
            const params = { imgStr: img_base64 };
            fn(params)
              .then((res) => {
                that.quillUpdateImgOrVideo = false;
                var lengthcontent = self.quill.getSelection().index;
                console.log(lengthcontent);
                console.log(res.data.url);
                try {
                  if (res && res.code == "200") {
                    var url = res.data.url + "?t" + new Date().getTime();
                    //这里很重要，你图片上传成功后，img的src需要在这里添加，res.path就是你服务器返回的图片链接。
                    if (type == "img")
                      self.quill.insertEmbed(
                        self.quill.getSelection().index,
                        "image",
                        window.SITE_CONFIG["imgURL"] + res.data.url
                      );
                    else
                      self.quill.insertEmbed(
                        self.quill.getSelection().index,
                        "video",
                        window.SITE_CONFIG["imgURL"] + res.data.data.url
                      );

                    self.quill.setSelection(lengthcontent + 1);
                  } else {
                    that.quillUpdateImgOrVideo = false;
                  }
                  fileInput.value = null;
                } catch (error) {
                  console.log(error);
                }
              })
              .catch((err) => {
                that.quillUpdateImgOrVideo = false;
              });
          };
        });
        self.container.appendChild(fileInput);
      }
      fileInput.click();
    },
    onEditorReady(editor) {}, // 准备编辑器
    init() {
      this.dataForm.messageContent = "";
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange({ quill, html, text }) {
    //   event.quill.deleteText(2000, 4);
    //   if (this.dataForm.messageContent === "") this.TiLength = 0;
    //   else this.TiLength = this.dataForm.messageContent.length;
    //   this.$emit("artmessageContent", this.dataForm.messageContent);
    
        this.content = html
    }, // 内容改变事件
  },
  watch:{
    content(val){
      this.$emit("input", val);
    }

  },
  computed: {
    nowLength() {
      return this.dataForm.messageContent
        ? this.dataForm.messageContent.length
        : 0;
    },
    SurplusLength() {
      // 计算属性 获得当前输入字符长度
      let num =
        this.numLength -
        Number(
          this.dataForm.messageContent ? this.dataForm.messageContent.length : 0
        );
      if (num > 0) {
        return num;
      } else {
        return 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.edit_container {
  .limit {
    height: 30px;
    border: 1px solid #ccc;
    line-height: 30px;
    text-align: right;

    span {
      color: #ee2a7b;
    }
  }
}
>>> .ql-editor .ql-video {
  max-height: 300px !important;
}
>>> .ql-snow .ql-tooltip a.ql-preview {
  vertical-align: middle;
}
>>> .ql-container.ql-snow.ql-disabled {
  background: #f5f7fa;
  color: #c0c4cc;
}
// 字体
>>> .ql-editor .ql-font-Microsoft-YaHei {
  font-family: "Microsoft YaHei";
}
>>> .ql-editor .ql-font-SimSun {
  font-family: "SimSun";
}
>>> .ql-editor .ql-font-SimHei {
  font-family: "SimHei";
}
>>> .ql-editor .ql-font-KaiTi {
  font-family: "KaiTi";
}
>>> .ql-editor .ql-font-Arial {
  font-family: "Arial";
}
>>> .ql-editor .Times-New-Roman {
  font-family: "Times New Roman";
}
>>> .ql-snow .ql-picker.ql-font .ql-picker-label::before,
>>> .ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "微软雅黑";
}
>>> .ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-value="Microsoft-YaHei"]::before,
>>> .ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-value="Microsoft-YaHei"]::before {
  content: "微软雅黑";
}
>>> .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="SimSun"]::before,
>>> .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="SimSun"]::before {
  content: "宋体";
}
>>> .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="SimHei"]::before,
>>> .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="SimHei"]::before {
  content: "黑体";
}
>>> .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="KaiTi"]::before,
>>> .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="KaiTi"]::before {
  content: "楷体";
}
>>> .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Arial"]::before,
>>> .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Arial"]::before {
  content: "Arial";
}
>>> .ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-value="Times-New-Roman"]::before,
>>> .ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-value="Times-New-Roman"]::before {
  content: "Times New Roman";
}
>>> .ql-snow .ql-picker.ql-font {
  width: 160px;
}
>>> .ql-snow .ql-picker-label {
  text-align: center;
}

// 字体大小
>>> .ql-editor .ql-size-12 {
  font-size: 12px;
}
>>> .ql-editor .ql-size-16 {
  font-size: 14px;
}
>>> .ql-editor .ql-size-16 {
  font-size: 16px;
}
>>> .ql-editor .ql-size-18 {
  font-size: 18px;
}
>>> .ql-editor .ql-size-20 {
  font-size: 20px;
}
>>> .ql-editor .ql-size-24 {
  font-size: 24px;
}
>>> .ql-editor .ql-size-28 {
  font-size: 28px;
}
>>> .ql-editor .ql-size-32 {
  font-size: 32px;
}
>>> .ql-editor .ql-size-36 {
  font-size: 36px;
}

>>> .ql-snow .ql-picker.ql-size .ql-picker-label::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="12"]::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12"]::before {
  content: "12px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="16"]::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16"]::before {
  content: "16px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="18"]::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18"]::before {
  content: "18px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="20"]::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20"]::before {
  content: "20px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="24"]::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="24"]::before {
  content: "24px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="28"]::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="28"]::before {
  content: "28px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="32"]::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="32"]::before {
  content: "32px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="36"]::before,
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="36"]::before {
  content: "36px";
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item::before {
  font-size: 14px;
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12"]::before {
  font-size: 12px;
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16"]::before {
  font-size: 16px;
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18"]::before {
  font-size: 18px;
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20"]::before {
  font-size: 20px;
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="24"]::before {
  font-size: 24px;
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="28"]::before {
  font-size: 28px;
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="32"]::before {
  font-size: 32px;
}
>>> .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="36"]::before {
  font-size: 36px;
}
// 标题
>>> .ql-snow .ql-picker.ql-header .ql-picker-label::before,
>>> .ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "默认" !important;
}
>>> .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
>>> .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1" !important;
}
>>> .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
>>> .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2" !important;
}
>>> .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
>>> .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3" !important;
}
>>> .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
>>> .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4" !important;
}
>>> .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
>>> .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5" !important;
}
>>> .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
>>> .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6" !important;
}
</style>
