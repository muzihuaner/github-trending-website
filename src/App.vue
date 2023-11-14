
<template>
  <div id="app">
    <header>
      <h1>开源软件趋势</h1>
    </header>
    <main>
      <TrendingRepos />
    </main>
    <footer>
      <p>© 2023 HuanGeTech</p>
    </footer>
  </div>
</template>

<script>
import TrendingRepos from './Trending.vue';

export default {
  name: 'App',
  components: {
    TrendingRepos,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
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
</style>