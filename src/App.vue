<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <div id="daohang">
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
        components: {

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #daohang {
        background-color: rgb(102, 104, 104);
    }
    #daohang .list-group-item{
        margin: 10px 50px;
        font-size: 30px;

    }

</style>
