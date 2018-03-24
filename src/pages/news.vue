<template>
	<div>	
		<Navtop></Navtop>
		<div>
			<img style="width:100%;overflow:hidden;" src="../assets/切片/主角就是你！.png" alt="">
		</div>
		<div class="News">
			<div class="newstitle">
				<img src="../assets/切片/News.png" height="29" width="214" alt="">
				<p>音乐&nbsp;&nbsp;/&nbsp;&nbsp;视频&nbsp;&nbsp;/&nbsp;&nbsp;综艺&nbsp;&nbsp;/&nbsp;&nbsp;电影</p>
			</div>
			<div class="newscontent">
				<div class="newsBg" v-for="(newItem,index) in Newslist" :key="index">
					<div class="newImg" @click="goDetail(newItem.id)" style="cursor: pointer;"><img src="../assets/主播写真/安心.png" alt=""></div>
					<div class="news_content">
						<h2>{{newItem.title}}</h2>
						<p>{{newItem.time}}</p>
						<p>{{newItem.content}}</p>
					</div>
				</div>
			</div>
				<div class="pages">
						<div>
							<div v-for="item in mass" v-bind:class="{'current-page':item==curPage}"  @click="switchPage(item)">{{item}}</div>
							<div>共{{mass}}页</div>
						</div>
				</div>
		
		</div>
	<Footer></Footer>
</div>
</template>
<script>
import Navtop from "../components/navTop.vue"
import Footer from "../components/footer.vue"

	export default {
		name:'news',
		  components:{
		    Navtop,
		    Footer
		  },
  data(){
  	return {
  		mass:0,
  		sum:0,
  		curPage:0,
  		pagesNum:5,
  		Newslist:[],
  		newsList:[{
  			id:'0',
  			img1:'../assets/主播写真/安心.png',
  			title:'直播内容为王时代，解密如何用互联网思维...',
  			time:'2017-07-28 14:23:12',
  			content:'感恩遇见每一位陌生的你们，感动都在心里 想说的话我相信你们会懂， 你们也辛苦了,每天看我这个疯子直播  还不离不弃 谢谢你们！'
  		},{
  			id:'1',
  			img1:'../assets/主播写真/安心.png',
  			title:'直播内容为王时代，解密如何用互联网思维...',
  			time:'2017-07-28 14:23:12',
  			content:'感恩遇见每一位陌生的你们，感动都在心里 想说的话我相信你们会懂， 你们也辛苦了,每天看我这个疯子直播  还不离不弃 谢谢你们！'
  		},{
  			id:'2',
  			img1:'../assets/主播写真/安心.png',
  			title:'直播内容为王时代，解密如何用互联网思维...',
  			time:'2017-07-28 14:23:12',
  			content:'感恩遇见每一位陌生的你们，感动都在心里 想说的话我相信你们会懂， 你们也辛苦了,每天看我这个疯子直播  还不离不弃 谢谢你们！'
  		},{
  			id:'3',
  			img1:'../assets/主播写真/安心.png',
  			title:'直播内容为王时代，解密如何用互联网思维...',
  			time:'2017-07-28 14:23:12',
  			content:'感恩遇见每一位陌生的你们，感动都在心里 想说的话我相信你们会懂， 你们也辛苦了,每天看我这个疯子直播  还不离不弃 谢谢你们！'
  		},{
  			id:'4',
  			img1:'../assets/主播写真/安心.png',
  			title:'直播内容为王时代，解密如何用互联网思维...2',
  			time:'2017-07-28 14:23:12',
  			content:'感恩遇见每一位陌生的你们，感动都在心里 想说的话我相信你们会懂， 你们也辛苦了,每天看我这个疯子直播  还不离不弃 谢谢你们！'
  		}]
  	}
  },
  created:function(){
  	this.mass=this.newsList.length/this.pagesNum
	console.log(this.mass)
	this.Newslist=this.newsList.splice(0,this.pagesNum)
  },
  methods:{
  	switchPage:function(page){
  		console.log(page)
		this.Newslist=this.newsList.splice(this.pagesNum*(page-1),this.pagesNum*page);
		console.log(this.Newslist)
  	},
  	goDetail(a){
  		this.sum=a
  			this.$router.push({
					path: 'newsdetail',
					query: {
					 newsId:a
					}
				});

  	}
  }
	}
	
</script>
<style scoped>
.News{
	width:1200px;
	margin:50px auto;
}
.newstitle{
	width:1200px;
	overflow: hidden;

}
.newstitle img{
	float: left;
}
.newstitle p{
	float: right;
	font-size: 24px;
	color:#cda45a;
}
.newscontent{
	margin-top:70px;
}
.newsBg{
	width:1200px;
	height:304px;
	margin-bottom: 51px;
	background: url(../assets/切片/矩形14.png);
}
.newImg{
	width:462px;
	height:304px;
	margin-left: 20px;
	float: left;
}
.newImg img{
	width:100%;
	height:304px;
}
.news_content{
	float: left;
	width:700px;
	margin-top: 56px;
	padding:15px;
	box-sizing: border-box;
}
.news_content h2{
	font-size: 30px;
	color:#fefeff;
	font-weight: bold;
	margin-bottom: 15px;
}
.news_content p{
	font-size: 18px;
	color: #a3a3a3;
	line-height: 30px;
}
.news_content p:nth-child(3){
	color: #fefeff;
	margin-top: 20px;
}
.pages{
	overflow: hidden;
}
.pages>div{
	float:right;
	color: #fefeff;
	overflow: hidden;
}
.pages>div>div{
	float:left;
}
.pages>div>div:first-child,.pages>div>div:nth-child(2){

	padding:20px 10px;
	background:#1f1e1e;
	text-align: center;
	font-weight: bold;
	margin-left: 20px;
}
.pages>div>div:last-child{
padding:20px 10px;
	text-align: center;
	font-weight: bold;
	margin-left: 20px;
}

</style>