<template>
  <div id="app">
    <div class="box">
      <div>333</div>
      <div>222</div>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: ''
    }
  }
}
</script>>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-background;
}
</style>
