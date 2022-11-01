<template>
  <div id="carousel">
    <el-carousel :interval="5000" type="card" trigger="click" height="450px">
      <el-carousel-item v-for="item in imgItems" :key="item">
        <el-image :src=item fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>
    <br>


  </div>
</template>

<script>
export default {
  name: "Index.vue",
  data() {
    return {

      imgItems: [
        require('../../static/index_img_1.jpg'),
        require('../../static/index_img_2.jpg'),
        require('../../static/index_img_3.jpg'),
        require('../../static/index_img_4.jpg'),
        require('../../static/index_img_5.jpg'),
      ]
    };
  }
}
</script>

<style scoped>


#carousel {
  margin: 10px;
  padding: 20px;
  background-color: rgb(43, 43, 43);
}

.el-carousel__item .el-image {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

}

.el-carousel__item {
  background-color: #99a9bf;
  box-shadow: 5px 5px 5px white;
}

</style>