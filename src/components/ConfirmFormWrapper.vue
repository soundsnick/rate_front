<template>
  <div class="login-form">
    <div class="login-form__heading">
      <span>rate.iitu.kz</span>
    </div>
    <div class="login-form__body">
      <ConfirmForm />
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
  import ConfirmForm from "../components/ConfirmForm.vue"
  export default{
    props: ['form'],
    components: {
      ConfirmForm
    },

  }
</script>
