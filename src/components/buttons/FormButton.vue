<template>
  <router-link class="button" :to="to">{{ text }}</router-link>
</template>
<style scoped>
  .button{
    text-align: center;
  }
</style>
<script type="text/javascript">
  export default{
    props: ['to', 'text']
  }
</script>
