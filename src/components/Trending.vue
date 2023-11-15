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
      <label>编程语言：</label>
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
        <h3># {{ index + 1 }}</h3>
        <div style="display: flex; align-items: center;">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"
            class="octicon octicon-repo mr-1 color-fg-muted">
            <path
              d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z">
            </path>
          </svg>
          <a :href="'https://github.com/' + repo.repo_name" class="link">
            <h4 style="word-break: break-all;margin-left: 5px;">{{ repo.repo_name }}</h4>
          </a>
        </div>

        <p class="language">{{ repo.primary_language }}</p>
        <p>{{ repo.description }}</p>
        <p><svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16"
            data-view-component="true" class="octicon octicon-star">
            <path
              d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z">
            </path>
          </svg> {{ repo.stars }}</p>
        <p><svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16"
            data-view-component="true" class="octicon octicon-repo-forked">
            <path
              d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z">
            </path>
          </svg> {{ repo.forks }}</p>
        <p><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"
            class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
            <path
              d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z">
            </path>
          </svg> {{ repo.pull_requests }}</p>
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
}</style>