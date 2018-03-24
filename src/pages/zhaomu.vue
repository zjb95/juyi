<template>
	<div>
	<Navtop></Navtop>
	<img style="width:100%;overflow:hidden;" src="../assets/切片/主角就是你！.png" alt="">
	<!-- 招募条件 -->
	<div class="tiaojian">
		<img src="../assets/招募艺人/招募条件.png" alt="">
	</div>
	<!-- 常见问题 -->
	<div class="question">
	<div>
		<img style="margin:20px 0px;" src="../assets/招募艺人/Question.png" height="31" width="280" alt="">
		<ul style="padding-bottom:50px;">
		<li style="margin-bottom:70px;"><p style="color:#fff;font-size:22px;line-height:35px;">问:什么是网络主播?</p>
		<p style="color:#fff;font-size:18px;line-height:30px;margin-top:20px;">答：视频网站的兴起，为一些乐于分享、有自我展示欲望的网民找到了一个新的互动平台，它吸纳了大量80后90后的新生代在此聚集、交流。近两年，
视频网站更是从视频上传和在线点播的简单功能，变成了可以在线视频直播秀、直播过程中可深度交流，由此也产生了一种新的职业——网络主播</p></li>
			<li style="margin-bottom:70px;"><p style="color:#fff;font-size:22px;line-height:30px;">问：网络主播主要做什么？</p>
		<p style="color:#fff;font-size:18px;line-height:25px;margin-top:20px;">答：通过视频网站在线进行即时性演绎，与观众互动，通过不同形式的节目，展现自己的才艺，比如：电台、脱口秀、乐器、唱歌、沙画、动漫等等</p></li>
			<li style="margin-bottom:70px;"><p style="color:#fff;font-size:22px;line-height:30px;">问：从事网络主播需要什么条件 ?</p>
		<p style="color:#fff;font-size:18px;line-height:25px;margin-top:20px;">答：电脑一台、高清摄像头（根据流行趋势选择）、音频设备（麦克风、声卡），安静的直播环境，一个好的直播背景，直播前需要进行妆面和服装的
简单搭配。</p></li>
			<li style="margin-bottom:70px;"><p style="color:#fff;font-size:22px;line-height:30px;">问：网络主播的收入待遇如何？</p>
		<p style="color:#fff;font-size:18px;line-height:25px;margin-top:20px;">答：视频网站提供线上舞台，主播依靠个人魅力、才艺、表演等吸引观众，观众通过赠送虚拟礼物支持主播，主播依据协议得到保底工资、礼物折现分
成和奖金收入等，月薪过万，都是很简单的事情。</p></li>
			
		</ul>
		
		</div>
	</div>
	<!--  信息提交-->

	<div class="tijiao" style="width:1200px;margin:40px auto;">
	<div class="tijiao-left">
				<div> 
				  <span>姓名：</span>
				   <input type="text" placeholder="姓名" v-model="personDetail.name">
				</div>
				<div>
				<span>性别：</span>
				       <select name="" id="" v-model="personDetail.sex">
						<option value="2">男</option>
						<option value="1"  selected>女</option>
					    </select>
				</div>
				<div>
				    <span>电话：</span> 
				    <input type="text" placeholder="请输入电话" v-model="personDetail.phone">
				    </div>
				<div>
				     <span>邮箱：</span> 
				     <input type="text" placeholder="请输入邮箱" v-model="personDetail.email">
				    </div>
				<div>
				<span>地址：</span>
				<select style="appearance:none;border:none;width:156px;height:60px;float: left;font-size:20px;color:#706c6c;" id="" v-model="personDetail.province" @change="changeProvince"> 
					<option :value="area.id" v-for="(area,index) in province" :key="index">{{area.name}}</option>
					</select>
					<select name="" id="" v-model="personDetail.city" @change="changeCity" style="appearance:none;border:none;width:156px;height:60px;float: left;font-size:20px;color:#706c6c;"> 
					<option :value="area.id" v-for="(area,index) in city" :key="index">{{area.name}}</option>
					</select>
					<select name="" id="" v-model="personDetail.area" @change="changeArea" style="border:none;width:156px;height:60px;float: left;font-size:20px;color:#706c6c;"> 
					<option :value="area.id" v-for="(area,index) in areaList" :key="index">{{area.name}}</option>
					</select>

					</div>
					<div>
					<span>特长：</span>
					    <input placeholder="例如:唱歌,跳舞,脱口秀" v-model="personDetail.specialty">
					</div>
			</div>
		<div class="tijiao_right">
			<el-upload
				  class="avatar-uploader"
				 :action="uploadUrl"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <div v-else>
				<img style="width:182px;height:194px;margin-left:117px;margin-top:100px;" src="../assets/切片/C.png" alt=""><img src="../assets/切片/6.png" style="display:block;margin-left:120px;margin-top:20px;" height="47" width="142" alt="">
				</div>
				</el-upload>

		</div>
		<div style="width:268px;margin-left:530px;">
			<img style="margin-top:50px;" src="../assets/切片/4.png" height="80" width="268" alt="">
		</div>
		
	</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Navtop from "../components/navTop.vue";
