<template>
  <router-link :class="'button-circled ' + additionalClasses" :to="to" :data-style="descriptor" v-if="to">{{ text }}</router-link>
  <button :class="'button-circled ' + additionalClasses" :data-style="descriptor" :type="ifType" v-else>
    <slot></slot>
  </button>
</template>
<style scoped>
  .button{
    text-align: center;
  }
</style>
<script type="text/javascript">
  export default{
    props: ['to', 'text', 'descriptor', 'additionalClasses', 'ifType'],
  }
</script>
