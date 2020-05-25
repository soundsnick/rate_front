<template>
  <div class="reviews-view">
    <div class="container">
      <Search buttonStyle="primary"/>
      <div class="reviews-body">
        <RateListItem :rate="rate"/>
        <div class="reviews-grid">
          <InfoTable v-if="professors" :title="$t('home_tables.top.professors')" :items="professors" layout="list" link="#" linkText="Посмотреть всех преподавателей" />
          <div class="reviews-levels">
            <span class="reviews__level" v-for="level in levels">{{ `${level.title}: ${level.rate}/5` }}</span>
          </div>
        </div>
        <div class="reviews-tags--wrapper" v-if="tags">
          <span class="title">Часто используемые теги:</span>
          <div class="reviews-tags popup-tags">
            <div class="popup__tag" v-for="tag in tags">{{ tag.title }}</div>
          </div>
        </div>
        <div class="reviews-reviews--wrapper">
          <span class="title">Отзывы:</span>
          <div class="reviews-reviews">
            <Review v-for="(review, index) in reviews" :review="review" :key="index" :index="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .reviews-body{
    margin-top: 50px;
    text-align: left;
  }
  .reviews-grid{
    display: flex;
  }
  .info-table{
    flex: 1;
  }
  .reviews-tags{
    grid-template-columns: repeat(5, minmax(100px, 1fr));
  }
  .reviews-levels{
    flex: 1;
    padding: 30px 0;
    margin-left: 50px;
  }
  .reviews__level{
    display: block;
    line-height: 1.3;
    padding: 5px 0;
    font-size: 18px;
  }
  .reviews-reviews--wrapper{
    margin: 30px 0;
  }
</style>
<script type="text/javascript">
  import Search from '../components/Search.vue'
  import RateListItem from '../components/RateListItem.vue'
  import InfoTable from '@/components/InfoTable.vue'
  import Review from '@/components/Review.vue'

  export default {
    components: {
      Search,
      RateListItem,
      InfoTable,
      Review
    },
    beforeMount(){
      this.$store.dispatch('getProfessors')
    },
    computed: {
      rate(){
        return { title: "Информационные системы", link: "#", reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      },
      levels(){
        return [
          { title: "Уровень востребованности", rate: 3.5 },
          { title: "Уровень тех.обеспечения", rate: 3.5 },
          { title: "Квалификация преподавателей", rate: 3.5 },
        ]
      },
      professors(){
        return [
          { title: 'Круглова А.Б', subtitle: '12 отзывов', rate: '5.0' },
          { title: 'Титов П.С.', subtitle: '12 отзывов', rate: '5.0' },
          { title: 'Гайсин Б.С.', subtitle: '12 отзывов', rate: '5.0' },
        ]
      },
      tags(){
        return [
          { title: "Классно", key: 0},
          { title: "Интересно", key: 1},
          { title: "Все круто", key: 2},
          { title: "Качественно", key: 3},
          { title: "Пойдет", key: 4},
        ]
      },
      reviews(){
        return [
          {
            id: 0,
            date: '20.03.2020',
            levels: [
              { title: "Уровень востребованности", rate: 3.5 },
              { title: "Уровень тех.обеспечения", rate: 3.5 },
              { title: "Квалификация преподавателей", rate: 3.5 },
            ],
            text: "Lorem ipsum",
            tags: [
              { title: "Классно", key: 0},
              { title: "Интересно", key: 1},
              { title: "Все круто", key: 2},
              { title: "Качественно", key: 3},
              { title: "Пойдет", key: 4},
            ],
            likes: 2,
            dislikes: 1
          },
          {
            id: 1,
            date: '20.03.2020',
            levels: [
              { title: "Уровень востребованности", rate: 3.5 },
              { title: "Уровень тех.обеспечения", rate: 3.5 },
              { title: "Квалификация преподавателей", rate: 3.5 },
            ],
            text: "Lorem ipsum",
            tags: [
              { title: "Классно", key: 0},
              { title: "Интересно", key: 1},
              { title: "Все круто", key: 2},
              { title: "Качественно", key: 3},
              { title: "Пойдет", key: 4},
            ],
            likes: 2,
            dislikes: 1
          },
          {
            id: 1,
            date: '20.03.2020',
            levels: [
              { title: "Уровень востребованности", rate: 3.5 },
              { title: "Уровень тех.обеспечения", rate: 3.5 },
              { title: "Квалификация преподавателей", rate: 3.5 },
            ],
            text: "Lorem ipsum",
            tags: [
              { title: "Классно", key: 0},
              { title: "Интересно", key: 1},
              { title: "Все круто", key: 2},
              { title: "Качественно", key: 3},
              { title: "Пойдет", key: 4},
            ],
            likes: 3,
            dislikes: 2
          },
          {
            id: 1,
            date: '20.03.2020',
            levels: [
              { title: "Уровень востребованности", rate: 3.5 },
              { title: "Уровень тех.обеспечения", rate: 3.5 },
              { title: "Квалификация преподавателей", rate: 3.5 },
            ],
            text: "Lorem ipsum",
            tags: [
              { title: "Классно", key: 0},
              { title: "Интересно", key: 1},
              { title: "Все круто", key: 2},
              { title: "Качественно", key: 3},
              { title: "Пойдет", key: 4},
            ]
          }
        ]
      }

    }
  }
</script>
