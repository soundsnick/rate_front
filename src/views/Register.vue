<template id="">
  <div class="login-page">
    <h1 class="title">Регистрация</h1>
    <LoginFormWrapper form="register"/>
  </div>
</template>
<script type="text/javascript">
  import LoginFormWrapper from '../components/LoginFormWrapper.vue'
  export default {
    components: {
      LoginFormWrapper,
    }
  }
</script>
