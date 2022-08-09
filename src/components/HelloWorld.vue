<template>
  <div class="head">
    <div class="logo">
      <img src="https://www.antdv.com/assets/logo.1ef800a8.svg" alt="" />
    </div>
    <div class="yes">
      <ul>
        <li><router-link to="">我的</router-link></li>
        <li><router-link to="">首页</router-link></li>
        <li><router-link to="">登录</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.head {
  margin: 0;
  padding: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px -10px 10px 10px rgba(0, 0, 0, 0.5);

  .yes {
    margin-right: 40px;
    ul {
      display: flex;
      justify-content: space-between;
      width: 200px;
      line-height: 80px;
      li {
        list-style: none;
      }
    }
  }
}
.logo {
  img {
    width: 100%;
    height: 100%;
  }
  width: 50px;
  height: 50px;
  margin-left: 30px;
  margin-top: 20px;
}
</style>
