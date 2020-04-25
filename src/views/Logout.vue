<template>
  <span class="loading">Выход...</span>
</template>
<style scoped>
  .loading{
    display: block;
    padding: 50px 0;
  }
</style>

<script type="text/javascript">
  export default{
    mounted(){
      this.logout()
    }
  }
</script>
