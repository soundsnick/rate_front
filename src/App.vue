<template>
  <div id="app" class="app">
    <Header v-if="headerRenderCondition" :additionalClasses="isShadowed" />
    <div class="container" v-if="!notConfirmed">
      <p class="warning">
        Подтвердите аккаунт чтобы использовать сервис!
      </p>
    </div>
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
  .warning{
    margin-bottom: 15px;
    display: block;
    padding: 20px;
    background: var(--default-active);
    color: inherit;
    border-radius: 4px;
  }
</style>

<script type="text/javascript">
  require('@/assets/stylesheets/main.css')
  require('@/assets/stylesheets/media.css')
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
        let filtered = ["Login", "Register", "Restore"]
        return (filtered.indexOf(this.$route.name) === -1)
      },
      isShadowed(){
        let filtered = ["List"]
        return (filtered.indexOf(this.$route.name) !== -1) ? "with-shadow" : ""
      },
      notConfirmed(){
        if(localStorage.register_token){
          let user = JSON.parse(localStorage.register_token)
          return (user.isVerified == false) ? user.isVerified : true
        }else return true
      }
    },
  }
</script>