import Footer from "../components/footer.vue";
export default {
  name: "zhaomu",
  components: {
    Navtop,
    Footer
  },
  data() {
    return {
      imageUrl: "",
      uploadUrl: this.HOST + "/admin/Auth/uploadImg",
      areaList: [],
      province: [],
      city: [],
      personDetail: {
        name: "",
        phone: "",
        email: "",
        province: "",
        specialty: "",
        sex: "",
        area: "",
        city: ""
      }
    };
  },
  created: function() {
    this.getAries(0, "province");
  },
  methods: {
    getChen(e) {},
    changeArea(e) {
  
    },
    changeCity(e) {
      var areaId = e.target.value;
      if (areaId) {
        this.getAries(areaId, "area");
      }
    },
    changeProvince(e) {
		  var areaId = e.target.value;
	  console.log(areaId)
      if (areaId) {
        this.getAries(areaId, "city");
      }
	},
    getAries(a, b) {
      this.$axios
        .post(this.HOST + "/api/Auth/getAreas", {
          id: a
        })
        .then(data => {
          if (b == "province") {
            this.province = data.data.data;
          } else if (b == "city") {
            this.city = data.data.data;
          } else if ((b = "area")) {
            this.areaList = data.data.data;
          }

          console.log();
        });
    },
    handleAvatarSuccess(res, file, fileList) {
      this.imageUrl = res.data;
      console.log(res);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },

    addArtist() {
      this.$axios
        .post(this.HOST + "api/Artist/signUp", {
          name: this.personDetail.name,
          sex: this.personDetail.sex,
          cover_img: this.imageUrl,
          mobile: this.personDetail.phone,
          email: this.personDetail.email,
          province: this.personDetail.province,
          specialty: this.personDetail.specialty
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style scoped>
.tiaojian {
  width: 1200px;
  margin: 0 auto;
  margin-top: 52px;
}
.question {
  width: 100%;
  background-color: #1f1e1e;
}
.question > div {
  width: 1200px;
  margin: 0 auto;
}
.tijiao {
  background-color: #1f1e1e;
  width: 1200px;
  height: 781px;
  overflow: hidden;
}
.tijiao > .tijiao-left {
  width: 600px;

  margin-left: 110px;
  margin-top: 110px;
  float: left;
  overflow: hidden;
}
.tijiao > .tijiao-left > div {
  overflow: hidden;
}
.tijiao > .tijiao-left > div > span {
  float: left;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
}
.tijiao > div > div {
  margin-bottom: 13px;
}
.tijiao > div > div > select {
  width: 469px;
  height: 60px;
  float: left;
  font-size: 20px;
  color: #706c6c;
}
.tijiao > div > div > input {
  width: 465px;
  height: 60px;
  font-size: 20px;
  color: #706c6c;
  float: left;
}
.tijiao > div > div > textarea {
  width: 465px;
  height: 62px;
  float: left;
}
.tijiao_right {
  width: 400px;
  height: 450px;
  float: left;
  margin-top: 110px;
  background: #cda45a;
}
.avatar {
  width: 400px;
  height: 450px;
  overflow: hidden;
}
</style>