
<template>
   
  <div id="app">
    <head>
      <title>快点开源软件趋势</title>
    </head>
    <header>
  <div class="nav-left">
    <h1>快点开源软件趋势</h1>
  </div>
  <nav class="nav-right">
    <ul>
      <li><router-link class="nav-link" to="/">首页</router-link></li>
      <li><a class="nav-link" href="#TrendingRepos">热门仓库</a></li>
      <li><a class="nav-link" href="#HotCollections">热门收藏</a></li>
    </ul>
  </nav>
</header>

    <main>
      <TrendingRepos id="TrendingRepos" />
      <HotCollections id="HotCollections"/>
    </main>
    <footer>
      <p>© 2023 HuanGeTech</p>
    </footer>
  </div>
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
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
}

header {
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-left {
  display: flex;
  align-items: center;
}

.nav-right {
  margin-left: 20px;
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
a.link{
  text-decoration: none;
}

p {
  color: #586069;
  margin-bottom: 10px;
}
p.language{
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
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.nav-link {
  display: inline-block;
  margin-right: 10px;
  padding: 10px;
  color: #333;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #eee;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul>li{
  float: left;
}

</style>