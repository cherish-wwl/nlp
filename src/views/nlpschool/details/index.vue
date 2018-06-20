<template>
  <div class="register app-wrapper">
    <header-panel @login="login" class="header-container"></header-panel>
    <div class="nlp-cont">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="mt15">
        <el-breadcrumb-item :to="{ path: '/nlpschool' }">NLP学院</el-breadcrumb-item>
        <el-breadcrumb-item>课程详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row>
        <h3>{{ title }}</h3>
        <el-col>
          <div class='videoBox' id='playwrap'><div id='player'></div></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <h3>课程介绍</h3>
          <p>{{ introduction }}</p>
        </el-col>
      </el-row>
    </div>
    <el-footer>Copyright 版权©所有神州泰岳 UltraPower 京ICP备15013685号-1</el-footer>
    <login :visible="loginVisible" @login="login"></login>
  </div>
</template>

<script>
import HeaderPanel from '@/views/nlpschool/components/Header'
import Login from '@/components/Login'// 登录组件
import playease from 'playease'
//let playease = require("@/utils/playease.min");
export default {
  name: 'layout',
  components: {
    HeaderPanel,
    Login
  },
  data () {
    return{
      loginVisible:false,
      title:'NLP小课堂-初识NLP',
      videoPath:'./static/nlpschool/ai-school-1.flv',
      introduction:'基于自然语言处理算法和长期积累的语义资源并结合丰富的应用场景，人工智能研究院产品团队隆重推出Ultra-NLP神州泰岳自然语言处理平台，为集团人工智能业务提供高性能的自然语言处理能力'
    }
  },
  created() {
    
  },
  computed: {
   
  },
  mounted(){
    let pw = document.getElementById('playwrap');
		if (playease.utils.isMobile()) {
			pw.style.margin = '0 auto';
		}
		let width = pw.clientWidth;
		let height = width * 9 / 16 + 40;
    let events = playease.events;
    let player = playease('player');
		player.addEventListener(events.PLAYEASE_FULLPAGE, onFullpage);
		player.addEventListener(events.RESIZE, onResize);
		player.setup({
			width: width,
			height: height,
			aspectratio: '16:9',
			file: this.videoPath,
			mode: 'vod',
			bufferTime: 1,
			maxretries: 0,
			retrydelay: 3000,
			controls: true,
			autoplay: false,
			// poster: 'sample.png',
			// report: true,
			loader: {
				name: 'xhr-chunked-loader',
				chunkSize: 2 * 1024 * 1024,
				mode: 'cors'
			},
			render: {
				name: 'flv',
				bufferLength: 4 * 1024 * 1024,
				swf: './static/nlpschool/js/playease.swf'
			}
    });
    function onFullpage(e) {
             var pw = document.getElementById('playwrap');
			pw.style.margin = e.exit ? '40px auto 0' : '0';
			if (e.exit && playease.utils.isMobile()) {
				pw.style.margin = '0 auto';
			}
			
			pw.style.height = e.exit ? '' : '100%';
			pw.style.position = e.exit ? '' : 'fixed';
			pw.style.maxWidth = e.exit ? '640px' : '100%';
			pw.style.zIndex = e.exit ? '' : '99';
		}
		
		function onResize(e) {
             var pw = document.getElementById('playwrap');
			if (playease.utils.isAndroid() && playease.utils.isQQBrowser()) {
				var video = document.getElementById('player').firstChild.lastChild;
				video.style.width = window.innerWidth + "px";
				video.style.height = window.innerHeight + "px";
				video.style['object-position'] = 'center top';
				
				var controlbar = document.getElementById('player').childNodes[1];
				controlbar.style.top = e.height - 40 + "px";
				controlbar.style.position = "absolute";
				
				var next = pw.parentNode.childNodes[3];
				next.style.top = e.height + "px";
				next.style.bottom = '0px';
				next.style.position = "absolute";
				next.style.zIndex = 999;
			}
		}
    
		if (playease.utils.isMobile()) {
			window.addEventListener('resize', function(e) {
				setTimeout(function() {
					player.fullscreen(!playease.utils.isHorizontal());
				}, 500);
			});
		}
		
		function playTheURL() {
			var input = document.getElementById('url-input');
			var url = input.value;
			player.play(url);
		}

  },
  methods:{
    login(msg){
      console.log(msg)
      this.loginVisible = msg
    },
    

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
.nlp-cont {
  width: 1200px;
  margin: 0 auto;
/deep/ .el-icon-arrow-right {
    font-size: 14px;
  }
}
.mt15 {
  margin-top: 15px;
}

</style>
