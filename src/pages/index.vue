<template>
  <div class="hello">
  <div class="indexbg">
  <Navtop></Navtop>
  <div class="bgBox">
  <img style="width:100%;height:868px;"src="../assets/oneImg/陷于才华_24.png" alt="">
   <div class="boBox-content" style="">
     <img style="width:100%;overflow:hidden;height:100%;" src="../assets/oneImg/陷于才华.png" alt="">
   </div>
   <div class="bgPosition">
     <img src="../assets/oneImg/话筒.png" alt="">
   </div>
  </div>
<!-- 关于我们 -->
  <div class="about" style="position:relative;">
    <img src="../assets/oneImg/微信图片_20180313102651.png"alt="" style="width:100%;margin-top:93px;">
  <div style="width:1200px;margin:0 auto;overflow:hidden;" class="aboutCon">
  <div class="abount-content" style="position:absolute;top:0px;z-index:9;overflow:hidden;">
    <div class="about-left">  
  <img style="width:570px;height:340px;" src="../assets/oneImg/微信图片_20180309105341.jpg" alt="">
  </div>
  <div class="about-right">
    <img style="margin-bottom:20px;"src="../assets/oneImg/AboutUs.png" alt="">
        <p style="color:#cda45a;font-size:18px;line-height:35px;padding-top:25px;border-box:box-sizing;">聚宜文化传媒有限公司创立于2016年，是一家以新媒体娱乐，影视音乐<br>
    为向导，以艺人包装，视频娱乐，网络歌手，主持人为主的纯绿色新型<br>
    互联网文化传媒公司，专为有才华的年轻人打造的展示自我的直播平台。<br>
    总公司位于江苏宜兴，在扬州、溧阳、安庆、池州、柯桥、衢州等地均<br>
    设有分公司。欢迎来公司实地考察，公司提供专业设备，直播间，以及<br>
    新人一对一专业培训。</p>
  </div>
  </div>

    </div>
  </div>
  <!-- 最新资讯 -->
  <div class="news" >
<img src="../assets/oneImg/LatestNews.png"alt="">
<ul class="newsList" style="margin-top:20px;">
  <li v-for="(item,index) in newsList" style="float:left;">
    <div class="imgbox">
    <img src="../assets/主播写真/微信图片_20180309112202.png" alt=""></div>
    <div style="height:153px;">
       <p style="font-size:20px;color:#cda45a;padding:5px;margin-bottom:10px;font-weight:bold;">{{item.titlt}}</p>
    <span style="font-size:16px;color:#cda45a;padding:5px;">{{item.time}}</span>
    <p style="font-size:16px;color:#cda45a;line-height:25px;padding:10px 5px;margin-top:20px;">{{item.content}}</p>
    </div>
  </li>
</ul>
  </div>

  <!-- 明星艺人 -->
  <div class="artist">
    <img src="../assets/oneImg/Artist.png" alt="">
            <swiper :options="swiperOption">
            <swiper-slide v-for="(artitemm,index) in artistList" :key="artitemm.id" >
              <li class="lunboList" @click="open(index)">
                <img :src="artitemm.cover_img" alt="">
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
          <div class="hidePic" style="width:30%;overflow:hidden;height:80%;margin-left:15%;margin-top:25px;"> 
              <img style="width:100%;" :src="artDetail.cover_img" alt=""></div>
            <div style="padding:20px 40px;width:55%;box-sizing:border-box;margin-top:50px;" class="hideTit">
            <p style="color:#282828;font-size:36px;margin-bottom:40px;">{{artDetail.nickname}}</p>
            <p style="line-height:30px;">签约时间:{{artDetail.contract_year}}</p>
            <p style="color:#282828;font-size:22px;line-height:35px;width:88%;">{{artDetail.undergo}}</p></div>
           <div class="btn">
              <div class="btn-prev" @click="prevBtn()"></div>
              <div class="btn-next" @click="nextBtn()"></div>
            </div>
          </div>
        </div>




