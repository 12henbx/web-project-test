<template>
  <div class="articles">
    <h1>Articles list</h1>
    <br />
    <div>
    <ul>
      <li v-for="arc in articleList" :key="arc.id">
        <div class="card">
          <h1 class="judul-h1" v-on:click="routeToArticle(arc.id)">{{arc.title}}</h1>
          <p>{{arc.content}}</p>
          <p>{{arc.date}}</p>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { router } from '../router/index'

export default {
  created ({ commit }) {
    this.getArticles({ commit })
  },
  computed: {
    ...mapGetters([
      'articleList'
    ]),
    Articlelist () {
    //   return Articles.find((arc) => arc.id === this.$route.params.id)
      // eslint-disable-next-line no-undef
      return Articles
    }
  },
  methods: {
    ...mapActions([
      'getArticles'
    ]),
    routeToArticle (idArticle) {
      router.push({ name: 'Article', params: { id: idArticle } })
    }
  }
}

</script>

<style lang="scss" scoped>
    .articles{
        text-align: left;
        h1 {
            display: block;
        }
        ul li{
            list-style-type: none;
        }
    }
  .card{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.5s;
      padding: 2px 16px;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 10px;
  }
  .card:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  #judul{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: aqua;
  }

  .judul-h1:hover{
    text-decoration: underline;
  }
</style>
