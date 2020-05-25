<template>
  <footer class="footer">
    <div class="container">
      <div class="logo--wrapper">
        <router-link class="logo" to="/">rate.iitu.kz</router-link>
      </div>
      <p class="footer-unauth" v-if="!isAuthenticated">
        {{ $t('footer.not_logged') }} (<router-link to="login">{{ $t('footer.login') }}</router-link>)
      </p>
    </div>
  </footer>
</template>
<style scoped>
  .footer{
    padding: 15px 0;
    background: var(--grey-bg);
    margin-top: auto;
  }
  .footer .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
<script type="text/javascript">
  export default {
    computed: {
      isAuthenticated(){
        return this.$store.getters.isAuthenticated
      }
    }
  }
</script>
