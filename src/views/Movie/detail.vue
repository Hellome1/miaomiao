<template>
  <div id="detailContainer" class="slide-enter-active">
    <Header title="影片详情" >
      <i class="iconfont icon-right" @touchstart="handleToBack"></i><h1>影片详情</h1>
    </Header>
    <div id="content" class="contentDetail" v-if="filminfo">
      <div class="detail_list">
        <div class="detail_list_bg" :style="{'background': 'url(' + filminfo.poster + ') 0 40%'}"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="filminfo.poster" alt="">
          </div>
          <div class="detail_list_info">
            <h2>{{filminfo.name}}</h2>
            <p>A Cool Fish</p>
            <p>9.2</p>
            <p>{{filminfo.category}}</p>
            <p>{{filminfo.nation}} / {{filminfo.runtime}}分钟</p>
            <p>2018-11-16大陆上映</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{filminfo.synopsis}}</p>
      </div>
      <div class="detail_player swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <div>
              <img src="/images/actor_1.jpg" alt="">
            </div>
            <p>陈建斌</p>
            <p>马先勇</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Detail',
  data () {
    return {
      filminfo: ''
    }
  },
  components: {
    Header
  },
  props: ['movieId'],
  mounted () {
    // console.log(this.movieId)
    this.axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.movieId}&k=9309176`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data.film)
      this.filminfo = res.data.data.film
    })
  },
  methods: {
    handleToBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
#detailContainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background-color: white;
  .icon-right {
    border: 10px solid rgba(0, 0, 0, 0);
    border-right-color: white;
  }
  #content {
    display: block;
    margin-bottom: 0;
    .detail_list {
      height: 200px;
      width: 100%;
      position: relative;
      overflow: hidden;
      .detail_list_bg {
        width: 100%;
        height: 100%;
        filter: blur(20px)
      }
      .detail_list_filter {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #40454d;
        opacity: .5;
      }
      .detail_list_content {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        .detail_list_img {
          width: 108px;
          height: 150px;
          border: 1px solid #f0f2f3;
          margin: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .detail_list_info {
          margin-top: 20px;
          h2 {
            font-size: 20px;
            color: white;
            font-weight: normal;
            line-height: 40px;
          }
          p {
            color: white;
            line-height: 20px;
            font-size: 14px;
          }
        }
      }
    }
    .detail_player {
      .swiper-wrapper {
        .swiper-slide {
          div {
            img {
              width: 120px;
            }
          }
        }
      }
    }
  }
}
#detailContainer.slide-enter-active {
  animation: .3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
