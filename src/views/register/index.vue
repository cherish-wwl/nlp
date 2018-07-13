<template>
  <div class="register app-wrapper">
    <header-panel @login="login" @rebackPage="rebackPage" class="header-container"></header-panel>
    <content-panel @rebackPage="rebackPage"></content-panel>
    <el-footer>{{ footerText }}</el-footer>
    <login :visible="loginVisible" @login="login"></login>
    <contact-us></contact-us>
  </div>
</template>

<script>
import { HeaderPanel, ContentPanel } from '@/views/register/components'
import  ContactUs from '@/components/ContactUs' //悬浮框联系我们组件
import Login from '@/components/Login'// 登录组件
import { getCommonData } from "@/api/localData"
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    ContentPanel,
    Login,
    ContactUs
  },
  data () {
    return{
      loginVisible:false,
      footerText:"Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1"
    }
  },
  computed: {
   
  },
  methods:{
    login(msg){
      console.log(msg)
      this.loginVisible = msg
    },
    rebackPage(){
      console.log("---------------")
      if(this.$route.params.serviceId && this.$route.params.serviceId != ""){
        this.$router.go(-1)
      }else{
        this.$router.push({name:"home"})
      }
        
    }
  },
  mounted(){
    getCommonData().then( res => {
      if(res.footerText){
        this.footerText = res.footerText
      }
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

</style>
