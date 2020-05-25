<template>
  <div class="list-page">
    <div class="container">
      <Search buttonStyle="primary" />
      <TabController :tabs="tabs">
        <template v-for="tab in tabs" :slot="tab.id">
          <Tab :tab="tab.id" :lists="getContent(tab.content)" :dropdowns="dropdowns" />
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
  import Tab from '../components/Tab.vue'

  export default {
    data(){
      return {
        tabs: [
          { id: 'departments', text: this.$t('list.find.department'), content: "departments" },
          { id: 'specialities', text: this.$t('list.find.speciality'), content: "specialities" },
          { id: 'professors', text: this.$t('list.find.professor'), content: "professors" },
          { id: 'disciplines', text: this.$t('list.find.discipline'), content: "disciplines" }
        ],
      }
    },
    components: {
      Search,
      TabController,
      Tab
    },
    beforeMount(){
      this.$store.dispatch('getFaculties')
      this.$store.dispatch('getDepartments')
      this.$store.dispatch('getSpecialities')
      this.$store.dispatch('getDisciplines')
      this.$store.dispatch('getProfessorDisciplines')
      this.$store.dispatch('getProfessors')
    },
    computed: {
      departments(){
        return this.$store.getters.getTabDepartments
      },
      specialities(){
        return this.$store.getters.getTabSpecialities
      },
      professors(){
        return this.$store.getters.getTabProfessors
      },
      disciplines(){
        return this.$store.getters.getTabDisciplines
      },
      dropdowns(){
        return [
          {
            name: "faculty",
            selected: {
              label: this.$t('list.faculty'),
              value: 0,
            },
            options: (this.$store.state.faculties.body ? this.$store.state.faculties.body.map(faculty => ({ value: faculty.id, label: faculty.facultyName })) : [])
          },
          {
            name: "department",
            selected: {
              label: this.$t('list.department'),
              value: 0,
            },
            options: (this.$store.state.departments.body ? this.$store.state.departments.body.map(department => ({ value: department.id, label: department.name })) : [])
          },
          {
            name: "speciality",
            selected: {
              label: this.$t('list.speciality'),
              value: 0,
            },
            options: (this.$store.state.specialities.body ? this.$store.state.specialities.body.map(speciality => ({ value: speciality.id, label: speciality.name })) : [])
          },
          {
            name: "discipline",
            selected: {
              label: this.$t('list.discipline'),
              value: 0,
            },
            options: (this.$store.state.disciplines.body ? this.$store.state.disciplines.body.map(discipline => ({ value: discipline.id, label: discipline.name })) : [])
          },
        ]
      }
    },
    methods: {
      getContent(content_name){
        return this[content_name]
      },
    },
  }
</script>
