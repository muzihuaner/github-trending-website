<template>
  <div>
    <h1>📖 热门收藏</h1>
    <p>对于技术领域的每月和历史排名以及趋势进行深入分析，借助精心挑选的仓库列表提供排名。</p>
    <div class="card-container">
      <template v-for="collection in collections" :key="collection.name">
        <div class="card">
          <h2 style="color: black;">{{ collection.name }}</h2>

          <template v-for="item in collection.items" :key="item.id">
            <p># {{ item.repo_current_period_rank }}</p>
            <a :href="'https://github.com/' + item.repo_name" class="link">
              <h3>{{ item.repo_name }}</h3>
            </a>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
  
<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
  
<script>
import axios from 'axios';

export default {
  name: 'HotCollections',
  data() {
    return {
      collections: []
    };
  },
  mounted() {
    this.fetchCollections();
  },
  methods: {
    fetchCollections() {
      axios
        .get('https://api.ossinsight.io/v1/collections/hot/')
        .then(response => {
          const sortedCollections = response.data.data.rows.sort(
            (a, b) => a.repo_current_period_rank - b.repo_current_period_rank
          );

          const collapsedCollections = {};
          sortedCollections.forEach(collection => {
            if (collapsedCollections[collection.name]) {
              collapsedCollections[collection.name].items.push(collection);
            } else {
              collapsedCollections[collection.name] = {
                name: collection.name,
                items: [collection]
              };
            }
          });

          this.collections = Object.values(collapsedCollections);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
  