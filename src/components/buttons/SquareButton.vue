<template>
  <router-link :class="'button-squared ' + additionalClasses" :to="to" :data-style="descriptor">{{ text }}</router-link>
</template>
<style scoped>
  .button{
    text-align: center;
  }
</style>
<script type="text/javascript">
  export default{
    props: ['to', 'text', 'descriptor', 'additionalClasses'],
  }
</script>
