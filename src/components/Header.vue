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
          <Notifications v-if="isProfessor" />
          <button class="button-squared header-navigation__item" data-style="primary" @click="logout">{{ $t('header.logout') }}</button>
        </div>
        <div class="auth-block" v-else>
          <SquareButton additionalClasses="header-navigation__item" descriptor="default" to="/register" :text="$t('header.register')" />
          <SquareButton additionalClasses="header-navigation__item" descriptor="primary" to="/login" :text="$t('header.login')" />
        </div>
      </nav>
      <button type="button" class="header-mobile-button">
        <font-awesome-icon icon="bars" @click="mobileNavState = !mobileNavState" />
      </button>
      <nav class="header-mobile-nav" v-if="mobileNavState">
        <span class="title">{{ $t('header.navigation')}}</span>
        <div class="auth-block" v-if="isAuthenticated">
          <Notifications v-if="isProfessor" isMobile="true"/>
          <button class="button-squared header-navigation__item" data-style="primary" @click="logout">{{ $t('header.logout') }}</button>
        </div>
        <div class="auth-block" v-else>
          <SquareButton additionalClasses="header-navigation__item" descriptor="default" to="/register" :text="$t('header.register')" />
          <SquareButton additionalClasses="header-navigation__item" descriptor="primary" to="/login" :text="$t('header.login')" />
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
  .header{
    position: relative;
    z-index: 99;
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
  .header-mobile-button{
    display: none;
    margin-left: auto;
    font-size: 17px;
    color: var(--primary-active);
    background: none;
    border: navajowhite;
    cursor: pointer;
    outline: none;
  }
  .header-mobile-nav{
    position: fixed;
    right: 0;
    display: block;
    background: #fff;
    padding: 20px;
    padding-top: 68px;
    z-index: -1;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .header-mobile-nav .button-squared.header-navigation__item {
    margin-left: 0;
    margin-bottom: 10px;
    padding: 10px 40px;
  }
  .header-mobile-nav .auth-block{
    display: block;
  }
</style>

<script type="text/javascript">
  import Locale from "./Locale.vue"
  import SquareButton from "./buttons/SquareButton.vue"
  import Notifications from "./notifications/Notifications.vue"

  export default{
    data(){
      return {
        mobileNavState: false
      }
    },
    props: ['additionalClasses'],
    computed: {
      isAuthenticated(){
        return this.$store.getters.isAuthenticated
      },
      isProfessor(){
        return (this.isAuthenticated && JSON.parse(localStorage.access_token).professor ? true : false)
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
