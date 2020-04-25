<template>
  <div id="app" class="app">
    <Header v-if="headerRenderCondition" />
    <router-view/>
    <Footer />
  </div>
</template>
<style>
  .app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>

<script type="text/javascript">
  require('@/assets/stylesheets/main.css')
  require('@/assets/stylesheets/variables.css')
  require('@/assets/stylesheets/buttons.css')

  import Header from "./components/Header.vue"
  import Footer from "./components/Footer.vue"

  export default{
    components: {
      Header,
      Footer
    },
    computed: {
      headerRenderCondition(){
        let filtered = ["Login", "Register"]
        return (filtered.indexOf(this.$route.name) === -1)
      }
    }
  }
</script>
