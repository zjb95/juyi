<template>
	<div>
	   <div class="hideDetail" >
          <div class="hidebox" style="position:relative;"  >
          <img src="../assets/切片/差号.png" height="24" width="24" alt="" style="cursor: pointer;position:absolute;right:-50px;top:-50px;" >
          <swiper :options="swiperOption" >
			      <swiper-slide v-for="(artitemm,index) in artistList" :key="artitemm.id">
			    <div class="hidePic" style="width:28%;overflow:hidden;height:456px;margin-left:15%;margin-top:25px;"> <img style="width:100%;" src="../assets/artist/微信图片_20180309163618.png" alt=""></div>
		            <div style="padding:20px;width:57%;box-sizing:border-box;margin-top:50px;" class="hideTit">
		            <p style="color:#282828;font-size:36px;margin-bottom:40px;">{{artList.name}}</p>
		            <p style="line-height:30px;">签约时间:{{artList.time}}</p>
		            <p style="color:#282828;font-size:22px;line-height:35px;width:70%;">{{artList.jinli}}</p></div>
			      </swiper-slide>
			      <div class="swiper-button-prev" slot="button-prev"></div>
			      <div class="swiper-button-next" slot="button-next"></div>
			    </swiper>
          </div>
        </div>
	

	</div>
</template>
<script>
export default{
data(){
return{
	props:{
		artList:{
      type:Array,
      required:true
    }

	},
  artistList:[{
        id:'0',
        name:'杨晓月0',
        smallname:'晓月',
        time:'2015',
        img:'../assets/主播写真/莹莹.png',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'1',
        name:'杨晓月1',
        smallname:'晓月',
        time:'2015',
         img:'../assets/主播写真/莹莹.png',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'2',
        name:'杨晓月2',
        smallname:'晓月',
              img:'../assets/主播写真/莹莹.png',
        time:'2015',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'3',
        name:'杨晓月3',
        smallname:'晓月',
        time:'2015',
              img:'../assets/主播写真/莹莹.png',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'4',
        name:'杨晓月4',
        smallname:'晓月',
              img:'../assets/主播写真/莹莹.png',
        time:'2015',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'5',
        name:'杨晓月5',
        smallname:'晓月',
        time:'2015',
        img:'../assets/主播写真/莹莹.png',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'6',
        name:'杨晓月6',
        smallname:'晓月',
        time:'2015',
         img:'../assets/主播写真/莹莹.png',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'7',
        name:'杨晓月7',
        smallname:'晓月',
              img:'../assets/主播写真/莹莹.png',
        time:'2015',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'8',
        name:'杨晓月8',
        smallname:'晓月',
        time:'2015',
              img:'../assets/主播写真/莹莹.png',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      },{
        id:'9',
        name:'杨晓月9',
        smallname:'晓月',
              img:'../assets/主播写真/莹莹.png',
        time:'2015',
        jinli:'经历:2016年参加某某国际车展,2017年某某形象大使24强备选选手'
      }],
swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          observeParents: true,
           loop:true
      
        },

			}
		}
	}
</script>
<style scoped>
.swiper-container{
    height:562px;
    width:900px;  
    margin:15px auto;
}

.swiper-slide{
    height:562px;
    width:900px;  
}
.swiper-slide img {
    color: #475669;
    font-size: 14px;
    line-height: 350px;
    height:562px;
    
    margin: 0;
}
.swiper-button-prev{

  width:46px;
  height:72px;

  background: url(../assets/切片/微信图片_20180313143718.png);
}
.swiper-button-next{

    width:46px;
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
  height:562px;
  margin:200px auto;
background: url('../assets/切片/微信图片_20180313143645.png') no-repeat;
background-size:100%;
}

.hidePic,.hideTit{
  float:left;
}

</style>