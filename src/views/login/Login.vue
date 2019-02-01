<template>
    <div class="myBack">
      <div id="my-pic">
      <img src="../../assets/image/GZ.jpg"/>
      </div>
    <div id="loginWindow">
     <!-- <el-input v-model="loginForm.username" placeholder="请输入用户名" class="my-input"></el-input>
      <el-input v-model="loginForm.password" placeholder="请输入密码" class="my-input2"></el-input>
      <div class="divButton"><el-button  class="my-btn" @click="login">登陆</el-button></div>
      <div class="divButton"><el-button  class="my-btn" @click="login">注册</el-button></div>-->
      <!--登录数据-->
      <el-form v-if="isLogin" :model="loginData" status-icon :rules="loginRule" ref="loginData" label-width="86px" class="demo-ruleForm">
        <div style="margin-bottom: 20px;text-align: center">
          <span style="">登录知乎，发现更大的世界</span>
        </div>
        <el-form-item label="用户名" prop="username">
          <el-input class="smallInput" v-model="loginData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input class="smallInput" type="password" v-model="loginData.password"></el-input>
        </el-form-item>
      </el-form>
      <!--登录数据-->
      <!--注册的表单-->
      <el-form v-else :model="registerData" status-icon :rules="registerRule" ref="registerData" label-width="86px" class="demo-ruleForm">
        <div style="margin-bottom: 20px;text-align: center">
          <span style="">注册知乎，发现更大的世界</span>
        </div>
        <el-form-item label="用户名" prop="username">
          <el-input class="smallInput" v-model="registerData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input class="smallInput" type="password" v-model="registerData.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input class="smallInput" type="password" v-model="registerData.checkPass"></el-input>
        </el-form-item>
      </el-form>
      <!--注册的表单-->
      <div style="padding: 0 110px;box-sizing: border-box">
        <el-button type="primary" @click="toLogin('loginData')">登录</el-button>
        <el-button @click="toRegister('registerData')">注册</el-button>
      </div>
    </div>
    </div>
</template>

<script>
import axios from '../../api/config'
import StringUtil from '@/CommonUtils/StringUtil'
export default {
  data () {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        if (StringUtil.StrLength(value) > 15) {
          callback(new Error('用户名不能超过15个字符'))
        } else {
          callback()
        }
      }, 1000)
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerData.checkPass !== '') {
          this.$refs.registerData.validateField('checkPass')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerData.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      isLogin: true, // true登陆的窗口-false注册的窗口
      loginForm: {
        username: 'chencc',
        password: '123456'
      },
      loginData: {
        username: '',
        password: ''
      },
      registerData: {
        pass: '',
        checkPass: '',
        age: ''
      },
      loginRule: {
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur change' }
        ],
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur change' }
          // { validator: checkUsername, trigger: 'blur change' }
        ]
      },
      registerRule: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkUsername, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    logins (loginData) { // 登录请求后端
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
    },
    toRegister (registerData) { // 判断是不是注册form表单
      if (this.isLogin) {
        this.isLogin = false
        this.resetForm('loginData')
      } else {
        // 直接注册验证
        this.submitRegister(registerData)
      }
    },
    submitRegister (registerData) {
      this.$refs[registerData].validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(this.registerData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toLogin (loginData) { // 判断登录按钮
      let obj = {}
      axios.get({
        url: '/node/hello',
        params: obj
      }).then((res) => {
        console.log(res)
        if (res.rc === '0') {
          alert('good')
        }
      }).catch((error) => {
        console.log(error)
      })
      /* if (this.isLogin) {
        this.submitLogin(loginData)
      } else {
        this.isLogin = true
        this.resetForm('registerData')
      } */
    },
    submitLogin (loginData) { // 验证登录
      this.$refs[loginData].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) { // 去掉数据和验证
      this.$refs[formName].resetFields()
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
  padding:40px 0px 10px 20px;
  box-sizing: border-box;
  opacity:0.8;
  top:50%;
  left:50%;
  width:420px;
  margin-top: -180px;
  margin-left: -200px;
  z-index:20;
  background-color: #B9C1C9;
  box-shadow: 0px 4px 8px rgba(166,144,87,0.75);
}
#loginWindow .my-input{
  width:80%;
  margin:35px 30px;
}
.my-input2{
  width:80%;
  margin:15px 30px;
}
.divButton{
  width: 100%;
  height:30px;
  padding: 10px 58px;
  box-sizing: border-box;
}
#loginWindow .my-btn{
  padding: 0px 55px;
  box-sizing: border-box;
  text-align: center;
  width:200px;
  height:30px;
  line-height: 30px;
  background:#97C5DC;
}
  .smallInput{
    width:250px;
  }
</style>
