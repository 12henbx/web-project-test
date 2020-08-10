<template>
    <div class="contact">
        <h1>This is an contact page</h1>
        <h2>HTML Forms</h2>

        <form>
            <br>
            <label>
                <a>First name:</a>
                <br>
                <input type="text">
            </label>
            <br>
            <label>
                <a>Last name:</a>
                <br>
                <input type="text">
            </label>
            <br>
            <label>
                <a>Article:</a>
                <br>
                <textarea name="article" cols="50" rows="10"></textarea>
            </label>
            <br>
            <input type="submit">
        </form>
    </div>
</template>
<script>
import { router } from '../router/index'

export default {
  methods: {
    routeToHome () {
      router.push({ name: 'home' })
    },
    routeToArticle () {
      router.push({ name: 'List Articles' })
    },
    routeToContact () {
      router.push({ name: 'contact' })
    },
    routeToAbout () {
      router.push({ name: 'About me' })
    }
  }
}
</script>
