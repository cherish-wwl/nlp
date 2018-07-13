<template>
  <div class="top-festival-box" v-show = "ishidden">
    <div id="top-festival" @click="jumpPage"></div>
    <span class="close-btn" @click="ishidden = false">
      <span>{{num}} s</span>
      <i class="el-icon-error"></i>
    </span>
  </div>
</template>
<script>
import { getTopFestivalInfo } from '@/api/localData'
export default {
  data(){
    return {
      ishidden:false,
      routeName:'',
      imageInfo:'',
      num:5,
      timer:null
    }
  },
  methods:{
    jumpPage(){
      if(this.imageInfo.type && this.imageInfo.type == 1){
        // 组件间跳转
        let routeData = this.$router.resolve(this.imageInfo.url)
        window.open(routeData.href, "_blank")
      }else{
        // 跳转外网
        window.open(this.imageInfo.url, "_blank")
      }
    },
    auotClose(){
      this.timer = setInterval(() => {
       if (this.num > 1) {
         this.num --;
        } else {
         this.ishidden = false
         clearInterval(this.timer); 
        }
       }, 1000)
    },
    init(){
      this.ishidden = false
      console.log("1-----------------------")
      if(this.timer != null){
        clearInterval(this.timer); 
      }
      getTopFestivalInfo().then(  res => {
        if(typeof res == "object" ){
          if(this.routeName != ''){
            res.forEach(element => {
              if(element.pageName == this.routeName){        
                this.ishidden = true
                this.imageInfo = element.imageInfo
                document.getElementById("top-festival").style.backgroundImage='url('+this.imageInfo.imgUrl+')'
                this.num = element.seconds
              }
            });
            
            this.auotClose()
          }
          
        }
      })
    }
  },
  watch:{
    $route(val){
      this.routeName = val.name
      this.init()
    }
  },
  mounted(){
    
    this.routeName = this.$route.name
    this.init()
  }
}
</script>
<style scoped>
 #top-festival{
  background: #122186 center no-repeat;
  height: 70px;
  position: relative;
  top: 0;
  z-index: 999;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  z-index: 1000;
 }
 .close-btn{
    position: absolute;
    top: 25px;
    right: 39px;
    color: #e0dcdc;
    z-index: 2000;
    cursor: pointer;
 }
 .close-btn:hover{
    color: #fff;
 }
</style>


