<template>
  <div class="home-page">
    <div class="container">
      <div class="home__search">
        <Search buttonStyle="secondary" />
        <span class="home__search-title">{{ $t('home_search.title') }}</span>
        <div class="home__search-buttons">
          <router-link to="/list/departments" class="button-circled no-border" data-style="secondary">{{ $t('home_search.department') }}</router-link>
          <router-link to="/list/specialities" class="button-circled no-border" data-style="secondary">{{ $t('home_search.speciality') }}</router-link>
          <router-link to="/list/professors" class="button-circled no-border" data-style="secondary">{{ $t('home_search.professor') }}</router-link>
          <router-link to="/list/disciplines" class="button-circled no-border" data-style="secondary">{{ $t('home_search.discipline') }}</router-link>
        </div>
      </div>
      <InfoTable link="/reviews/university" :linkText="$t('home_tables.reviews.linkText')" :title="$t('home_tables.reviews.title')" :subtitle="$t('home_tables.reviews.count', { number: 113 })" :items="reviews" layout="grid"/>
      <InfoTable link="/list/specialities" :linkText="$t('home_tables.specialities.linkText')" :title="$t('home_tables.specialities.title')" :items="specialities" layout="list"/>
      <div class="info-table-grid" v-if="isAuthenticated">
        <InfoTable :title="$t('home_tables.top.departments')" :items="departments" layout="list"/>
        <InfoTable :title="$t('home_tables.top.professors')" :items="professors" layout="list"/>
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
      InfoTable,
    },
    beforeMount(){
      this.$store.dispatch('getFaculties')
      this.$store.dispatch('getDepartments')
      this.$store.dispatch('getSpecialities')
      this.$store.dispatch('getProfessors')
      this.$store.dispatch('getDisciplines')
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
