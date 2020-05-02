<template>
  <div class="info-table">
    <header class="info-table__header">
      <div class="info-table-info">
        <span class="info-table__title">{{ title }}</span>
        <span class="info-table__subtitle" v-if="subtitle">{{ subtitle }}</span>
      </div>
      <div class="info-table-nav">
        <router-link :to="link" v-if="linkText" class="button-circled no-border" data-style="primary">{{ linkText }}</router-link>
      </div>
    </header>
    <div class="info-table__body" :data-style="layout">
      <InfoTableItem v-for="(item, index) in items" :item="item" :key="index"/>
    </div>
  </div>
</template>
<style scoped>
  .info-table{
    background: var(--grey-bg);
    box-shadow: var(--wide-shadow);
    border-radius: 8px;
    border: 1px solid var(--border-opaque);
    padding: 25px;
    margin: 30px 0;
  }
  .info-table__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-table-info{
    text-align: left;
  }
  .info-table__title{
    display: block;
    font-size: 20px;
    font-weight: 400;
  }
  .info-table__subtitle{
    display: block;
    margin-top: 5px;
    font-size: 15px;
  }
  .info-table__body{
    display: grid;
    grid-gap: 20px;
    margin: 20px 0;
  }
  .info-table__body[data-style="grid"]{
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  .info-table__body[data-style="list"]{
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    grid-gap: 10px;
  }
</style>
<script type="text/javascript">
  import InfoTableItem from './InfoTableItem.vue'

  export default {
    props: ['title', 'subtitle', 'link', 'linkText', 'layout', 'items'],
    components: {
      InfoTableItem
    }
  }
</script>
