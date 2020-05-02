<template>
  <div class="login-form">
    <div class="login-form__heading">
      <span>rate.iitu.kz</span>
    </div>
    <div class="login-form__body">
      <LoginForm v-if="form == 'login'" />
      <RegisterForm v-else-if="form == 'register'" />
      <RestoreForm v-else-if="form == 'restore'" />
      <span v-else>Форма не найдена</span>
    </div>
  </div>
</template>
<style scoped>
  .login-form{
    max-width: 600px;
    margin: auto;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.15);
  }
  .login-form__heading{
    background: #E9ECEF;
    padding: 15px;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  .login-form__body{
    padding: 40px 30px;
  }
</style>

<script type="text/javascript">
  import LoginForm from "../components/LoginForm.vue"
  import RegisterForm from "../components/RegisterForm.vue"
  import RestoreForm from "../components/RestoreForm.vue"
  export default{
    props: ['form'],
    components: {
      LoginForm,
      RegisterForm,
      RestoreForm
    },
    mounted(){
      this.$store.dispatch("authRedirect", { vm: this })
    }
  }
</script>
