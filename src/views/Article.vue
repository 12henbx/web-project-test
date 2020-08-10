<template>
  <div class="articles">
    <h1>Articles list</h1>
    <ul>
      <!-- <li v-for="arc in Articlelist" :key="arc.id"> -->
      <li>
        <!-- <div class="card"> -->
          <p>{{Articlelist.title}}</p>
          <p>{{Articlelist.content}}</p>
          <p>{{Articlelist.date}}</p>
        <!-- </div> -->
      </li>
    </ul>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Articles from '../data/data'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'articleList'
    ]),
    Articlelist () {
      // console.log(this.articleList.data.find((arc) => arc.id === this.$route.params.id)
      return this.articleList.find((arc) => arc.id === String(this.$route.params.id))
    }
  }
}

</script>

<style lang="scss" scoped>
    .articles{
        text-align: left;
        ul li{
            list-style-type: none;
        }
    }
  .landing-page{
    width: 70%;
  }
  .card{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.5s;
      padding: 2px 16px;
      margin-bottom: 10px;
      padding: 10px;
  }
  .card:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
</style>
