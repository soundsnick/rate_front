<template>
  <div class="notification">
    <p class="notification__text">{{ notification.text }}</p>
    <router-link to="/" class="notification__more">{{ $t('notifications.more_single') }}</router-link>
  </div>
</template>
<style scoped>
  .notification{
    background: #fff;
    padding: 10px;
    border-bottom: 1px solid var(--border-opaque);
    text-align: right;
    transition: background 0.15s;
  }
  .notification:hover{
    background: var(--default-active);
  }
  .notification:last-child{
    border-bottom: none;
  }
  .notification__text{
    text-align: left;
    margin: 0;
    font-size: 15px;
    line-height: 1.2;
  }
  .notification__more{
    display: inline-block;
    margin-top: 5px;
    font-size: 13px;
  }
</style>
<script type="text/javascript">
  export default {
    props: ["notification"]
  }
</script>
