<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text">
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视/综艺</h3>
      <ul>
        <li>
          <div class="img">
            <img src="/images/movie_1.jpg" alt="">
          </div>
          <div class="info">
            <p><span>无名之辈</span><span>9.2</span></p>
            <p>A·Cool·Fish</p>
            <p>剧情，喜剧，犯罪</p>
            <p>2018-11-16</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
.search_body {
  .search_input {
    background-color: rgba(165, 156, 156, 0.2);
    .search_input_wrapper {
      width: 100%;
      padding: 10px 15px;
      input {
        padding: 5px 10px;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 5px;
      }
    }
  }
  .search_result {
    h3 {
      padding: 10px 15px;
      color: #505050;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
    ul {
      li {
        padding: 10px 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        display: flex;
        .img {
          img {
            width: 90px;
            height: 120px;
          }
        }
        .info {
          p {
            line-height: 30px;
            width: 295px;
            padding: 0 2px 0 12px;
          }
          p:first-child {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
          }
          span:first-child {
            font-weight: bold;
          }
          span:last-child {
            color: orange;
          }
        }
      }
    }
  }
}
</style>
