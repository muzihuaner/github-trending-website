
<template>
  <div id="app">

    <head>
      <title>快点开源软件趋势</title>
    </head>
    <header>
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false"
        @select="handleSelect">
        <el-menu-item index="0">
          <h1>快点开源软件趋势</h1>
        </el-menu-item>
        <div class="flex-grow"/>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2"><a class="nav-link" href="#TrendingRepos">热门仓库</a></el-menu-item>
        <el-menu-item index="3"><a class="nav-link" href="#HotCollections">热门收藏</a></el-menu-item>
      </el-menu>
    </header>

    <main>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in items" :key="item.id" :style="`background-image: url(${item.imageUrl}); background-size: cover;  background-position: center;`">
  <!-- <h3>{{ item.text }}</h3> -->
</el-carousel-item>
  </el-carousel>
      <TrendingRepos id="TrendingRepos" />
      <HotCollections id="HotCollections" />
    </main>
    <footer>
      <p>© 2023 HuanGeTech</p>
    </footer>
  </div>
  <el-backtop :right="50" :bottom="100" />
</template>

<script>
import TrendingRepos from './components/Trending.vue';
import HotCollections from './components/HotCollections.vue';

export default {
  name: 'App',
  components: {
    TrendingRepos,
    HotCollections
  },  
  data() {
    return {
      items: [] // 定义一个空数组
    };
  },
  created() {
    // 在created钩子函数中为slides数组赋值
    this.items = [
      { text: '幻灯片1', id: 1 ,imageUrl:"http://photocdn.tv.sohu.com/img/20230509/pic_org_d85af957-ddac-4ab4-a7d3-9a4ad1551fdc.png"},
      { text: '幻灯片2', id: 2 ,imageUrl:"http://photocdn.tv.sohu.com/img/20230511/pic_org_cbb248c4-5f6d-4400-b82e-56aa14a655a6.png"},
      { text: '幻灯片3', id: 3 ,imageUrl:"http://photocdn.tv.sohu.com/img/q_mini/20230522/pic_org_90b4b8f8-02f2-4ee8-a273-ae554264f419.png"}
    ];
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
}


footer {
  text-align: center;
  margin-top: 20px;
}

h1 {
  color: #24292e;
  font-size: 32px;
}

main {
  background-color: #f6f8fa;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

p {
  color: #586069;
}

/* 样式化 TrendingRepos 组件中的卡片 */
.card {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

h2 {
  color: #0366d6;
  font-size: 24px;
  margin-bottom: 10px;
}

a.nav-link {
  text-decoration: none;
}

p {
  color: #586069;
  margin-bottom: 10px;
}

p.language {
  color: #fff;
  background-color: #6c757d;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.flex-grow {
  flex-grow: 1;

}
</style>


<style scoped>



</style>