/**
*@max {number}//最大值
*@min {number}//最小值
*@places {number}//小数位数(默认为2)
*@step {number}//步长(默认为16位)
*/
import Vue from 'vue';
Vue.directive('num', {
 inserted(el, vDir, vNode) {
   // vDir.value 有指令的参数
   let content
   // 设置输入框的值,触发input事件,改变v-model绑定的值
   const setVal = (val) => {
     if (vNode.componentInstance) {
       // 如果是自定义组件就触发自定义组件的input事件
       vNode.componentInstance.$emit('input', val)
     } else {
       // 如果是原生组件就触发原生组件的input事件
       el.value = val
       el.dispatchEvent(new Event('input'))
     }
   }
   // 按键按下=>只允许输入 数字/小数点
   el.addEventListener('keypress', (event) => {
     let arg_toFixed = 2 // 默认保留至2位小数
     let arg_step = 16 // 默认保留至16位
     if (vDir.value) {//判断是否有参数
       if (vDir.value.places) {
         arg_toFixed = parseFloat(vDir.value.places)
       }
       if (vDir.value.step) {
         arg_step = vDir.value.step
       }
     }
     const e = event || window.event
     const inputKey = String.fromCharCode(
       typeof e.charCode === 'number' ? e.charCode : e.keyCode,
     )
     const re = /\d|\./
     content = e.target.value
     // 定义方法,阻止输入
     function preventInput() {
       if (e.preventDefault) {
         e.preventDefault()
       } else {
         e.returnValue = false
         // return false
       }
     }
     if (!re.test(inputKey) && !e.ctrlKey) {
       preventInput()
     } else if (content.indexOf('.') > 0 && inputKey === '.') {
       // 已有小数点,再次输入小数点
       preventInput()
     } else if (
       // 小数点后的位数超过不可输入
       content.indexOf('.') > 0 &&
       content.length - content.indexOf('.') > arg_toFixed
     ) {
       preventInput()
     } else if (content.toString().length >= arg_step) {
       preventInput()
     }
   })
   // 规范
   function standard(event) {
     const e = event || window.event
     content = parseFloat(e.target.value)
     if (!content) {
       // content = 0.00
       if (content == 0) {
         content = 0
       } else {
         content = ""
       }
     }
     e.target.value = content ? content : ''
     let arg_max = ''
     let arg_min = ''
     if (vDir.value) {
       arg_max = parseFloat(vDir.value.max) + '' // 这里特意转化成字符串形式 防止当最大或者最小只为0时，判断为false
       arg_min = parseFloat(vDir.value.min) + '' // 这里特意转化成字符串形式 防止当最大或者最小只为0时，判断为false
     }
     if (arg_max && +content > arg_max) {
       e.target.value = arg_max
       content = arg_max
     }
     if (arg_min && +content < arg_min) {
       e.target.value = arg_min
       content = arg_min
     }

     setVal(e.target.value)
   }
   // 输入中文的时候
   el.addEventListener('compositionend', (event) => {
     standard(event)
   })
   // 失去焦点=>保留指定位小数
   el.addEventListener('focusout', (event) => {
     // 此处会在 el-input 的 @change 后执行
     standard(event)
   })
 },
})
