<template>
  <div id="all">
    <div class="right">
      <div class="right-top">
        <div class="right-top-img">
         <img id="img" src="../../assets/image/TPS.jpg">
        </div>
        <div class="right-top-title">
          克莱汤普森
        </div>
      </div>
      <div class="right-bottom">
        详细信息
      </div>
    </div>
    <div class="mid">
      <mid></mid>
    </div>
  </div>
</template>
<style scoped>
  #all{
    width:100%;
    height:100%;
    background-color: #b3d8ff;
  }
  .right{
    width:260px;
    height:calc(100vh - 60px);
    float:right;
    background-color: tomato;
  }
  .right-top{
    width:100%;
    height:25%;
    background-color: wheat;
  }
  .right-bottom{
    width:100%;
    height:75%;
    background-color: cornflowerblue;
  }
  .right-top-img{
    width:100%;
    height: 80%;
    text-align: center;
    color: #fff;
  }
  #img{
    width:150px;
    height:150px;
    border-radius:75px;
  }
  .right-top-title{
    font-family: "Axure Handwriting";
    font-size: 26px;
    text-align: center;
  }
  .mid{
    width:calc(100% - 260px);
    float:left;
    padding:10px 50px;
    box-sizing: border-box;
    background-color: white;
  }
</style>
<script>
import mid from './components/blogList-mid.vue'
export default {
  components: {
    mid
  },
  data () {
    return {msg: 'hello vue'}
  }
}
</script>
