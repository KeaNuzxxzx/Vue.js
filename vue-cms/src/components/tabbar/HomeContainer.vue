<template>
  <div>
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
          <img :src="item.img" alt="加载失败">
        </mt-swipe-item>
      </mt-swipe>
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/images/menu1.png" alt="">
		                    <div class="mui-media-body">资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/images/menu2.png" alt="">
		                    <div class="mui-media-body">图片</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/images/menu3.png" alt="">
		                    <div class="mui-media-body">商品</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/images/menu4.png" alt="">
		                    <div class="mui-media-body">留言</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/images/menu5.png" alt="">
		                    <div class="mui-media-body">视频</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/images/menu6.png" alt="">
		                    <div class="mui-media-body">联系</div></a></li>
		        </ul> 
		</div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data(){
    return {
      lunbotuList: []
    }
  },
  created(){
    this.getLunbotu()
  },
  methods: {
    getLunbotu(){
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result => {
        // console.log(result.body);
          this.lunbotuList = result.body.message
        }, result =>{
          Toast('加载图片失败')
        }
      );
    }
  },
}
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  
    .mint-swipe-item {
    &::nth-child(1){
      background-color: red;
    }
    &::nth-child(2){
      background-color: blue;
    }
    &::nth-child(3){
      background-color: cyan;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-table-view-cell.mui-media{
  border: 0;
  img{
    width: 4rem;
  }
}

</style>