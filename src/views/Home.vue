<template>
  <div class="home">
    <div class="container">
      <div class="home__search">
        <Search buttonStyle="secondary" />
        <span class="home__search-title">Посмотреть или Оценить</span>
        <div class="home__search-buttons">
          <router-link to="#" class="button-circled no-border" data-style="secondary">Кафедру</router-link>
          <router-link to="#" class="button-circled no-border" data-style="secondary">Специальность</router-link>
          <router-link to="#" class="button-circled no-border" data-style="secondary">Преподавателя</router-link>
          <router-link to="#" class="button-circled no-border" data-style="secondary">Дисциплину</router-link>
        </div>
      </div>
      <InfoTable link="#" linkText="Посмотреть все отзывы университета" title="Отзывы Университета" subtitle="(112 отзывов)" :items="reviews" layout="grid"/>
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
  computed: {
    reviews(){
      return [
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
        { title: 'Репутация', rate: '5.0' },
      ]
    }
  }
}
</script>
