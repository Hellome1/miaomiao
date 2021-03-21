<template>
  
  <div class="movie_body">
    <ul>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" alt="">
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>观众评分 <span class="grade">9.2</span></p>
          <p>主演：陈建斌，任素汐，潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon'
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
