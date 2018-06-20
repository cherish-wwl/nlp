<template>
  <div class="register-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title">欢迎注册</h3>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名（6-20位数字字母）" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" :type="pwdType" v-model="loginForm.password" autoComplete="on"
          placeholder="输入密码"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item prop="repassword">
        <el-input name="repassword" :type="pwdType" v-model="loginForm.repassword" autoComplete="on" placeholder="再次输入密码"></el-input>
        <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input name="phone" type="text" v-model="loginForm.phone" placeholder="手机号码" autoComplete="on"></el-input>
      </el-form-item>
      <el-form-item prop="verificationCode">
        <el-input name="verificationCode" type="text" v-model="loginForm.verificationCode" @keyup.enter.native="handleLogin"  placeholder="验证码" autoComplete="on">
         <template slot="append" v-if="!verifiy" ><span @click="getVerificationCode" style="cursor:pointer;">获取验证码</span></template>
         <template slot="append" v-if="verifiy">{{ countDownValue }}s</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          注册
        </el-button>
      </el-form-item>
      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div> -->
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername , isPhoneAvailable} from '@/utils/validate'

export default {
  
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else if(value !==this.loginForm.repassword){
        callback(new Error('两次密码输入不一致'))
      } else {
        callback()
      }
    }
    const validateRePass = (rule, value, callback) => {  
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else if(value !==this.loginForm.password){
        callback(new Error('两次密码输入不一致'))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (!isPhoneAvailable(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    const validate4Code = (rule, value, callback) => {
      if (value.length ==0 ) {
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        repassword:'',
        phone:'',
        verificationCode:''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }],
        repassword: [{ required: true, trigger: 'blur', validator: validateRePass }],
        phone: [{ required: true, trigger: 'blur', validator: validatePhone }],
        verificationCode: [{ required: true, trigger: 'blur', validator: validate4Code }]
      },
      loading: false,
      pwdType: 'password',
      countDownValue:60,
      verifiy:false
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then((res) => {
            //  this.loading = false
            // this.$router.push({ path: '/' })
            console.log(res)
            this.loading = false
            if(res){
               this.$router.push({ path: '/' })
              
            }else{
               this.$message('用户名或密码错误！');
            }
            
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getVerificationCode (){
     
      this.verifiy = true
      let interval=setInterval(()=>{
        if(this.countDownValue == 0){
          this.verifiy = false 
          clearInterval(interval)
          return
        }
        this.countDownValue -= 1
      },1000)
       this.$message({
        message: '验证码发送成功！请注意接收',
        type: 'success'
      });
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.register-container{
  padding: 8% 20%;
  background-color: rgb(241, 243, 245);
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 5%;
    font-size: 16px; 
    cursor: pointer;
    user-select:none;
  }
  form.el-form{
    background-color: #fff;
    padding: 10% 26%;
  }
 }
</style>
