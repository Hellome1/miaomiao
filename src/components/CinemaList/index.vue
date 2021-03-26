<template>
  <div class="cinema_body">
    <ul v-if="cinemas.length">
      <li v-for="data in cinemas" :key="data.cinemaId">
        <div>
          <span>{{data.name}}</span>
          <span class="q"><span class="price">{{data.lowPrice / 100}}</span> 元起</span>
        </div>
        <div class="address">
          <span>{{data.address}}</span>
          <span>{{data.Distance | Distance}}</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CinemaList',
  data () {
    return {
      cityId: 110100,
      cinemas: []
    }
  },
  mounted () {
    var cityId = this.getCookie('cityId')
    console.log(cityId)

    if (cityId) {
      this.cityId = cityId
    }

    this.axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&ticketFlag=1&k=8965993`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.cinemas = res.data.data.cinemas
    })
  },
  methods: {
    getCookie (name) {
      var cookieStr = document.cookie
      var cookieArr = cookieStr.split('; ')
      for(let i = 0; i < cookieArr.length; i++){
        if (cookieArr[i].split('=')[0] === name) {
          return cookieArr[i].split('=')[1]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
  ul {
    padding: 20px;
    li {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 20px;
      div {
        margin-bottom: 10px;
        .q {
          font-size: 11px;
          color: #f03d37;
          margin-left: 10px;
        }
        .price {
          font-size: 18px;
        }
      }
      .address {
        font-size: 13px;
        span:first-child {
          display: inline-block;
          width: 300px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span:nth-of-type(2) {
          float: right;
        }
      }
      .card {
        display: flex;
        div {
          padding: 0 3px;
          height: 21px;
          line-height: 15px;
          border-radius: 2px;
          color: #f90;
          border: 1px solid #f90;
          font-size: 13px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
