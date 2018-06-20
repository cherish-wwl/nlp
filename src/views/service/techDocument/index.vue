<template class="asd">
  <!-- <h1 >
    {{ title }}
  </h1> -->
<div class="detail">
    <el-row>
      <div class="">
        <el-row class="font26">
          <h3>简介：</h3>
        </el-row>
        <el-row class="font18">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi,您好,欢迎使用神州泰岳自然语言深度处理API服务。
        </el-row>
        <el-row class="font18">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;云服务器BCC(Baldu Cloud Compute)是处理能力可弹性伸缩的计算服务。管理方式比物理服务器更简单高效,可根据您的业务需要创建释放任意多台云服务器实例，提升运维效率。为用户快速部署应用构建稳定可靠的基础，降低网络规模计算的难度，使用用户更专注于核心业务创新。且无需花费时间和金钱来购买及维护托管虚拟机的硬件，有效率低IT成本。
        </el-row>
        <br>
      </div>
      <div>
        <el-row class="font20">
          <h3>{{ classtype == '001'?'基础':'应用'}}服务接口：</h3> <!-- 数据 -->
        </el-row>
        <el-row class="font18">
          {{data.serviceName}} <!-- 数据 -->
        </el-row>
        <el-row class="font20">
          <h3>接口描述：</h3>
          <span class="font18">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ data.interfacetext }}
          </span>
        </el-row>
      </div>
      <div>
        <el-row class="font20">
          <h4>请求说明：</h4>
          <h5>请求示例：</h5>
        </el-row>
        <el-row>
          <span class="font18">HTTP方法：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="qwe">{{data.httpmethod}}</span><br><br>
          <span class="font18">HTTP方法路径:&nbsp;&nbsp;</span><span class="qwe">{{data.globalurl}}</span><br>
        </el-row>

          <div>
          <el-row>
            <h3><span>Body请求实例:</span></h3>
              <pre class="JSONhtmlStyle" v-html="bodyexample"> </pre>
          </el-row>
          </div>
          <div>
            <el-row>
              <h3>请求参数：</h3>
              <el-col>
                <el-table :data="tableData1"  border style="width: 100%" >
                  <el-table-column prop="paraname" label="参数"> </el-table-column>
                  <el-table-column prop="needorno" label="是否必填"> </el-table-column>
                  <el-table-column prop="type" label="类型"> </el-table-column>
                  <el-table-column prop="explain_" label="说明"> </el-table-column>
                  <el-table-column prop="value" label="值"> </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-row>
              <h3>返回参数：</h3>
              <el-col>
                <el-table :data="tableData2"  border style="width: 100%" >
                  <el-table-column prop="paraname" label="参数"> </el-table-column>
                  <el-table-column prop="type" label="类型"> </el-table-column>
                  <el-table-column prop="explain_" label="说明"> </el-table-column>
                  <el-table-column prop="value" label="值"> </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </div>
          <div>
            <h3>返回实例：</h3>
            <el-col>
              <pre class="JSONhtmlStyle" v-html="backexample"></pre>
              <br><br><br>
            </el-col>
          </div>
      </div>
    </el-row>
    <div class="doc_contact">
        <el-row class="font16">
          如果您对文档内容有任何疑问，可以通过以下几种方式联系我们：
        </el-row>
        <el-row class="font16">
          联系电话：010-57973555（9:00-18:00）
        </el-row>
        <el-row class="font16">
          邮箱：China-NLP@ultrapower.com.cn
        </el-row>
    </div>
</div>
</template>
<script>
import { techDocument } from '@/api/techDocument'
import { getServiceDetails } from '@/api/serviceLists'
import { syntaxHighlight } from '@/utils/index'
export default {
  data () {
    return {
      data: '',
      title:"我是技术文档页面",
      tableData1:null,
      tableData2:null,
      backexample:{},
      bodyexample:{},
      classtype:'001'
    }
  },
  methods:{ 
    init() {
      if(this.$route.params.serviceId){
        techDocument({serviceId:this.$route.params.serviceId}).then( res => {
          if(res.data != null){
            this.data = res.data
            this.tableData1 = res.data.requestPara
            this.tableData2 = res.data.responsePara
            this.backexample = syntaxHighlight(JSON.parse(res.data.backexample))
            this.bodyexample = syntaxHighlight(JSON.parse(res.data.bodyexample))
          }
        })
        getServiceDetails(this.$route.params.serviceId).then(response =>{
          this.classtype = "001"
          if(response.data.class_id){
            this.classtype= response.data.class_id.slice(0,3)
          } 
        })
      }
      
    }
  },
  mounted() {
    this.init();
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .detail {
    padding: 40px 10%
  }
  .qwe{
    border: solid 1px;
    border-color: rgb(189, 189, 189);
    padding: 5px 10px;
    background-color: rgb(243, 241, 241)
  }
  .doc_contact{
    text-align: center; 
    color: rgb(165, 164, 164)
  }

</style>
