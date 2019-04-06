## 图片压缩后输出file对象
#### 思路
 * 通过input的change事件获取file对象
 * 获取file对象的base64数据放入Image对象
 * 丢到canvas里压缩后输出base64
 * 接着把base64转file对象放入formDate对象
 * 最后formDate对象上传
#### 关键字
 * new formDate()
 * new FileReader()
 * new Image()
 * new File()
 * new Uint8Array()
 * document.createElement("canvas")
#### 示例（vue组件）
```html
<template>
  <div class="PictureUpload">
    <div class="upload_box">
      <div 
        class="pic" 
        :class="{full:isFullPic && FullPicIndex === index}"
        v-for="(x,index) in showPicArr" :key="index"
      >
        <img @click="setFullPic(index)" :src="x">
        <div class="close" @click="delPic(index)">
          <i class="fa fa-close"></i>
        </div>
      </div>
      <div class="file_box" v-show="showPicArr.length<3" >
        <input type="file" id="file22" accept="image/*" capture="camera">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureUpload",
  props: {
    text: String,
    tit: String
  },
  data() {
    return {
      picArr: [],
      showPicArr: [],
      isFullPic: false,
      FullPicIndex: null
    };
  },
  created() {},
  mounted() {
    this.getBase64Pic("file22");
  },
  computed: {},
  methods: {
    getBase64Pic(id) {
      let _this = this;
      document.getElementById("file22").addEventListener(
        "change",
        function() {
          var reader = new FileReader();
          reader.onload = function(e) {
            compress(this.result);
            console.log(this);
          };
          reader.readAsDataURL(this.files[0]);
        },
        false
      );
      //输出文件的base64
      function compress(res) {
        var img = new Image(),
          //设置尺寸
          maxH = 600;
        img.onload = function() {
          var cvs = document.createElement("canvas"),
            ctx = cvs.getContext("2d");
          if (img.height > maxH) {
            img.width *= maxH / img.height;
            img.height = maxH;
          }
          cvs.width = img.width;
          cvs.height = img.height;
          ctx.clearRect(0, 0, cvs.width, cvs.height);
          ctx.drawImage(img, 0, 0, img.width, img.height);
          var dataUrl = cvs.toDataURL("image/jpeg", 0.6);
          //展示图片
          _this.showPicArr.push(dataUrl)
          console.log(dataUrl)
          
          //转出file对象
          let trueFile = dataURLtoFile(dataUrl,`${new Date().getTime()}.jpg`)
          _this.picArr.push(trueFile);
          console.log(_this.picArr);
        };
        img.src = res;
      }
      //base64转换为file
      function dataURLtoFile(dataurl, filename) {//将base64转换为文件
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
      }

    },
    setFullPic(index) {
      this.isFullPic = !this.isFullPic;
      this.FullPicIndex = index;
    },
    delPic(index){
      this.picArr.splice(index,1)
      this.showPicArr.splice(index,1)
    }
  },
  watch:{
    picArr: function (val, oldVal) {
      this.$emit('outputFileObject',this.picArr)
    },
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/public.less";
.PictureUpload {
  .upload_box {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  .upload_box > * {
    margin: 0 10px 10px 0;
  }
  .upload_box {
    .pic {
      width: 70px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      position: relative;
      transition: 0s;
      &.full {
        position: fixed;
        z-index: 1000000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.9);
        transition: 0s;
        .close {
          display: none;
        }
      }
      .close {
        position: absolute;
        right: -10px;
        top: -10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
        line-height: 22px;
        border: 3px solid #fff;
        background-color: #2c95fd;
        color: #fff;
      }
      img {
        max-width: 90%;
        max-height: 90%;
      }
    }
  }
  .file_box {
    width: 70px;
    height: 120px;
    background-color: #ddd;
    text-align: center;
    line-height: 120px;
    position: relative;
    font-size: 40px;
  }
  .file_box::after {
    content: "+";
  }
  .file_box input {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    opacity: 0;
  }
}
</style>

```