<!-- 视频介绍 -->
  <div style="margin-top:52px;width:100%;background-color:#1f1e1e;padding:48px 0;">
  <div class="video" style="width:1200px;margin:0 auto;position:relative;">
  <div style="width:358px;margin:0 auto;">
      <img style=""src="../assets/oneImg/VideoIIntroduction.png" alt="">
  </div>
   <swiper :options="swiperOption">
            <swiper-slide v-for="(videoitem,index) in videoList" :key="videoitem.id">
                <li class="lunnbo1" @click="openVideo(index)" >
                    <img class="datu"style="cursor: pointer;width:285px; height:180px;" :src="videoitem.cover_img" alt="">
                    <p style="">{{videoitem.title_name}}</p>
                    <img style="position:absolute;left:120px;top:60px;" src="../assets/oneImg/矩形10.png" height="52" width="52" alt="">
            
               </li>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
  </div>
  </div>
  <div class="hideDetail" v-if="openvide" >
          <div class="hidebox1" >
               <img src="../assets/切片/差号.png" height="24" width="24" alt="" style="cursor: pointer;position:absolute;right:5px;top:5px;" @click="closeVideo">
            <video style="width:100%; height:562px;" class="lib-video" loop="false" controlslist="" controls="controls" webkit-playsinline="webkit-playsinline" playsinline="playsinline"  :poster="videoImg" :src="videoUrl" type="video/mp4"></video>
          </div>
        </div>

  <!-- 视频介绍 -->
  <!-- 精彩图集 -->
  <div class="pic" style="width:1200px;margin:0 auto;margin-top:52px;margin-bottom:50px;">
    <img src="../assets/oneImg/PictureI.png" height="70" width="140" alt="">
    <div>
      <ul>
        <li  v-for="(item,index) in imgList" class="imgPic">
          <img style="width:100%;"  :src="item.image_path" alt="">
          <p> {{item.content}}</p>
        </li>
      </ul>
    </div>

  </div>
 <Footer></Footer>
</div>
  </div>
</template>

<script>
import Navtop from "../components/navTop.vue"
import Footer from "../components/footer.vue"
import cssArt from '../assets/css/artisrt.css'
import Lunbo from '../components/hideLunbo.vue'

export default {
  name: 'Index',
  components:{
    Navtop,
    Footer,
    Lunbo
  },
  data () {
    return {
        flag: false,
        artDetail:[],
        imgList:[],
        videoUrl:'',
        videoImg:'',
        imgPic:'',
        num:0,
        openvide:false,
       swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          slidesPerView:4,
      spaceBetween:30,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: true,
      observer:true,//修改swiper自己或子元素时，自动初始化swiper 
       observeParents:false,//修改swiper的父元素时，自动初始化swiper 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      onSlideChangeEnd: function(swiper){ 
　　　swiper.update();  
　　　mySwiper.startAutoplay();
　　   mySwiper.reLoop();  
      }
        },
      newsList:[{
        "id":0,
        img:'../assets/主播写真/微信图片_20180309112154.png',
        "titlt":'4大主播齐聚直播主持四川跨年演唱.....',
        "time":'2017-2-11',
        "content":'部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容......'
      },{
        "id":1,
        img:'../assets/主播写真/微信图片_20180309112202.png',
        "titlt":'2016年微博V影响力峰会,聚宜呈现.......',
        "time":'2017-2-11',
        "content":'部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容......'
      },{
        "id":2,
         img:'../assets/主播写真/微信图片_20180309112206.png',
        "titlt":'聚宜主播领衔助跑2016长沙国际马拉......',
        "time":'2017-2-11',
        "content":'部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容部分内容......'
      }],
      artistList:[],
      videoList:[],
      cover_img:'',
      nickname:'',
      contract_year:'',
      undergo:''

    
    }
  },
  created:function (){
this.getImg();
this.getVIdeo();
this.getArtist();
  },
  methods:{
    getArtist(){
       this.$axios.post(this.HOST+'/api/Artist/getList',{
                page:1,
                pagecount:8,
                sex:1
              }).then((res)=>{
                this.artistList=res.data.data.list;
                // this.imgList=res.data.data.list
               
                // console.log(res.data.data)

              })

    },
    getImg(){
     this.$axios.post(this.HOST+'/api/Image/getList',{
                page:1,
                pagecount:7
              }).then((res)=>{
                this.imgList=res.data.data.list
               
                console.log(res.data.data)

              })

    },
    getVIdeo(){
      this.$axios.post(this.HOST+'/api/Video/getList',{
        page:1,
        pagecount:8
      }).then((res)=>{
       this.videoList=res.data.data.list
       console.log(this.videoList)
      })

    },
    prevBtn(){
      this.num--
      if(this.num<=0){
        this.num=0;
      }
       this.artDetail=this.artistList[this.num]
     
    },
    nextBtn(){
    this.num++
      if(this.num>=9){
        this.num=9;
      }
       this.artDetail=this.artistList[this.num]
    },
    open(num){
      this.num=num
      this.flag=true;
      this.artDetail=this.artistList[num]
    },
close(){
  this.flag=false
},
openVideo(num){
    this.videoUrl=this.videoList[num].video_path
    this.videoImg=this.videoList[num].cover_img
    this.openvide=true
}
    ,closeVideo(){
        this.openvide=false
    }
    }
   
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  height:55%;
  margin:200px auto;
