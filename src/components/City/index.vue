<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>上海</li>
          <li>成都</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉</li>
            <li>鞍山</li>
          </ul>
        </div>
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉</li>
            <li>鞍山</li>
          </ul>
        </div>
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉</li>
            <li>鞍山</li>
          </ul>
        </div>
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉</li>
            <li>鞍山</li>
          </ul>
        </div>
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉</li>
            <li>鞍山</li>
          </ul>
        </div>
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉</li>
            <li>鞍山</li>
          </ul>
        </div>
      </div>
      <div class="city_index">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="scss" scoped>
.city_body {
  background-color: rgba(223, 186, 192, .2);
  .city_list {
    .city_hot {
      margin: 20px 0;
      h2 {
        font-size: 20px;
        line-height: 36px;
        padding-left: 10px;
        font-weight: normal;
        background-color: rgba(212, 212, 212, 0.5);
      }
      .clearfix {
        overflow: hidden;
        li {
          float: left;
          margin: 10px 0 0 16px;
          width: 110px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, .3);
        }
      }
    }
    .city_sort {
      div {
        h2 {
          font-size: 20px;
          line-height: 36px;
          padding-left: 10px;
          font-weight: normal;
          background-color: rgba(212, 212, 212, 0.5);
        }
        ul {
          li {
            margin: 10px;
          }
        }
      }
    }
    .city_index {
      position: fixed;
      right: 0;
      top: 51px;
      height: 689px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      width: 20px;
    }
  }
}
</style>
