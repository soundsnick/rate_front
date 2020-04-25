<template>
  <header class="header">
    <div class="container">
      <div class="logo--wrapper">
        <span class="logo">rate.iitu.kz</span>
      </div>
      <div class="language--wrapper">
        <Locale />
      </div>
      <nav class="header-navigation">
        <div class="auth-block" v-if="isAuthenticated">
          <button class="button-squared header-navigation__item" data-style="primary" @click="logout">Выйти</button>
        </div>
        <div class="auth-block" v-else>
          <SquareButton additionalClasses="header-navigation__item" descriptor="default" to="/register" text="Регистрация" />
          <SquareButton additionalClasses="header-navigation__item" descriptor="primary" to="/login" text="Вход" />
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
  .header{
    padding: 15px 0;
  }
  .header .container{
    display: flex;
    align-items: center;
  }
  .header-navigation{
    margin-left: auto;
  }
  .header-navigation, .auth-block{
    margin-left: auto;
    display: flex;
  }
  .header-navigation__item{
    margin-left: 10px;
  }
</style>

<script type="text/javascript">
  import Locale from "./Locale.vue"
  import SquareButton from "./buttons/SquareButton.vue"

  export default{
    computed: {
      isAuthenticated(){
        return this.$store.getters.isAuthenticated
      }
    },
    components: {
      Locale,
      SquareButton
    },
    methods: {
      logout(){
        this.$store.dispatch('logout')
      }
    }
  }
</script>
