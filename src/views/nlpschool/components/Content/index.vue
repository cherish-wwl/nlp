<template>
  <div class="nlpschool"> 
    <el-row>
      <img src="../../../../assets/nlpschool/u4199.jpg"/>
    </el-row>
    <el-row class="classroomContent" :gutter="20">
      <el-col :span="18" >
        <div class="classroomDiv">
          <div class="title_line">
            <img class="icon" src="../../../../assets/nlpschool/u4538.png">
            <span class="font28 c333">NLP小学院</span>
            <!-- <span class="seeMore c999 font14"> 更多 >></span> -->
          </div>
          <el-row class="lesson_content" :gutter="30">
            <el-col  :span="8" v-for=" item in lessonData" :key="item.id">
              <div  class="lesson-item" @click="jumpDetails()">
                <img class="lesson-img" :src="item.img" />
                <p class="c333 font16">
                  <img class="icon2" src="../../../../assets/nlpschool/u4327.png">
                  &nbsp;{{ item.title }}
                </p>
                <p class="c999 font14">
                  <img class="icon2" src="../../../../assets/nlpschool/u4329.png">
                  &nbsp;{{ item.type }}
                </p>
                <p class="c999 font14">
                  <img class="icon2" src="../../../../assets/nlpschool/u4331.png">
                  &nbsp;{{ item.auther }}
                </p> 
              </div>
            </el-col>
            
          </el-row>
        </div>
        <!-- <div class="classroomDiv">
          <div class="title_line">
            <img class="icon" src="../../../../assets/nlpschool/u4538.png">
            <span class="font28 c333">NLP算法推荐课程</span>
            <span class="seeMore c999 font14"> 更多 >></span>
          </div>
          <el-row class="lesson_content" :gutter="30">
            <el-col  :span="8" v-for=" item in lessonData" :key="item.id">
              <div  class="lesson-item" @click="jumpDetails()">
                <img class="lesson-img" :src="item.img" />
                <p class="c333 font16">
                  <img class="icon2" src="../../../../assets/nlpschool/u4327.png">
                  &nbsp;{{ item.title }}
                </p>
                <p class="c999 font14">
                  <img class="icon2" src="../../../../assets/nlpschool/u4329.png">
                  &nbsp;{{ item.type }}
                </p>
                <p class="c999 font14">
                  <img class="icon2" src="../../../../assets/nlpschool/u4331.png">
                  &nbsp;{{ item.auther }}
                </p> 
              </div>
            </el-col>
          </el-row>
        </div> -->
      </el-col>
      <el-col :span="6" class="lecturer">
        <div class="title_line">
            <img class="icon" src="../../../../assets/nlpschool/u4542.png">
            <span class="font28 c333">金牌讲师</span>
            <!-- <span class="seeMore c999 font14"> 更多 >></span> -->
        </div>
        <el-row class="lecturer_content">
          <el-col v-for="item in lecturerData" :key="item.id" class="lecturer_item line-animate-content">
            <div class="line"></div>
            <img :src="item.img">
            <div class="lecturer_info">
              <p>{{ item.name }}</p>
              <p>{{ item.academy }}</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<script> 

export default {
  data (){
    return {
      lessonData:[
        {
          id:1,
          img:require("../../../../assets/nlpschool/u4319.jpg"),
          title:"自然语言处理的定义和发展",
          type:"免费",
          auther:"任宁"
        },
        {
          id:2,
          img:require("../../../../assets/nlpschool/u4335.jpg"),
          title:"规则与统计之争",
          type:"免费",
          auther:"任宁"
        },
        {
          id:3,
          img:require("../../../../assets/nlpschool/xkjc.jpg"),
          title:"自然语言处理的学科基础",
          type:"免费",
          auther:"任宁"
        },
        {
          id:4,
          img:require("../../../../assets/nlpschool/yjfx.jpg"),
          title:"自然语言处理的研究方向",
          type:"免费",
          auther:"任宁"
        },
        {
          id:5,
          img:require("../../../../assets/nlpschool/hyjh.jpg"),
          title:"自然语言处理与传统行业的结合",
          type:"免费",
          auther:"任宁"
        },
        {
          id:6,
          img:require("../../../../assets/nlpschool/znfz.jpg"),
          title:"人工智能的发展",
          type:"免费",
          auther:"任宁"
        },
      ],
      lecturerData:[
        // {
        //   id:1,
        //   name:"吴云鹤",
        //   academy:"人工智能研究院",
        //   img:require("../../../../assets/nlpschool/u4581.png")
        // },
        {
          id:2,
          name:"任宁",
          academy:"人工智能研究院",
          img:require("../../../../assets/nlpschool/u4644.png")
        },
        // {
        //   id:3,
        //   name:"吴云鹤",
        //   academy:"人工智能研究院",
        //   img:require("../../../../assets/nlpschool/u4581.png")
        // },
      ]
    }
  },
  methods:{
    jumpDetails () {
      let routeData = this.$router.resolve({
        path: "/nlpDetails",
        query: {}
      });
      window.open(routeData.href, "_blank");
			
    }
  }
}
</script>

<style lang="scss" scoped>
  .nlpschool{
    background-color: #f5f5f6; 
    .icon2{
      width: 15px;
      height: 15px;
    }
    .c333{
      color: #333;
    }
    .c999{
      color: #999;
    }
    .classroomContent{
      padding: 0 8%;
      margin: 0 !important;
      .title_line{
        margin: 24px 0 12px 0;
        .icon{
          width: 40px;
          height: 40px;
          vertical-align: bottom;
        }
        .seeMore{
          float: right;
          margin-top: 19px;
        }
      }
      // .lesson_content{
        .lesson-item{
          background-color: #fff;
          margin: 12px 0;
          .lesson-img{
            max-height: 190px;
            min-height: 150px;
          }
          p{
            margin: 0;
            padding: 12px;
            height: 48px;
          }
          &:hover{
            -moz-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
            -webkit-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
            box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
          }
        }
      // }
    }
    .lecturer{
      .lecturer_item{
        display: flex;
        background-color: #fff;
        margin: 12px 0;
        img{
          width: 35%;
        }
        .lecturer_info{
          margin: auto 0;
        }
      }
    }
    
  }
  
  
</style>
