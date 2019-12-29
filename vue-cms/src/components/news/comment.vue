<template>
  <div class="cmt-container">
      <h3>发表评论:</h3>
      <hr>
      <textarea placeholder="请输入要BB的内容(最多BB120个字)" maxlength="120"></textarea>
      
      <mt-button type="primary" size="large">发表评论</mt-button>

      <div class="cmt-list">
          <div class="cmt-item">
              <div class="cmt-title">
                  1楼&nbsp;&nbsp;用户: abc&nbsp;&nbsp;发表时间: 2019年12月15日16:05:23
              </div>
              <div class="cmt-body">
                  哈哈哈哈哈
              </div>
          </div>
      </div>
      <mt-button type="primary" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.cmt-container{
    
    h3{
        font-size: 1rem;
    }
    textarea{
        font-size: 0.9rem;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin-top: 5px;
        .cmt-item{
            font-size: 0.8rem;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
    
}
</style>