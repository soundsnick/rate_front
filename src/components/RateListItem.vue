<template>
  <div class="rate-item--wrapper">
    <div class="rate-item">
      <header class="rate-item__header">
        <router-link class="rate-item__title" v-if="rate.link" :to="rate.link">{{ rate.title }}</router-link>
        <span class="rate-item__title" v-else>{{ rate.title }}</span>
        <div class="rate-item__rating-wrapper">
          <div class="stars" :style="rateToGradient(rate.rate)"></div>
          <span class="rate-item__rating">{{ rate.rate }} из 5</span>
        </div>
      </header>
      <div class="rate-item__body">
        <span class="rate-item__info" v-if="rate.description">
          Описание: {{ rate.description }}
        </span>
        <span class="rate-item__info" v-if="rate.reviews_count">{{ rate.reviews_count }} отзывов</span>
        <span class="rate-item__info" v-if="rate.department">
          Кафедра: <router-link :to="rate.department.link">{{ rate.department.title }}</router-link>
        </span>
        <span class="rate-item__info" v-if="rate.faculty">
          Факультет: <router-link :to="rate.faculty.link">{{ rate.faculty.title }}</router-link>
        </span>
        <span class="rate-item__info" v-if="rate.disciplines">
          Дисциплины: <router-link to="#" v-for="(discipline, index) in rate.disciplines" :key="index">{{ discipline.name + (index+1 !== rate.disciplines.length) ? "," : "" }}</router-link>
        </span>
        <span class="rate-item__info" v-if="rate.students_count">Количество студентов: {{ rate.students_count }}</span>
        <span class="rate-item__info" v-if="rate.professors_count">Количество преподавателей: {{ rate.professors_count }}</span>
      </div>
    </div>
    <CircleButton additionalClasses="no-border rate-item-button" descriptor="primary" :to="rate.button.link" :text="rate.button.title" v-if="rate.link && isAuthenticated" />
  </div>
</template>
<style scoped>
  .rate-item--wrapper{
    display: flex;
    margin-bottom: 10px;
  }
  .rate-item{
    flex: 1;
    background: var(--grey-bg);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid var(--border-opaque);
    box-shadow: 0 0 0 #fff;
    transition: background 0.2s, box-shadow 0.2s;
  }
  .rate-item:hover{
    background: #fff;
    box-shadow: var(--wide-shadow);
  }
  .rate-item-button{
    display: flex;
    align-items: center;
    margin-left: 15px;
    text-align: center;
    flex: 0 0 160px;
    font-size: 17px;
  }
  .rate-item__header{
    display: flex;
    margin-bottom: 5px;
    align-items: flex-start;
  }
  .rate-item__title{
    flex: 1;
    font-size: 23px;
  }
  .rate-item__info{
    display: inline-block;
    margin-right: 25px;
    font-size: 14px;
    opacity: .8;
    line-height: 1.5;
  }
  .rate-item__rating-wrapper{
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .rate-item__rating{
    padding: 5px 0;
  }
  .stars{
    width: 95px;
    margin-right: 10px;
    mask: url(../assets/images/rating.png) top left / cover;
  }
</style>
<script type="text/javascript">
  import CircleButton from './buttons/CircleButton.vue'
  import { mapGetters } from 'vuex'

  export default {
    props: ["rate"],
    components: {
      CircleButton
    },
    computed: {
      ...mapGetters([ 'isAuthenticated' ])
    },
    methods: {
      rateToGradient(rate){
        return `background: linear-gradient(to right, #FFC107 ${(rate/5)*100}%, #E4E4E4 0);`
      },
    }
  }
</script>
