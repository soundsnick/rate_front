<template id="">
  <div class="login-page">
    <h1 class="title">Сброс пароля</h1>
    <LoginFormWrapper form="restore"/>
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
