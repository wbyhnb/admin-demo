<template>
  <div class="wrapper">
    <div class="typing-demo">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "textOver",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.wrapper {
  /* height: 100vh; */
  /*This part is important for centering*/
  display: inline-block;
  /* place-items: center; */
}

.typing-demo {
    display: block;
  width: 100%;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 3px solid; */
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>
