<template>
  <div class="login_body">
    <div>
      <input type="text" class="login_text" placeholder="账户名/手机号/Email">
    </div>
    <div>
      <input type="password" class="login_text" placeholder="请输入您的密码">
    </div>
    <div class="login_btn">
      <input type="submit" value="登录">
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.login_body {
  div {
    margin: 20px 0;
    .login_text {
      height: 40px;
      padding: 0 10px;
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, .4);
    }
  }
  .login_btn {
    padding: 5px 10px;
    input {
      width: 100%;
      height: 40px;
      background-color: #f03d37;
      border: none;
      outline: none;
      border-radius: 5px;
    }
  }
  .login_link {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 12px;
      color: #f03d37;
      text-decoration: none;
    }
  }
}
</style>
