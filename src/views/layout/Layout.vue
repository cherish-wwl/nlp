<template>
  <div class="app-wrapper">
    <top-festival></top-festival>
    <header-panel @login="login" class="header-container"></header-panel>
    <div class="main-container">
      <app-main></app-main>
    </div>
    <el-footer v-html="footerText">{{ footerText }}</el-footer>
    <contact-us></contact-us>
  </div>
</template>

<script>
import { HeaderPanel, AppMain } from '@/views/layout/components'
import  ContactUs from '@/components/ContactUs' //悬浮框联系我们组件
import TopFestival from "@/components/TopFestival"  //顶层悬浮广告
import { getCommonData } from "@/api/localData"
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    AppMain,
    ContactUs,
    TopFestival
  },
  data () {
    return{
      loginVisible:false,
      footerText:"Copyright 版权©所有神州泰岳 UltraPower 京ICP备18006379号-1"
    }
  },
  computed: {
   
  },
  methods:{
    login(msg){
      console.log("++++++++++++++++++++登录+++++++++++++++++++++++++++")

      console.log(msg)
      this.loginVisible = msg
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
