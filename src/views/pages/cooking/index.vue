<template>
    <div class="container">
      <el-container>
        <el-header height="150px;" class="top">
          <div class="top-title">合理的饮食，是身体健康的第一要素</div>
        </el-header>
        <el-main style="padding: 10px 50px;">
            <el-col :span="5" v-for="(o, index) in 10" :key="o" :offset="index > 0 ? 2 : 2">
              <el-card :body-style="{ padding: '0px'}" style="margin-top: 20px;">
                <img src="../../../assets/image/TPS.jpg" class="image">
                <div style="padding: 10px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button"  @click="gotoDetail">查看详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
        </el-main>
        <el-footer>
          <div class="bottom-page">
            <el-pagination
              class="pageDetail"
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </el-footer>
      </el-container>
    </div>
</template>
<style>
body {
    background-color: whitesmoke;
}
.top{
  height:150px;
  background-color: turquoise;
}
.top-title {
  font-size: 30px;
  text-align: center;
  line-height: 150px;
}
/*中间图片相关*/
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
/*中间图片相关*/
.bottom-page{
  height:80px;
  background-color: honeydew;
  position: relative;
}
.pageDetail{
  position: absolute;
  right:50px;
  bottom: 20px;
}
</style>
<script>
export default {
  data () {
    return {
      msg: 'hello vue',
      currentDate: new Date()
    }
  },
  components: {},
  methods: {
    gotoDetail () {
      console.log('00000')
      this.$router.push({name: '做菜详情', path: '/cookDetail'})
    }
  }
}</script>
