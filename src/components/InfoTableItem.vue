<template>
  <div class="info-table-item">
    <div class="info-table-item__body">
      <router-link :to="item.link" class="info-table-item__title" v-if="item.link">{{ item.title }}</router-link>
      <span class="info-table-item__title" v-else>{{ item.title }}</span>
      <span class="info-table-item__subtitle">{{ item.subtitle }}</span>
    </div>
    <div class="info-table-item__rate">
      <span>{{ item.rate }}</span>
    </div>
  </div>
</template>
<style scoped>
  .info-table-item{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 25px 30px;
    border-radius: 8px;
    border: 1px solid var(--border-opaque);
  }
  .info-table-item__title{
    display: block;
    font-size: 20px;
    margin-bottom: 2px;
  }
  .info-table-item__subtitle{
    font-size: 14px;
  }
  .info-table-item__body{
    text-align: left;
  }
  .info-table-item__rate{
    align-self: center;
    font-size: 22px;
  }
</style>
<script type="text/javascript">
  export default {
    props: ['item']
  }
</script>
