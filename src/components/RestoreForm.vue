<template>
  <div class="form--wrapper">
    <form class="form" v-on:submit.prevent="login">
      <div class="form-response" v-if="loginResponse">
        <span>{{ loginResponse }}</span>
      </div>
      <span class="form__caption">Придумайте новый пароль для входа в систему.</span>
      <input class="form__field" type="password" v-model="old_password" placeholder="Старый пароль">
      <input class="form__field" type="password" v-model="new_password" placeholder="Новый пароль">
      <input class="form__field" type="password" v-model="new_password_confirmation" placeholder="Повторите пароль">
      <input class="form__button button" type="submit" value="Сброс">
    </form>
  </div>
</template>
<style scoped>
  .form{
    margin: auto;
  }
  .form__caption{
    margin-bottom: 15px;
  }
</style>
<script type="text/javascript">
  export default{
    data(){
      return {
        old_password: '',
        new_password: '',
        new_password_confirmation: ''
      }
    },
    computed: {
      loginResponse(){ return this.$store.state.loginResponse }
    },
  }
</script>
