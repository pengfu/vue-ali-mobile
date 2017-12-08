<template>
  <div id="app" class="hlj-container-stretch app" style="overflow: auto">
    <div class="hlj-container-wrap" >
      <div class="design-image-wrap">
        <div class="design-image" >
        </div>
        <div class="seek-btn" >查看小二的其他宝贝<span class="arrow"></span></div>
      </div>
      <div class="design-detail">
        <p class="detail-title">淘宝小二的杂货店</p>
        <p class="detail-desc">
         淘宝小二，又叫小三，又叫小四，淘宝小二，又叫小三，又叫小四，淘宝小二，又叫小三，又叫小四，淘宝小二，又叫小三，又叫小四
        </p>
        <div class="detail-tag">
          <span>标签：</span>
          <span>小资</span>
          <span>韩系</span>
        </div>
      </div>
      <div class="design-merchant" >
        <div class="left-part">
          <img src="http://qnm.hunliji.com/o_1ar36i30i8lrh241tm5fur15fu7.jpg?imageView2/2/w/200"/>
        </div>
        <div class="right-part">
          <p>雪山飞狐的小屋</p>
          <p><span>联系电话:</span><a  class="tel-phone">13122125456</a></p>
        </div>
      </div>
      <div class="design-effect">
        <div class="effect-title">效果图</div>
        <ul class="effect-items">
          <li class="effect-wrap"  >
            <div class="effect" ></div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .arrow {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-top: 2PX solid #fff;
    border-right: 2PX solid #fff;
    transform: rotate(45deg);
  }
  .hlj-container-wrap {
    background-color: #f2f3f6;
    .design-image-wrap{
      position: relative;
      width: 100%;
      padding-bottom:75%;
      .design-image{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        width:100%;
        margin:auto;
        background-image: url('https://qhyxpicoss.kujiale.com/r/2017/11/28/L1D1I4BP4HIUQBOGAOIE3P3WG888_3000x1500.jpg@!280x210');
        background-size:100%;
        background-repeat: no-repeat;
        background-position: center;
      }
      .seek-btn{
        background: #000;
        opacity: 0.8;
        color:#fff;
        font-size: 24px ;
        border:2PX solid #fff;
        border-radius: 100PX;
        height: 56px;
        position: absolute;
        bottom:20px;
        right:20px;
        padding: 0 20px;
        display: flex;
        align-items: center;
      }

    }
    .design-detail{
      padding:46px 42px 40px 42px;
      background: #fff;
      .detail-title{
        color:#333333;
        font-weight: bold;
        font-size: 36px;
      }
      .detail-desc{
        color:#666666;
        font-size: 26px;
        line-height: 42px;
        margin-top: 32px;
      }
      .detail-tag{
        display: flex;
        align-items: center;
        margin-top: 36px;
        span{
          color:#666666;
          font-size: 26px;
        }
        span:first-child{
          margin-right: 16px;
        }
        span:not(:first-child){
          display: inline-block;
          text-align: center;
          width: 112px;
          height: 60px;
          line-height: 60px;
          background: #f2f3f6;
          border:2px solid transparent;
          border-radius: 2PX;
          margin-right: 20px;
        }

      }
    }
    .design-merchant{
      padding:46px 42px 40px 42px;
      background: #fff;
      margin-top: 20px;
      height: 170px;
      display: flex;
      align-items: center;
      .left-part{
        width: 100px;
        height: 100px;
        /*border-radius: 100%;*/
        /*border:1px solid transparent;*/
        img{
          width: 100%;
          height: 100%;
          border-radius: 100%;
          border:1px solid transparent;
        }
      }
      .right-part{
        line-height: 44px;
        margin-left: 36px;
        p:first-child{
          font-size: 30px;
          color:#333333;

        }
        p:last-child{
          font-size: 24px;
          span{
            color:#666666;
          }
        }
        .tel-phone{
          color:#1f95e7;
          margin-left: 20px;
        }
      }
    }
    .design-effect{
      padding:46px 42px 40px 42px;
      background: #fff;
      margin-top: 20px;
      .effect-title{
        color:#666666;
        font-size: 28px;
        font-weight: bold;
      }
      .effect-items{
        margin-top: 32px;
      }
      .effect-wrap{
        position: relative;
        width: 100%;
        padding-bottom:75%;
        .effect{
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          width:100%;
          margin:auto;
          background-image: url('https://qhyxpicoss.kujiale.com/r/2017/11/28/L1D1I4BP4HIUQBOGAOIE3P3WG888_3000x1500.jpg@!280x210');
          background-size:100%;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
      .effect-wrap + .effect-wrap{
        margin-top: 10px;
      }
    }

  }

</style>
<script>

  export default{
    data(){
      return{

      }
    },

  }
</script>
