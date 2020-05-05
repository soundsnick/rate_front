<template>
  <div class="home-page">
    <div class="container">
      <div class="home__search">
        <Search buttonStyle="secondary" />
        <span class="home__search-title">Посмотреть или Оценить</span>
        <div class="home__search-buttons">
          <router-link to="/list/departments" class="button-circled no-border" data-style="secondary">Кафедру</router-link>
          <router-link to="/list/specialities" class="button-circled no-border" data-style="secondary">Специальность</router-link>
          <router-link to="/list/professors" class="button-circled no-border" data-style="secondary">Преподавателя</router-link>
          <router-link to="/list/disciplines" class="button-circled no-border" data-style="secondary">Дисциплину</router-link>
        </div>
      </div>
      <InfoTable link="#" linkText="Посмотреть все отзывы университета" title="Отзывы Университета" subtitle="(112 отзывов)" :items="reviews" layout="grid"/>
      <InfoTable link="/list/specialities" linkText="Посмотреть все специальности" title="Топ специальностей" :items="specialities" layout="list"/>
      <div class="info-table-grid" v-if="isAuthenticated">
        <InfoTable title="Топ кафедры" :items="departments" layout="list"/>
        <InfoTable title="Топ преподавателей" :items="professors" layout="list"/>
      </div>
    </div>
  </div>
</template>
<style scoped>
    .home__search{
      padding: 30px;
      background: var(--primary-color);
      border-radius: 8px;
      box-shadow: var(--wide-shadow);
    }
    .home__search-title{
      display: inline-block;
      font-size: 35px;
      color: #fff;
      margin: 20px 0;
      margin-top: 30px;
    }
    .home__search-buttons{
      display: grid;
      grid-template-columns: repeat(4, minmax(100px, 1fr));
      grid-gap: 20px;
    }
</style>
<script>
import Search from '@/components/Search.vue'
import InfoTable from '@/components/InfoTable.vue'

export default {
  name: 'Home',
  components: {
    Search,
    InfoTable
  },
  beforeMount(){
    this.$store.dispatch('getFaculties')
    this.$store.dispatch('getDepartments')
    this.$store.dispatch('getSpecialities')
    this.$store.dispatch('getProfessors')
  },
  computed: {
    isAuthenticated(){
      return this.$store.getters.isAuthenticated
    },
    reviews(){
      return [
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
      ]
    },
    specialities(){
      return this.$store.getters.getTopSpecialities
    },
    departments(){
      return this.$store.getters.getTopDepartments
    },
    professors(){
      return this.$store.getters.getTopProfessors
    }
  }
}
</script>
