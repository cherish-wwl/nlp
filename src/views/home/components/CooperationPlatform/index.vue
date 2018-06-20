<template>
  <el-container class='cooperation_platform'>
    <el-row class="text_center">
      <h2 class="font30">合作创新</h2>
    </el-row>
    <el-row class="display_panel">
      <el-carousel 
      :autoplay="false">
        <el-carousel-item v-for="(item, index) in datalist" :key="index">
          <ul>

             <li v-for="(img, index) in item" :key="index"> 
              <a @click="proxyImage(img.link)">
                <img :src="img.img_url" @mouseover="img.img_url=img.img_url1" @mouseout="img.img_url=img.img_url11"/>
              </a>
            </li>
          </ul> 
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </el-container>
</template>

<script>
export default {

  data(){
    return {
      currentIndex:0,
      datalist:[
        [{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/bjdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/bjdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/bjdx01.png'),
          link:'http://www.pku.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/bjsfdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/bjsfdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/bjsfdx01.png'),
          link:'http://www.bnu.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/bjyydx01.png'),
          img_url1:require('../../../../assets/home/cooperation/bjyydx02.png'),
          img_url11:require('../../../../assets/home/cooperation/bjyydx01.png'),
          link:'http://www.blcu.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/blg01.png'),
          img_url1:require('../../../../assets/home/cooperation/blg02.png'),
          img_url11:require('../../../../assets/home/cooperation/blg01.png'),
          link:'http://www.bit.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/dllg01.png'),
          img_url1:require('../../../../assets/home/cooperation/dllg02.png'),
          img_url11:require('../../../../assets/home/cooperation/dllg01.png'),
          link:'https://www.dlut.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/dbdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/dbdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/dbdx01.png'),
          link:'http://www.neu.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/fddx01.png'),
          img_url1:require('../../../../assets/home/cooperation/fddx02.png'),
          img_url11:require('../../../../assets/home/cooperation/fddx01.png'),
          link:'http://www.fudan.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/hd01.png'),
          img_url1:require('../../../../assets/home/cooperation/hd02.png'),
          img_url11:require('../../../../assets/home/cooperation/hd01.png'),
          link:'http://www.hit.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/nk01.png'),
          img_url1:require('../../../../assets/home/cooperation/nk02.png'),
          img_url11:require('../../../../assets/home/cooperation/nk01.png'),
          link:'http://www.nankai.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        }],
        [{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/njdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/njdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/njdx01.png'),
          link:'https://www.nju.edu.cn/',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/nmg01.png'),
          img_url1:require('../../../../assets/home/cooperation/nmg02.png'),
          img_url11:require('../../../../assets/home/cooperation/nmg01.png'),
          link:'http://www.imu.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/qhdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/qhdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/qhdx01.png'),
          link:'http://www.tsinghua.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/rjs01.png'),
          img_url1:require('../../../../assets/home/cooperation/rjs02.png'),
          img_url11:require('../../../../assets/home/cooperation/rjs01.png'),
          link:'http://www.iscas.ac.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/sddx01.png'),
          img_url1:require('../../../../assets/home/cooperation/sddx02.png'),
          img_url11:require('../../../../assets/home/cooperation/sddx01.png'),
          link:'http://www.sdu.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/sxdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/sxdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/sxdx01.png'),
          link:'http://www.sxu.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/shjtdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/shjtdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/shjtdx01.png'),
          link:'http://www.sjtu.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/szdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/szdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/szdx01.png'),
          link:'http://www.suda.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/tjdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/tjdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/tjdx01.png'),
          link:'http://www.tju.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        }],
        [{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/xjdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/xjdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/xjdx01.png'),
          link:'http://www.xju.edu.cn',
          active_img_url:require('../../../../assets/home/bsd01.png'),
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/xgs01.png'),
          img_url1:require('../../../../assets/home/cooperation/xgs.png'),
          img_url11:require('../../../../assets/home/cooperation/xgs01.png'),
          link:'http://www.iie.ac.cn',
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/zymzdx01.png'),
          img_url1:require('../../../../assets/home/cooperation/zymzdx02.png'),
          img_url11:require('../../../../assets/home/cooperation/zymzdx01.png'),
          link:'http://www.muc.edu.cn',
        },{
          img_name:'',
          img_url:require('../../../../assets/home/cooperation/zdhs01.png'),
          img_url1:require('../../../../assets/home/cooperation/zdhs02.png'),
          img_url11:require('../../../../assets/home/cooperation/zdhs01.png'),
          link:'http://www.ia.cas.cn',
        }],
      ],
    }
  },
  computed:  {
    
  },
  methods: {
    proxyImage(link){
      window.open(link,'_blank')
    }
  },
  mounted () {
  },
}
</script>
<style lang="scss" scoped>
.cooperation_platform {
  display: block;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: rgba(242, 242, 242, 1); 
  h2{
    font-weight: 500;
    margin: 55px 0;
  }
  .display_panel{
    width: 1200px;
    margin: 0 auto;
    ul{
      width: 94%;
      margin: 0 auto;
      list-style: none;
    }
    li{
      width: 33%;
      float: left;
      padding: 6px;
    }
  /deep/ .el-carousel__indicators{
      display: none;
    }
  }
 
}
img{
  width:300px;
  height: 84px;
}
</style>

