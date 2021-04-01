<template>
  <div class="home_cont">
    <div class="cont_mian">
      <h2>Hello！</h2>
      <img src="@/assets/logo.jpg" alt="背景图">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home_cont {
    width: 100%;
    height: 100%;
  }
  .cont_mian {
    position: absolute;
    width: 500px;
    top: 50%;
    text-align: center;
    transform: translate(50%, -50%);
    img {
      display: inline-block;
      width: 100%;
    }
  }
  
</style>
