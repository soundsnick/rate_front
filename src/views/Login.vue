<template id="">
  <div class="login-page">
    <h1 class="title">Вход на сайт</h1>
    <LoginFormWrapper form="login"/>
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
