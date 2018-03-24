<template>
	<div>
		<Navtop></Navtop>
		<img style="width:100%;overflow:hidden;" src="../assets/切片/主角就是你！.png" alt="">
		<!-- 艺人介绍 -->
		<div class="artis" style="width:1200px;margin:80px auto;">
		<div style="float:left;width:506px;height:502px;overflow:hidden;margin-left:29px;">
			<img style="width:506px;"  :src="starList.cover_img" alt="">
		</div>
		<div style="float:left;color:#cda45a;padding:60px 40px;margin-left:40px;">
			<p style="font-size:25px;padding:30px 0">昵称:{{starList.nickname}}</p>
			<p style="padding:30px 0">一直播ID:27283250</p>
			<p style="padding:25px 0">获奖经历</p>
			<p style="line-height:40px;width:80%;">
        {{starList.undergo}}
		</p>
		</div>
		</div>
		<!-- 女艺人 -->
      <div class="artist">
      	    <img src="../assets/切片/Girl.png" alt="">
            <swiper :options="swiperOption">
                  <swiper-slide v-for="(artitemm,index) in artistList" :key="artitemm.id">
                    <li class="lunboList" @click="open(index)">
                      <img style="" :src="artitemm.cover_img" alt="">
                          <div class="artisshow">{{artitemm.nickname}}</div>
                          <div class="artishide">
                                <p class="artiname">{{artitemm.nickname}}</p>
                                <span >签约时间:{{artitemm.contract_year}}</span>
                                <p>经历:{{artitemm.undergo}}</p>
                          </div>
                      </li>
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
        </div>
       <!-- 隐藏部分轮播 -->
        <div class="hideDetail" v-if="flag">
          <div class="hidebox" style="position:relative;">
          <img src="../assets/切片/差号.png" height="24" width="24" alt="" style="cursor: pointer;position:absolute;right:-50px;top:-50px;" @click="close">
          <div class="hidePic" style="width:30%;overflow:hidden;height:456px;margin-left:15%;margin-top:25px;">
           <img style="width:100%;min-height:100%;" :src="artDetail.cover_img" alt=""></div>
            <div style="padding:20px 40px;width:55%;box-sizing:border-box;margin-top:50px;" class="hideTit">
            <p style="color:#282828;font-size:36px;margin-bottom:40px;">{{artDetail.nickname}}</p>
            <p style="line-height:30px;">签约时间:{{artDetail.contract_year}}</p>
            <p style="color:#282828;font-size:20px;line-height:30px;width:88%;overflow:hidden;;height:300px">{{artDetail.undergo}}</p></div>
           <div class="btn">
              <div class="btn-prev" @click="prevBtn()"></div>
              <div class="btn-next" @click="nextBtn()"></div>
            </div>
          </div>
        </div>
		<!-- 艺人介绍 -->
		<div class="artis" style="width:1200px;margin:80px auto;">
		<div style="float:left;width:506px;height:502px;overflow:hidden;margin-left:29px;">
			<img style="width:506px;" :src="starMan.cover_img" alt="">
		</div>
		<div style="float:left;color:#cda45a;padding:60px 40px;margin-left:40px;width:500px;">
			<p style="font-size:25px;padding:30px 0;">昵称:{{starMan.nickname}}</p>
			<p style="padding:30px 0">一直播ID:27283250</p>
			<p style="padding:25px 0">获奖经历</p>
			<p style="line-height:35px;width:90%;">
                     {{starMan.undergo}}
		</p>
		</div>
		</div>
		<!-- 男艺人 -->

	<div class="artist" style="margin-bottom:50px;">
	    <img src="../assets/切片/Boy.png" alt="">
	   <swiper :options="swiperOption">
            <swiper-slide v-for="(artitemm,index) in artistMan" :key="artitemm.id">
              <li class="lunboList" @click="open1(index)">
                 <img style="" :src="artitemm.cover_img" alt="">
                          <div class="artisshow">{{artitemm.nickname}}</div>
                          <div class="artishide">
                                <p class="artiname">{{artitemm.nickname}}</p>
                                <span >签约时间:{{artitemm.contract_year}}</span>
                                <p>经历:{{artitemm.undergo}}</p>
                          </div>
                </li>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
		      
    </div>

     <!-- 隐藏部分轮播 -->
        <div class="hideDetail" v-if="flag1">
          <div class="hidebox" style="position:relative;">
          <img src="../assets/切片/差号.png" height="24" width="24" alt="" style="cursor: pointer;position:absolute;right:-50px;top:-50px;" @click="close1">
          <div class="hidePic" style="width:30%;overflow:hidden;height:456px;margin-left:15%;margin-top:25px;">
           <img style="width:100%;min-height:100%;" :src="artisMandetail.cover_img" alt=""></div>
            <div style="padding:20px 40px;width:55%;box-sizing:border-box;margin-top:50px;" class="hideTit">
            <p style="color:#282828;font-size:36px;margin-bottom:40px;">{{artisMandetail.nickname}}</p>
            <p style="line-height:30px;">签约时间:{{artisMandetail.contract_year}}</p>
            <p style="color:#282828;font-size:20px;line-height:30px;width:88%;overflow:hidden;;height:300px">{{artisMandetail.undergo}}</p></div>
           <div class="btn">
              <div class="btn-prev" @click="prevBtn()"></div>
              <div class="btn-next" @click="nextBtn()"></div>
            </div>
          </div>
        </div>

		<Footer></Footer>
	</div>
