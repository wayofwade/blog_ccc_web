<template>
    <div id="all">
      <div id="mid-top">
        <div id="mid-top-1" v-for="d in divs" :key="d.name">
         {{d.name}}
        </div>
      </div>
      <div id="mid-bottom">
        <div id="mid-bottom-page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
        </div>
      </div>
    </div>
</template>
<style scoped>
  #all{
    background-color: tomato;
  }
  #mid-top{
    width:100%;
    height:94%;
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    background-color: blanchedalmond;
  }
  #mid-top-1{
    width:380px;
    height:250px;
    margin-left:25px;
    margin-bottom:10px;
    background-color: cornflowerblue;
  }
  #mid-bottom{
    width:100%;
    height:6%;
    background-color: whitesmoke;
    padding: 10px;
    box-sizing: border-box;
  }
  #mid-bottom-page{
    float: right;
  }
</style>
<script>
export default {
  data () {
    return {
      msg: 'hello vue',
      divs: [{name: 'ff', value: 'tttt'},
        {name: '23', value: 'tttt'},
        {name: '3', value: 'tttt'},
        {name: '5', value: 'tttt'},
        {name: 'f', value: 'tttt'},
        {name: 'vg', value: 'tttt'},
        {name: 'gb', value: 'tttt'},
        {name: 'bg', value: 'tttt'},
        {name: 'bg', value: 'tttt'},
        {name: 'bg', value: 'tttt'},
        {name: 'bg', value: 'tttt'},
        {name: 'bg', value: 'tttt'}]
    }
  }
}</script>
