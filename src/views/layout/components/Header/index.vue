<template>
   <el-header>
     <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index='0'>
        <router-link :to="{name:'home'}"><img src='../../../../assets/cnlp_logo.png'/></router-link>
      </el-menu-item>
      <el-submenu index="1" @click.native="isHidePanel(1,$event)">
          <template slot="title">产品服务 </template>
          <el-menu-item index="1-1" style="display:none;"></el-menu-item>
          <div class="sub-meun-panel">
            <el-row style='padding-left: 40px; margin-bottom: 20px;'>
              <el-input placeholder="请输入内容" v-model="searchKey" v-on:change='querySearch' @keyup.enter.native="querySearch" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-row>
            <el-row>    
              <div class='meunItemDiv' >
                <div class="submeunitem" v-for="child in serviceMeunList" :key="child.id">
                  <div class='meunItemFont01 font18'><label ><i class="fa fa-bookmark-o" aria-hidden="true"></i>&nbsp;&nbsp;{{ child.name}}</label></div>
                  <div class="itemlist">
                    <ul  v-for="item in child.children" :key="item.id">
                      <label class='meunItemFont02 font16'>{{ item.name }}</label>
                      <li class="font14" v-for="subChild in item.children" :key="subChild.id" v-if="subChild.show == true" @click="linkServiceListPage(subChild.id)">
                        {{ subChild.name }}  
                      </li>
                    </ul>
                  </div>
                </div> 
              </div>
            </el-row>
          </div>
      </el-submenu>
      <el-submenu index="2" @click.native="isHidePanel(2,$event)">
        <template slot="title">解决方案 </template>
        <el-menu-item index="2-1" style="display:none;"></el-menu-item>
        <div class="sub-meun-panel" >

          <el-row>
            <el-col class="dataSetItem" :span="12" v-for="child in dataSetList" :key="child.id">
              <el-col :span="8" class="item-left"  @click.native="linkSolutionPage(child)" > 
                <img :src="child.solutionIcon" onerror="this.src='/static/default.png'"/>
              </el-col>
              <el-col :span="16" class="item-right">           
                  <label>
                    <svg-icon icon-class="tag" ></svg-icon> 
                    <a  class="font18" @click="linkSolutionPage(child)" href="javaScript:void(0)"> {{ child.solutionName }} </a>
                    <!-- <router-link :to="{name:child.solutionUrl,params:{id:child.id}}">{{ child.solutionName }}</router-link> -->
                  </label>
                <p class="small font_color_grey2 no_more_line_3 font14" :title="child.solutionDesc"> {{ child.solutionDesc | subStringNoMore3line}} </p>
              </el-col>
            </el-col>
          </el-row>         
        </div>
      </el-submenu>

      <el-menu-item index='3'  @click="jumpPage({name:'dataset'})">
        数据集
      </el-menu-item>
      <el-menu-item index='4'  @click="jumpPage({name:'innovation'})">
        创新平台
      </el-menu-item>
      <el-menu-item index='5' @click="jumpPage({name:'nlpschool'})">
        NLP学院
      </el-menu-item>
      <div class="rightPanel">
        <el-menu-item index='login' class='loginItem'>
          控制台
        </el-menu-item>
        <!-- <el-submenu index="userInfo" class="userInfoItem" v-if="isLogin">
          <template slot="title">{{ userName }}</template>
          <el-menu-item index="userInfo-1" @click="jumpToConsole">控制台</el-menu-item>
          <el-menu-item index="userInfo-1" @click="jumpToConsoleMine">个人中心</el-menu-item>
          <el-menu-item index="userInfo-2" @click="logout">退出</el-menu-item>
        </el-submenu> -->
     </div>      
    </el-menu>
   </el-header>
</template>

