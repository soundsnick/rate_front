<template>
  <header :class="'header ' + additionalClasses">
    <div class="container">
      <div class="logo--wrapper">
        <router-link to="/" class="logo">rate.iitu.kz</router-link>
      </div>
      <div class="language--wrapper">
        <Locale />
      </div>
      <nav class="header-navigation">
        <div class="auth-block" v-if="isAuthenticated">
          <button class="button-squared header-navigation__item" data-style="primary" @click="logout">{{ $t('header.logout') }}</button>
        </div>
        <div class="auth-block" v-else>
          <Notifications />
          <SquareButton additionalClasses="header-navigation__item" descriptor="default" to="/register" :text="$t('header.register')" />
          <SquareButton additionalClasses="header-navigation__item" descriptor="primary" to="/login" :text="$t('header.login')" />
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
  .header{
    padding: 15px 0;
  }
  .header.with-shadow{
    box-shadow: var(--wide-shadow);
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
  import Notifications from "./notifications/Notifications.vue"

  export default{
    props: ['additionalClasses'],
    computed: {
      isAuthenticated(){
        return this.$store.getters.isAuthenticated
      }
    },
    components: {
      Locale,
      SquareButton,
      Notifications
    },
    methods: {
      logout(){
        this.$store.dispatch('logout')
      }
    }
  }
</script>
