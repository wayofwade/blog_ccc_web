<template>
    <div class="myBack">
      <div id="my-pic">
      <img src="../../assets/image/GZ.jpg"/>
      </div>
    <div id="loginWindow">
      <el-input v-model="loginForm.username" placeholder="请输入用户名" class="my-input"></el-input>
      <el-input v-model="loginForm.password" placeholder="请输入密码" class="my-input"></el-input>
      <el-button  class="my-btn" @click="login">Login</el-button>
    </div>
    </div>
</template>

<script>
import axios from '../../api/config'
import axios2 from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: 'chencc',
        password: '123456'
      }
    }
  },
  methods: {
    login () {
      console.log(this.loginForm) // 请求后端
      let obj = this.loginForm
      axios.post({
        url: '/blog/user/saveUser',
        params: obj
      })
        .then((res) => {
          if (res.rc === 0) {
            this.$message({
              message: '操作成功',
              type: 'success',
              duration: 1000
            })
            this.$router.push({path: '/index', params: {}})
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.myBack #my-pic{
  position: absolute;
  width:100%;
  height:100%;
}
.myBack #my-pic img{
  height:100%;
  width:100%;
}
#loginWindow{
  position: fixed;
  top:50%;
  left:50%;
  width:330px;
  height:200px;
  margin-top: -180px;
  margin-left: -200px;
  z-index:20;
  background-color: #B9C1C9;
}
#loginWindow .my-input{
  width:80%;
  margin:15px 30px;
}
#loginWindow .my-btn{
  margin:10px 55px;
  padding:10px;
  text-align: center;
  width:60%;
  height:30px;
  background:#97C5DC;
}
</style>
