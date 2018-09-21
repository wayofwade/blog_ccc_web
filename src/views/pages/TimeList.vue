<template>
    <div>
        时间轴
      <div>
        <canvas id="myCanvas" width="200" height="100"
                style="border:1px solid #000000;">
        </canvas>
      </div>
      <div><span>手机号码：15990141421</span>
        <span><el-button @click="sendMessage">短信发送</el-button></span>
        <span><el-button>电话发送</el-button></span>
      </div>
    </div>
</template>
<style scoped></style>
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
      height: 200
    }
  },
  methods: {
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
