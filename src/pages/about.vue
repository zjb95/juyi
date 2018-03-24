<template>
	<div>
		<Navtop></Navtop>
		<img src="../assets/切片/主角就是你！.png" height="400" width="100%" alt="">
		<div class="About">

			<div style="margin-top:50px;"><img src="../assets/切片/AboutUs.png" height="29" width="286" alt=""></div>
			<div style="margin-top:80px;">
				<p style="width:1200px;text-align:center;font-size:26px;color:#fff;line-height:30px;">宜兴聚宜文化传媒有限公司<br><span style="font-size:18px;">Gather appropriate culture media co.Ltd</span></p>
				<p  style="font-size:18px;color:#fffff1;line-height:30px;margin-top:50px;">聚宜文化传媒有限公司创立于2016年，是一家以新媒体娱乐，影视音乐
				为向导，以艺人包装，视频娱乐，网络歌手，主持人为主的纯绿色新型
				互联<br>网文化传媒公司，专为有才华的年轻人打造的展示自我的直播平台。
				总公司位于江苏宜兴，在扬州、溧阳、安庆、池州、柯桥、衢州等地均
				设有分<br>公司。欢迎来公司实地考察，公司提供专业设备，直播间，以及
				新人一对一专业培训。</p>
			</div>
			<div style="margin:50px 0px;">
				<img src="../assets/切片/聚宜文化传媒直播间.png" alt="">
			</div>
			
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Navtop from '../components/navTop.vue'
import Footer from '../components/footer.vue'
	export default{
		name:'about',
	  components:{
    Navtop,
    Footer
  },
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
	.About{
		width:1200px;
		margin:0 auto;
	}
</style>