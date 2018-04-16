<template>
  <div id="all">
    <div class="right">
      <div class="right-top">
        <div class="right-top-img">
         <img id="img" src="../../assets/image/克莱汤普森.jpg">
        </div>
        <div class="right-top-title">
          克莱汤普森
        </div>
      </div>
      <div class="right-bottom">
        <el-form ref="form" :model="detailForm" label-width="100px" style="margin-left: 50px;">
          <el-form-item label="数据表名称：" style="margin-top: 0px;margin-bottom: 0px;">
          <span style="margin:0px 5px;">{{detailForm.dtName}}</span>
        </el-form-item>
          <el-form-item label="数据表名称：" style="margin-top: 0px;margin-bottom: 0px;">
            <span style="margin:0px 5px;">{{detailForm.dtName}}</span>
          </el-form-item>
          <el-form-item label="数据表名称：" style="margin-top: 0px;margin-bottom: 0px;">
            <span style="margin:0px 5px;">{{detailForm.dtName}}</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="mid">
      <div class="mid-mid">
        <blog-list-page></blog-list-page>
      </div>
    </div>
  </div>
</template>
<style>
  #all{
    width:100%;
    height:calc(100vh - 60px);
    background-color: #089db0;
  }
  .right{
    width:260px;
    height:calc(100vh - 60px);
    padding:10px;
    box-sizing: border-box;
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
    padding: 10px;
    box-sizing: border-box;
    width:calc(100% - 260px);
    height: calc(100vh - 60px);
    float: left;
    background-color: yellow;
  }
  .mid-mid{
    width:100%;
    height: 100%;
    background-color: tomato;
  }
</style>
<script>
import blogListPage from './blogListPage.vue'
export default {
  components: {blogListPage},
  data () {
    return {
      detailForm: {
        dtName: 9527
      }
    }
  }
}
</script>