background: url('../assets/切片/微信图片_20180313143645.png') no-repeat;
background-size:100% 100%;
}
.hidebox1{
  width:58%;
  height:562px;
  margin:200px auto;
  position:relative;
  padding:20px;
  border:3px solid #cda45a;
  background-color:#fff;

}

.hidePic,.hideTit{
  float:left;
}

.bgBox{
  position: relative;
}
.boBox-content{
  width:100%;
  height:868px;
  position: absolute;
  left:0px;
  top:0px;
}
.bgPosition{
  width:1200px;
  margin-left: -600px;
  position: absolute;
  bottom:-3px;
  left:50%;
}
.about{
  width:100%;
  height:404px;
  margin-top: 68px;
margin-bottom: 52px;
}

.abount-content{
  overflow: hidden;
  background:url('../assets/oneImg/微信图片_20180313102658.png');
}
.about-left{
  float:left;
  margin-left: 20px;
  width:571px;
  height:340px;
  margin-bottom: 20px;
}
.about-right{
  float: left;
  margin-left:20px;
}
.news{
  width:1200px;
  margin:0 auto;
  margin-bottom: 52px;
}
.newsList{
  overflow:hidden;
}
.newsList li{
  background:#1f1e1e;
  width:390px;
  height:394px;
  float:left;
  margin-left:15px;
}
.newsList li img{
  width:100%;
  overflow:hidden;
}
.newsList li .imgbox{
  width:100%;
  overflow: hidden;
}
.newsList li .imgbox img{
   cursor: pointer;  
    transition: all 0.6s;  

}
.newsList li .imgbox img:hover{
   transform: scale(1.4); 
}
.newsList li:first-child{
   margin-left:0;
}

.videoList {
  overflow:hidden;
}
.videoList li{
  float:left;
  width:285px;
  background-color:#4d4848;
  position:relative;
  margin-left:12px; 
}
.lunnbo1{
  float:left;
  width:285px;
  background-color:#4d4848;
  position:relative;

}
.lunnbo1 p{
  line-height:42px;
  height:42px;
  width:100%;
  color:#cda45a;
  padding-left:15px;
}
.videoList li p{
  line-height:42px;
  height:42px;
  width:100%;
  color:#cda45a;
  padding-left:15px;
}
.pic ul{
  overflow:hidden;
}
.pic ul li{
float:left;
overflow:hidden;
position:relative;
}
.pic ul li>div{
  overflow:hidden;
}
.pic ul img{
  width:100%;
 cursor: pointer;  
    transition: all 0.6s;  
}
.pic ul img:hover{
 transform: scale(1.4); 

}
.imgPic:first-child{
  width:356px;
  height:485px;
  position:relative;
}
.imgPic>img{
  min-height:100%;
}
.imgPic{
  width:281px;
  height:242.5px;
}
.pic ul li p{
  padding-left:20px;
  box-sizing:border-box;
  position:absolute;
  left:0px;
  bottom:0px;
  width:100%;
  line-height:60px;
  height:60px;
  background-color:rgba(0,0,0,.5);
  color:#cda45a;
}


.artist .swiper-container{
    height:575px;
    width:1200px;  
    margin:15px auto;

}

.artist .swiper-slide{
    height:568px;
    width:300px;  

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

.video .swiper-container{
    height:225px;
    width:1200px;  
    margin:15px auto;
}

.video .swiper-slide{
    height:225px;
    width:300px;  
}



</style>
