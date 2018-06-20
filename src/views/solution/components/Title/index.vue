<template>
  <el-row class='banner_info'>
      <img class='banner_bg_img' :src='titleData.bgimg'/>
      <div class='banner_desc'>
        <div class="left">
          <img class='banner_bg_img' :src='titleData.img'/>
        </div>
        <div class="right">
          <h2> {{ titleData.title }} </h2>
          <p class="smaller"> {{ titleData.desrc }} </p>
        </div>
      </div>
    </el-row>
</template>

<script>
export default {
  props:["titleData"]
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.banner_info{
  position: relative;
  img.banner_bg_img{
    width: 100%;
  }
  .banner_desc{
    position: absolute;
    top: 10px;
    color: #fff;
    left: 20%;
    width: 60%;
    bottom: 26px;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    .left{
      border-right: 1px solid #fff;
    }
    .right{
      padding-left: 15px;
    }
  }
}

</style>
