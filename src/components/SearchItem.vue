<template>
  <div class="search__item">
    <router-link to="#" class="search__item-title">{{ item.title }}</router-link>
    <b :class="['search__item-type', item.type]">{{ typeToString(item.type) }}</b>
  </div>
</template>
<style scoped>
  .search__item-type{
    display: inline-block;
    padding: 5px 15px;
    font-size: 12px;
    background: var(--default-active);
    font-weight: 400;
    color: var(--primary-color);
    border-radius: 10px;
    margin-top: 10px;
  }
  .search__item-type.speciality{
    background: rgb(255, 219, 219);
    color: #864343;
  }
  .search__item-type.discipline{
    background: #9C27B0;
    color: #fff;
  }
  .search__item-type.professor{
    background: #4CAF50;
    color: #fff;
  }
  .search__item-body{
    margin: 0;
    margin-top: 5px;
  }
  .search__item{
    text-align: left;
    border-bottom: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 1px 0 #fff;
    padding: 20px 0;
  }
  .search__item:last-child{
    border-bottom: none;
    box-shadow: none;
  }
  .search__item-title{
    display: block;
    font-weight: 500;
  }
</style>
<script type="text/javascript">
  export default {
    props: ["item"],
    methods: {
      typeToString(type){
        const types = {
          'speciality': this.$t('search.speciality'),
          'department': this.$t('search.department'),
          'discipline': this.$t('search.discipline'),
          'professor': this.$t('search.professor'),
        }
        return types[type] || ""
      }
    }
  }
</script>