<script>
import { getMenus } from '@/api/header'
import store from '../../../../store'
import { Message } from 'element-ui'
import Cookies from 'js-cookie'
import { getSolutionList } from '@/api/solutions'
import { subStringNoMore3line } from '@/utils/index'
import { getToken } from '@/utils/auth'
import { getCommonData } from "@/api/localData"
  export default {
    data() {
      return {
        activeIndex: '1',
        serviceMeunList:[],
        originalMeunList:[],
        searchKey:'',
        searchSetDataKey:'',
        dataSetList:[],
        userName:"",
        isLogin:false,
        commonData:""
      }
    },
    filters:{
      subStringNoMore3line (str){
        return subStringNoMore3line(str,68)
      }
    },
    methods: {
       // 切换菜单事件
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
        if(key == "login"){
          console.log( getToken())
          if(!this.isLogin){
            window.location.href = this.commonData.userManageBaseUrL
          }else{
            window.location.href = this.commonData.consoleUrl 
          }   
        }
      },
      // 点击判断是否显示下载框
      isHidePanel(index,e){
        if(e){
          if(e.target.className == "el-submenu__title"){
            var displayValue = document.querySelectorAll(".el-menu")[index].style.display
            if(displayValue == "none"){
              document.querySelectorAll(".el-menu")[index].style.display = ""
            }else{
              document.querySelectorAll(".el-menu")[index].style.display = "none"
            }
          }
        }
        
      },
      // 跳转页面
      jumpPage(params){
        this.activeIndex = "0"
        if(params.name == "innovation"|| params.name == "nlpschool"){
          let routeData = this.$router.resolve({
            name: params.name,
          });
          window.open(routeData.href, "_blank");
        }else{
          this.$router.push(params)
        }
        
      },
      // 跳转到服务详情页面 
      linkServiceListPage (id) {
        // console.log("跳转到服务详情页面")
        document.querySelectorAll(".el-menu")[1].style.display="none" 
        // console.log(document.querySelectorAll(".el-menu")[1].style.display)
        this.isHidePanel(1)
        this.activeIndex = "1-1"
        Cookies.set("service_id",id)
        // document.querySelectorAll(".el-menu")[1].style.display="none"     
        this.$router.push({name: 'serviceLists',params:{ randomValue: Math.random().toString(36).substr(2) }})
      },
      // 跳转到解决方案列表页面
      linkSolutionPage(item){
        this.activeIndex = "2-1"
        document.querySelectorAll(".el-menu")[2].style.display="none"
        if(item.forwardType == '011002'){
          this.$router.push({name:item.solutionUrl,params:{id:item.id}})
        }else{
          window.open(item.solutionUrl)
        }
        document.querySelectorAll(".el-menu")[2].style.display="none"
        this.isHidePanel(2)
      },
      //查询
      querySearch(){
        console.log("当前查询字符串为" + this.searchKey )
        this.getSearchResult(this.serviceMeunList)
        // console.log(this.serviceMeunList)
      },
      // 对数据进行查询，并添加字段show
      getSearchResult(list){
        for(let i=0;i<list.length;i++){
          if( list[i].children ){
            this.getSearchResult(list[i].children)
          }else{
            if(list[i].name.indexOf(this.searchKey) != -1){
              list[i].show = true
            }else{
              list[i].show = false
            }
          }
        }
      },
      // 遍历数据  添加show 字段 用于控制显影
      initMeunList(list){
        for(let i=0;i<list.length;i++){
          if( list[i].children ){
            this.initMeunList(list[i].children)
          }else{
            list[i].show = true
          }
        }
      },
      // 退出登录
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      },
      // 跳转到管控台
      jumpToConsole(){
        window.location.href = this.commonData.consoleUrl
      },
      // 跳转到个人中心
       jumpToConsoleMine(){
         window.location.href = this.commonData.consoleUrl +"/#/mine"
       }
    },
    mounted () {
      // 初始化
      getMenus().then(response => {
        this.initMeunList(response.data)
        this.serviceMeunList = response.data
        this.originalMeunList = response.data
        // console.log(this.serviceMeunList)
      })
      getSolutionList().then(response => {
        this.dataSetList = response.data
      })
      getCommonData().then( res => {
        this.commonData = res
      })
      // console.log(getToken())
      if(getToken() != "" && getToken()){
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          console.log("拉取用户信息")
          console.log(res)
          this.isLogin = true
          this.userName = res.data.userName
        }).catch(() => {
          this.isLogin = false
        })
      }else{
        this.isLogin = false
      }
      
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  .meunItemDiv {
    display: inline-flex;
    .submeunitem{
      padding: 0 38px;
      .itemlist{
        margin-top: 15px;
        column-count: 4;  // 设置列数
        column-gap: 0;    // 设置列间距
      }
      .meunItemFont01{
        color: #9d9a96;
      }
      .meunItemFont02{
        color: #e9e7e3;
        // font-size: small;
      }
      ul{
        break-inside: avoid; 
        box-sizing: border-box; 
        padding: 10px; 
        li{
          width: 100px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-top: 8px;
          color: #9d9a96;
          font-size: smaller;
          cursor:pointer;
          &:hover{
            color: #389FFF;
          }
        }
      }
     
      &:not(:first-child) {
        border-left: 1px solid #333;
      }
    }
    // 判断不同屏幕设置列数
    /* @media (min-width: 400px) { 
      .itemlist { 
          column-count: 2; 
      } 
    } 
    @media (min-width: 1200px) { 
      .itemlist { 
          column-count: 4; 
      } 
    }  */
  }
  .dataSetItem{
    padding: 0 40px 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .item-left{
      img{
        // width: 189px;
        height: 112px;
        transition: all 0.6s;  
        &:hover{  
          transform: scale(1.1);  
        }  
      }  
    }
    
    .item-right {
        padding: 0 30px;
        label{
          // margin-left: 15px;
          .svg-icon[data-v-5d4549d3] {
            color: #969292;
          }
          color: #d7d5d5;
          &:hover{
            color: #4c4cfc;
            cursor: pointer;
          }
        }
        p{
          height: 80px;
          overflow: hidden;
        }
      
    }
  }
  
</style>
