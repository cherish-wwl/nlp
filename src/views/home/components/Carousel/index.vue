<template>
    <el-carousel height="470px" :interval="5000">
      <el-carousel-item v-for="(item, index) in datalist" :key="index">
        <template v-if="item.link == ''">
          <img :src='item.imgUrl' class="carouse-img"/>
        </template>
        <template v-else>
          <a :href="item.link" target="_blank" class="carouse-img">
            <img :src='item.imgUrl' class="carouse-img"/>
          </a>
        </template>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    data() {
      return {
        datalist:[{
            imgUrl:require('../../../../assets/home/banner_1.jpg'),
            link:''
          },{
            imgUrl:require('../../../../assets/home/banner_03.jpg'),
            link:''
          },{
            imgUrl:require('../../../../assets/home/banner_4.jpg'),
            link:''
          },{
              imgUrl:require('../../../../assets/home/banner_5.jpg'),
              link:''
          },{
              imgUrl:require('../../../../assets/home/banner_3.jpg'),
              link:'http://www.cipsc.org.cn'
          }],
       }
     },
    computed:{
    
    },
    methods: {
      
    },
    mounted () {
      
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  //  img{
  //    width: 100%;
  //    height: 100%;
  //  }
  .carouse-img{
    // display: flex;
    // justify-content: center;
    left: 50%; 
    top: 50%; 
    transform: translate(-50%,-50%);
    position: absolute;
  }
  .carouse-img{
    width: auto;
    height:470px;
  }
</style>