</template>
<script>
import Navtop from "../components/navTop.vue"
import Footer from "../components/footer.vue"
import cssArt from '../assets/css/artisrt.css'
	export default {
  name: 'qianyue',
   components:{
    Navtop,
    Footer
  },
  data () {
    return { 
         flag: false,
         flag1:false,
        artDetail:[],
        starList:[],
        starMan:[],
        num:0,
          swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        },
  artistList:[],
  artistMan:[],
  artisMandetail:[],
 }
  },
  created:function(){
    this.getArtist();
    this.getMandata();
    this.getStar();

  },
  methods:{
     getArtist(){
       this.$axios.post(this.HOST+'/api/Artist/getList',{
                page:1,
                pagecount:8,
                sex:1
              }).then((res)=>{
                this.artistList=res.data.data.list;

              })
             
            },
            getMandata(){
                this.$axios.post(this.HOST+'/api/Artist/getList',{
                page:1,
                pagecount:8,
                sex:2
              }).then((res)=>{
                this.artistMan=res.data.data.list;


              })

            },
            getStar(){
                  this.$axios.post(this.HOST+'/api/Artist/getStar',{
                sex:1
              }).then((res)=>{
                this.starList=res.data.data;
              })


                this.$axios.post(this.HOST+'/api/Artist/getStar',{
                sex:2
              }).then((res)=>{
                this.starMan=res.data.data;
              })

            },
       prevBtn(){
      this.num--
      if(this.num<=0){
        this.num=0;
      }
       this.artDetail=this.artistList[this.num];
       this.artisMandetail=this.artistMan[this.num];
     
    },
    nextBtn(){
    this.num++
      if(this.num>=9){
        this.num=9;
        // console.log(this.num)
      }
       this.artDetail=this.artistList[this.num]
       this.artisMandetail=this.artistMan[this.num]
    },
      open(num){
        this.num=num
      this.flag=true;
      this.artDetail=this.artistList[num]
    },
        open1(num){
        this.num=num
      this.flag1=true;
      this.artisMandetail=this.artistMan[num]
    },
close(){
  this.flag=false
},
close1(){
  this.flag1=false
}
   
  }
}
</script>
<style scoped>
.hidebox .btn-prev{
  position: absolute;
  width:46px;
  height:72px;
  left:7%;
  top:42%;
  cursor: pointer;
  background: url(../assets/切片/微信图片_20180313143718.png);
}
.hidebox .btn-next{
  position: absolute;
cursor: pointer;
    width:46px;
   right:5%;
  top:42%;
  height:72px;
  background: url(../assets/切片/微信图片_20180313143729.png);
}
.hideDetail{
  width:100%;
  height:100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  left:0px;
  top:0px;
  z-index:999;
}
.hidebox{
  width:58%;
  height:540px;
  margin:200px auto;
background: url('../assets/切片/微信图片_20180313143645.png') no-repeat;
background-size:100% 100%;
}

.hidePic,.hideTit{
  float:left;
}
.artis{
height:502px;
background:url(http://duanhui.qianchengwl.cn/juyi/img/%E7%9F%A9%E5%BD%A22%E6%8B%B7%E8%B4%9D2.png);
}
.artistW{
	width:1200px;
	margin:0 auto;
}
.artist .swiper-container{
    height:575px;
    width:1200px;  
    margin:15px auto;
}

.artist .swiper-slide{
    height:568px;
    width:279px;  

}
.artist .swiper-slide img {
    color: #475669;
    font-size: 14px;
    line-height: 350px;
    height:100%;
    width:100%;
    margin: 0;
}
.swiper-button-prev{
  width:58px;
  height:58px;
  left:0px;
  background: url(../assets/oneImg/箭头4拷贝5.png);
}
.swiper-button-next{
    width:58px;
  height:58px;
  background: url(../assets/oneImg/箭头4拷贝4.png);
  right:-10px;
}
	
</style>