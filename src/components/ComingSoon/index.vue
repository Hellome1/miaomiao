<template>
  
  <div class="movie_body" v-if="comingList.length">
    <ul>
      <li v-for="data in comingList" :key="data.fimlId">
        <div class="pic_show">
          <img :src="data.poster" alt="">
        </div>
        <div class="info_list">
          <h2>{{data.name}}</h2>
          <p>观众评分 <span class="grade">暂无评分</span></p>
          <p>主演：{{data.actors | actorfilter}}</p>
          <p>{{data.category}}</p>
        </div>
        <div class="btn_mall">预售</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  data () {
    return {
      comingList: []
    }
  },
  mounted () {
    this.axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=9956508',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.comingList = res.data.data.films
    })
  }
}
</script>

<style lang="scss" scoped>
.movie_body {
  ul {
    li {
      display: flex;
      margin: 0 10px;
      padding: 10px 0;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      .pic_show {
        img {
          width: 90px;
          height: 121px;
        }
      }
      .info_list {
        width: 222px;
        p {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #676767;
          line-height: 26px;
          .grade {
            color: orange;
          }
        }
      }
      .btn_mall {
        padding: 5px 10px;
        background-color: #2b8fe0;
        color: white;
        border-radius: 5px;
      }
    }
  }
}
</style>
