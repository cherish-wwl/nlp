<template>
   <el-container class='feature_panel container_80'>
    <el-row>
      <el-col :span="24" class='text_center'>
        <h2 class="temp_title">{{featureData.name}}</h2>     
      </el-col>
    </el-row>
    <el-row class="icon_panel">
      <div class="icon_panel_item" v-for="(item,index) in featureData.data" :key="index">
        <div class="grid-content">
          <img class='activeimg' :src='item.img'/>
          <p>{{ item.name }}</p>
          <p class="small font_color_grey">
            {{ item.descr }}
          </p>
        </div>
      </div>
    </el-row>
   </el-container>
</template>

<script>
  export default {
    data () {
      return {
      
      }
    },
    props: ['featureData'],
   
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
   .feature_panel {
    .icon_panel{
      display: flex;
      justify-content: space-around;
      .icon_panel_item {
        position: relative;
        width: 16.7%;
        text-align: center;
        p{
          word-break: break-all;
        }
        .activeimg{
          width: 50px;
          margin-bottom: 25px;
        }
      }
      
    }
      
   }
</style>

