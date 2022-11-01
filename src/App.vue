<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div id="nav">
      <router-link class="list-group-item" active-class="active" to="/index">主页</router-link>
      <router-link class="list-group-item" active-class="active" to="/story">故事背景</router-link>
      <router-link class="list-group-item" active-class="active" to="/role">人物介绍</router-link>
      <router-link class="list-group-item" active-class="active" to="/equipment">装备介绍</router-link>
      <router-link class="list-group-item" active-class="active" to="/monster">怪物介绍</router-link>
      <router-link class="list-group-item" active-class="active" to="/download">游戏下载</router-link>
    </div>

    <router-view/>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {},
  methods: {}
}
</script>

<style>

html, body {
  padding: 0;
  margin: 0;
  background-color: rgb(148, 234, 255);
  min-width: 1400px;
}

#nav {
  background-color: rgb(43, 43, 43);
  margin: 0;
  padding: 0;
  text-align: center;
  height: 70px;

}

#nav .list-group-item {
  padding: 15px 60px;
  margin: 10px 0;
  font-size: 30px;
  color: white;
  text-decoration: none;
  line-height: 70px;
  border: none;

}

#nav .list-group-item:hover {
  background-color: rgb(60, 63, 65);
  color: rgb(225, 169, 180);
}

.active {
  background-color: rgb(89, 91, 93);
  color: rgb(221, 169, 141) !important;
}

</style>
