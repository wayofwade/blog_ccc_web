<template>
    <div>
      <div id="timeline">
        <div id="textout">
          <div class="text" @mousemove="movecolor(1)" @mouseout="outcolor(1)">云海</div>
          <div class="text" @mousemove="movecolor(2)" @mouseout="outcolor(2)">瀑布</div>
          <div class="text" @mousemove="movecolor(3)" @mouseout="outcolor(3)">古树</div>
          <div class="text" @mousemove="movecolor(4)" @mouseout="outcolor(4)">夕阳</div>
          <div class="text" @mousemove="movecolor(5)" @mouseout="outcolor(5)">大海</div>
        </div>
        <div id="lineout">
          <div class="line" id="l1" @mousemove="movecolor(1)" @mouseout="outcolor(1)"></div>
          <div class="line" id="l2" @mousemove="movecolor(2)" @mouseout="outcolor(2)"></div>
          <div class="line" id="l3" @mousemove="movecolor(3)" @mouseout="outcolor(3)"></div>
          <div class="line" id="l4" @mousemove="movecolor(4)" @mouseout="outcolor(4)"></div>
          <div class="line" id="l5" @mousemove="movecolor(5)" @mouseout="outcolor(5)"></div>
        </div>
      </div>
      <div id="picture"><img id="backgroundimg" :src="imgSrc"></div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  components: {},
  created () {
  },
  mounted () {
    // this.initTopo()
  },
  data () {
    return {
      msg: 'hello vue',
      width: 100,
      height: 200,
      imgSrc: require('@/assets/image/pic01.jpg')
    }
  },
  mounted() {
    this.movecolor(1) // 默认第一章
  },
  methods: {
    movecolor (num) {
      console.log('mover-color')
      document.getElementById('l' + num).style.background = '#98E0FA'
      this.imgSrc = require('@/assets/image/pic0' + num + '.jpg')
      // document.getElementById('backgroundimg').src = '@/assets/image/pic0' + num + '.jpg'
    },
    outcolor (num) {
      console.log('out-color')
      document.getElementById('l' + num).style.background = '#ccc'
    },
    sendMessage () {
      console.log('sendMessage')
      let timestamp = Date.parse(new Date()).toString() + '123'
      let searchParams = new URLSearchParams()
      searchParams.append('stm', timestamp)
      // let url = 'https://api.growingio.com/v2/8a762667df5cb9d5/web/action?stm=' + searchParams
      let urls = 'https://account.dtstack.com/uic/api/v2/account/register/send-sms-code'
      console.log('searchParams')
      console.log(searchParams)
      // 第一个请求
      axios.get(urls, { phone: 15990141421 })
        .then(function (response) {
          console.log(response)
        }).catch(function (response) {
          console.log(response)
        })
      /* let obj = {
        start: 0,
        count: 20
      }
      axios.post({
        url: '/sticker/stickerClass/getStickerClassList',
        requestObj: obj,
        loadingDom: this.$refs.grid.$el
      })
        .then((res) => {
          console.log(res)
          if (res.rc === 0) {
          }
        })
        .catch(error => {
          console.log(error)
        }) */
    }
  }
}
</script>
<style scoped>
  #timeline{
    position: fixed;
    width: 100%;
    height: 100%;
    left:30px;
    top: 180px;

  }
  #textout{
    width:35px;
    float: left;
    height: 100%;
    margin-left: 20px;
    padding-top:10px;
    cursor:pointer;
  }
  #lineout{
    width:4px;
    height: 100%;
    float: left;
    margin-left: 5px;

  }
  .line{
    width: 4px;
    height: 50px;
    background: #ccc;

  }
  .text{
    width: 35px;
    height: 50px;
  }
  #picture{
    width: 700px;
    height: 450px;
    margin-top: 50px;
    margin-left:auto ;
    margin-right:auto;
  }
  #backgroundimg{
    width: 700px;
    height: 450px;
  }
</style>
