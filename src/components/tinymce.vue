<template>
  <div class="">
    <!-- 富文本编辑器 -->
    <Editor
      id="tinymce"
      v-model="articleContent"
      :init="editorInit"
      :key="tinymceFlag"
    ></Editor>
  </div>
</template>
<script>
// 引入Tinymce编辑器
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
//引入工具栏图标和主题
import "tinymce/icons/default/icons";
import "tinymce/themes/silver";
// 引入富文本编辑器主题的js和css，不然显示出错
import "tinymce/themes/silver/theme.min";
import "tinymce/skins/ui/oxide/skin.min.css";
// 扩展插件 - 根据需要引入
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount"; // 字数统计插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/template"; // 模板插件
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/paste";
import "tinymce/plugins/preview";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/charmap";
import "tinymce/plugins/emoticons";
import "tinymce/plugins/emoticons/js/emojis";
import "tinymce/plugins/help";
import "tinymce/plugins/codesample";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
import "tinymce/plugins/advlist";
import "tinymce/plugins/hr";
import "tinymce/plugins/textpattern";
import "tinymce/plugins/autolink";
import "tinymce/plugins/directionality";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/autosave";
import "tinymce/plugins/autoresize";
export default {
  name: "TinymceEditor",
  components: { Editor },
  props: {
    height: {
      type: Number,
      default: 500,
    }, //从后台获取的字符串HTML数据，
    value: {
      type: String, // 这里我设定个默认值，实际开发中可至为空 - default:"",根据需求修改。
      default: "",
    }, // 基本路径，默认为空根目录
    baseUrl: {
      type: String,
      default: "",
    },
    plugins: {
      //使用的插件 - 根据需求进行删减
      type: [String, Array],
      default:
        "visualblocks link lists image code table fullscreen template paste preview searchreplace colorpicker  wordcount\
         charmap emoticons help codesample media contextmenu textcolor advlist hr textpattern autolink\
          directionality  visualchars nonbreaking insertdatetime imagetools autosave autoresize ",
    },
    toolbar: {
      //工具栏 - 根据需求进行删减
      type: [String, Array],
      default:
        "fontselect fontsizeselect styleselect | undo redo restoredraft | cut copy paste pastetext | forecolor  backcolor bold italic underline strikethrough link codesample code |\
         alignleft aligncenter alignright alignjustify outdent indent lineheight formatpainter | \
       bullist numlist | blockquote subscript superscript removeformat | \
    table image media charmap hr pagebreak insertdatetime | fullscreen preview|",
    },
  },
  data() {
    return {
      articleContent: this.value,
      tinymceFlag: "",
      editorInit: {
        language_url: "/static/tinymce/langs/zh_CN.js", //引用static下的文件,确保打包后也能引用成功
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide", // skin路径，到样式文件夹即可
        content_css: "/tinymce/skins/content/default/content.css", //样式规则
        height: this.height,
        content_style:
          "* { padding:0; margin:0; } img {max-width:100% !important }",
        plugin_preview_width: 375, // 预览宽度
        plugin_preview_height: 668, //预览高度
        lineheight_val:
          "1 1.1 1.2 1.3 1.35 1.4 1.5 1.55 1.6 1.75 1.8 1.9 1.95 2 2.1 2.2 2.3 2.4 2.5 2.6 2.7 2.8 3 3.1 3.2 3.3 3.4 4 5", //行高
        fontsize_formats:
          "8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 24pt 36pt",
        font_formats:
          "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
        plugins: this.plugins,
        powerpaste_word_import: "merge",
        toolbar: this.toolbar,
        paste_data_images: true,
        statusbar: true, // 底部的状态栏
        menubar: true, // 最上方的菜单
        branding: false, // 水印“Powered by TinyMCE” // 此处为图片上传处理函数，这里直接用了base64的图片形式上传图片
        images_upload_handler: (blobInfo, success, failure) => {
          const img = "data:image/jpeg;base64," + blobInfo.base64();
          success(img);
        },
      },
    };
  },
  mounted() {
    tinymce.init({}); //初始化编辑器
  },
  methods: {
    // 导出word
    exportWord() {
      setTimeout(function () {
        // 找到编辑框里面的dom对象
        var dom = $("#tinymce_ifr")[0].contentDocument.documentElement;
        $(dom).wordExport("岗位职责表");
      }, 300);
    }, //保存内容
    saveModify() {
      //获取编辑器的内容，获取的是html，也就是包括标签和样式的内容。
      var content = tinymce.get("tinymce").getContent(); //发送请求。。。
    },
  },
  watch: {
    value(newValue) {
      this.articleContent = newValue;
    },
    articleContent(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>


<style>
</style>