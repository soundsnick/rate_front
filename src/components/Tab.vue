<template>
  <div class="tab">
    <header class="tab-header" v-if="dropdowns">
      <v-select class="tab-dropdown" v-for="(dropdown, index) in dropdowns" :key="index" :selected="dropdown.selected" v-model="filter[dropdown.name]" :options="dropdown.options" />
    </header>
    <div class="tab-list">
      <RateListItem v-for="rate in lists" :rate="rate"/>
    </div>
  </div>
</template>
<style scoped>
  .tab-header{
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-gap: 10px;
    margin-bottom: 10px;
  }
</style>
<script type="text/javascript">
  import RateListItem from './RateListItem.vue'

  export default {
    data(){
      return {
        filter: {
          departments: '',
          specialities: '',
          professors: '',
          disciplines: ''
        }
      }
    },
    props: ["tab", "dropdowns", "lists"],
    components: {
      RateListItem
    },
    mounted(){
      let tmp_filter = {}
      this.dropdowns.map(dropdown => {
        tmp_filter[dropdown.name] = dropdown.selected
      })
      this.filter = tmp_filter
    }
  }
</script>
