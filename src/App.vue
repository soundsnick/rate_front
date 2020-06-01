<template>
  <div id="app" class="app">
    <Header v-if="headerRenderCondition" :additionalClasses="isShadowed" />
    <p class="warning" v-if="!notConfirmed">
      Мы отправили вам письмо с подтверждением электронной почты!
    </p>
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
        if(localStorage.access_token){
          let user = JSON.parse(localStorage.access_token)
          return (user.user) ? user.user.isVerified : true
        }else return true
      }
    },
  }
</script>
