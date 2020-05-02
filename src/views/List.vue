<template>
  <div class="list-page">
    <div class="container">
      <Search buttonStyle="primary" />
      <TabController :tabs="tabs">
        <template slot="departments">
          <span>Departments</span>
        </template>
        <template slot="specialities">
          <span>Specialities</span>
        </template>
        <template slot="professors">
          <span>Professors</span>
        </template>
        <template slot="disciplines">
          <span>Disciplines</span>
        </template>
      </TabController>
    </div>
  </div>
</template>
<style scoped>
  .list-page{
    padding: 40px 0;
  }
</style>

<script type="text/javascript">
  import Search from '../components/Search.vue'
  import TabController from '../components/TabController.vue'

  export default {
    data(){
      return {
        tabs: [
          { id: 'departments', text: "Найти кафедру" },
          { id: 'specialities', text: "Найти специальность" },
          { id: 'professors', text: "Найти преподавателя" },
          { id: 'disciplines', text: "Найти дисциплину" }
        ]
      }
    },
    components: {
      Search,
      TabController
    }
  }
</script>
