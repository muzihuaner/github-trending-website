<template>
  <div>
    <h1>🔥 热门仓库</h1>
    <p>我们将所有仓库根据得分进行排名。总得分 = 星标得分 + 分支得分 + 基础得分。</p>
    <div>
      <label>时间段：</label>
      <select v-model="selectedPeriod" @change="fetchTrendingRepos">
        <option value="past_24_hours">过去一天</option>
        <option value="past_week">过去一周</option>
        <option value="past_month">过去一个月</option>
        <option value="past_3_months">过去三个月</option>
      </select>
    </div>
    <div>
      <label>语言：</label>
      <select v-model="selectedLanguage" @change="fetchTrendingRepos">
        <option value="All">所有</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="PHP">PHP</option>
        <option value="C++">C++</option>
        <option value="C#">C#</option>
        <option value="TypeScript">TypeScript</option>
        <option value="Shell">Shell</option>
        <option value="C">C</option>
        <option value="Ruby">Ruby</option>
        <option value="Rust">Rust</option>
        <option value="Go">Go</option>
        <option value="Kotlin">Kotlin</option>
        <option value="HCL">HCL</option>
        <option value="PowerShell">PowerShell</option>
        <option value="CMake">CMake</option>
        <option value="Groovy">Groovy</option>
        <option value="PLpgSQL">PLpgSQL</option>
        <option value="TSQL">TSQL</option>
        <option value="Dart">Dart</option>
        <option value="Swift">Swift</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Elixir">Elixir</option>
        <option value="Haskell">Haskell</option>
        <option value="Solidity">Solidity</option>
        <option value="Assembly">Assembly</option>
        <option value="R">R</option>
        <option value="Scala">Scala</option>
        <option value="Julia">Julia</option>
        <option value="Lua">Lua</option>
        <option value="Clojure">Clojure</option>
        <option value="Erlang">Erlang</option>
        <option value="Common Lisp">Common Lisp</option>
        <option value="Emacs Lisp">Emacs Lisp</option>
        <option value="OCaml">OCaml</option>
        <option value="MATLAB">MATLAB</option>
        <option value="Objective-C">Objective-C</option>
        <option value="Perl">Perl</option>
        <option value="Fortran">Fortran</option>
      </select>
    </div>
    <div class="card-container">
      <div v-for="(repo, index) in trendingRepos" :key="repo.repo_id" class="card">
        <h3># {{ index+1 }}</h3>
        <a :href="'https://github.com/' + repo.repo_name" class="link">
          <h2>{{ repo.repo_name }}</h2>
        </a>
        <p class="language">{{ repo.primary_language }}</p>
        <p>描述：{{ repo.description }}</p>
        <p>Stars: {{ repo.stars }}</p>
        <p>Forks: {{ repo.forks }}</p>
        <p>Pull Requests: {{ repo.pull_requests }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TrendingRepos',
  data() {
    return {
      selectedPeriod: 'past_month',
      selectedLanguage: 'All',
      trendingRepos: [],
    };
  },
  mounted() {
    this.fetchTrendingRepos();
  },
  methods: {
    fetchTrendingRepos() {
      const apiUrl = `https://api.ossinsight.io/v1/trends/repos/?period=${this.selectedPeriod}&language=${this.selectedLanguage}`;

      axios.get(apiUrl)
        .then(response => {
          this.trendingRepos = response.data.data.rows;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
}

h2 {
  margin-top: 0;
}

p {
  margin-bottom: 10px;
}
</style>