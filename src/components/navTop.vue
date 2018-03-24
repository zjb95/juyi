<template>
  <div class="nav">
  <div style="width:1200px;margin:0 auto;">
  <ul style="">
  	<li class="navList"><router-link exact to="/">首页</router-link></li>
  	<li class="navList">
  	<router-link to="/qianyue">签约艺人</router-link></li>
  	<li class="navList"><router-link to="/zhaomu">艺人招募</router-link></li>
  	<li class="navList newsNav"><router-link to="/news">最新资讯</router-link></li>
  	<li class="navList"><router-link to="/about">关于我们</router-link></li>
  </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'navTop',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
	width:100%;
	height:90px;
 background: url('../assets/oneImg/矢量智能对象.png');
}
.nav ul{
	/*width:1200px;*/
	float:right;
	overflow:hidden;
	
}
.navList{
	float:left;

}
.navList a{
	display: block;
	font-weight:bold;
	height:90px;
	line-height: 90px;
	width:128px;
	text-align: center;
	text-decoration: none;
	
	color:#cda45a;

}
/*.navList a:hover{
	background-color: #cda45a;
	color: #fff;
}*/
.router-link-active{
  background-color: #cda45a;
color: #fff !important;
}

</style>
