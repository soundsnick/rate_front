<template>
  <div class="reviews-view">
    <div class="container">
      <Search buttonStyle="primary"/>
      <div class="reviews-body">
        <RateListItem :rate="rate" />
        <SquareButton additionalClasses="review-add-button" descriptor="primary" @click.native="popup()" v-if="isAuthenticated && isStudent">
          {{ $t('review.add') }}
        </SquareButton>
        <div class="reviews-grid">
          <InfoTable v-if="professors && (code == 'department')" :title="$t('home_tables.top.professors')" :items="professors" layout="list" link="#" linkText="Посмотреть всех преподавателей" />
          <div :class="['reviews-levels', (code == 'department').toString()]" v-if="levels.length > 0">
            <span class="reviews__level" v-for="level in levels">{{ `${level.title}: ${level.rate.toFixed(1)}/5` }}</span>
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
    <div :class="['popup--wrapper', popupState.toString()]" v-if="isStudent">
      <button type="button" class="close-button" @click="popupState = !popupState">Close</button>
      <Popup title="Добавить отзыв" textarea="true" :reviewId="reviewPage.reviewId" :levelsHash="levelsHash" :tags="tagsArray" />
    </div>
  </div>
</template>
<style scoped>
  .close-button{
    font-family: inherit;
    font-size: 17px;
    margin-bottom: 10px;
    background: var(--primary-color);
    border: none;
    padding: 10px 30px;
    color: #fff;
    cursor: pointer;
  }
  .popup--wrapper{
    display: none;
    position: fixed;
    padding-top: 100px;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999999;
    background: rgba(0,0,0,.5);
    overflow-y: auto;
  }
  .popup--wrapper.true{
    display: block;
  }
  .review-add-button{
    margin-bottom: 20px;
    padding: 20px;
    text-align: center;
  }
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
  .reviews-levels.false {
    margin-left: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    padding: 20px;
    border: 1px solid var(--border-opaque);
    border-radius: 8px;
    margin-bottom: 30px;
    grid-gap: 10px 30px;
    background: var(--grey-bg);
  }
  .reviews__level{
    display: block;
    line-height: 1.3;
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
  import SquareButton from '@/components/buttons/SquareButton'
  import Popup from '@/components/Popup.vue'

  export default {
    data(){
      return {
        id: this.$route.params.id,
        code: this.$route.params.code,
        popupState: false
      }
    },
    components: {
      Search,
      RateListItem,
      InfoTable,
      Review,
      SquareButton,
      Popup
    },
    beforeMount(){
      this.$store.dispatch('getUniversities')
      this.$store.dispatch('getFaculties')
      this.$store.dispatch('getDepartments')
      this.$store.dispatch('getSpecialities')
      this.$store.dispatch('getProfessors')
      this.$store.dispatch('getDisciplines')
    },
    mounted(){
      this.$store.dispatch('searchReviewPage', { id: this.id })
      this.$store.dispatch('getCodeReviews', { id: this.id, code: this.code })
    },
    computed: {
      isStudent(){
        return (localStorage.access_token) ? JSON.parse(localStorage.access_token).user : false
      },
      tagsArray(){
        return ["Интересная студенческая жизнь","Веселые практические задания", "Отличная работа со студентами",
        "Обратная связь", "Объективность", "Прислушиваются к мнению студентов", "Поддержка", "Перспективы",
        "Возможности", "Актуальность"]
      },
      isAuthenticated(){
        return this.$store.getters.isAuthenticated
      },
      reviewPage(){
        return this.$store.state.reviewPage
      },
      codeReviews(){
        return this.$store.state.codeReviews
      },
      rate(){
        if(this.reviewPage && this.reviewPage.id){
          let review = this.reviewPage
          let obj = { title: review.name || `${review.surname} ${review.firstname}`, description: review.description, rate: 3.5}
          if(review.rate)
            obj['rate'] = review.rate
          if(review.reviews_count)
            obj['reviews_count'] = review.reviews_count
          // obj = { ...obj, ...({ link: "#", students_count: 300, professors_count: 50, button: { title: "Добавить отзыв", link: "#"})}
          return obj
        }else return {}
      },
      levels(){
        if(this.codeReviews.criteriaList){
          return this.codeReviews.criteriaList.map(el => {
            let criteria = {
              title: el.name
            }
            criteria['rate'] = this.codeReviews.commentCustomList.map(com => {
              let critList = com.criteriaCommentList.filter(cri => cri.criteriaId == el.id)
              return (critList.length > 0) ? critList[0].score : 0
            })
            criteria.rate = (criteria.rate.reduce(function (sum, value) {
                return sum + value;
            }, 0) / criteria.rate.length);
            return criteria
          })
        }else return []
      },
      professors(){
        return [
          { title: 'Круглова А.Б', subtitle: '12 отзывов', rate: '5.0' },
          { title: 'Титов П.С.', subtitle: '12 отзывов', rate: '5.0' },
          { title: 'Гайсин Б.С.', subtitle: '12 отзывов', rate: '5.0' },
        ]
      },
      tags(){
        if(this.codeReviews.commentCustomList && this.codeReviews.commentCustomList.length > 0){
          return [...new Set(this.codeReviews.commentCustomList.reduce((acc, el) => {
            return (el.comment.tags) ? [...acc, ...el.comment.tags.split(',')] : acc
          }, []))].map((el, index) => ({ title: el, key: index }))
        }else return []
      },
      levelsHash(){
        if(this.codeReviews.criteriaList){
          return this.codeReviews.criteriaList.reduce((acc, el) => {
            return {
              ...acc,
              [el.id]: el.name
            }
          }, {})
        }else return {}
      },
      reviews(){
        if(this.codeReviews.commentCustomList && this.codeReviews.commentCustomList.length > 0){
          return this.codeReviews.commentCustomList.map(el => {
            let obj = {
              id: el.comment.id,
              date: el.comment.createdDate || "Не задано",
              levels: el.criteriaCommentList.map(fb => {
                return {
                  title: this.levelsHash[fb.criteriaId] || "Неизвестный критерий",
                  rate: fb.score
                }
              }),
              text: el.comment.text,
            }
            if(el.comment.tags){
              obj.tags = el.comment.tags.split(',').map((fb, index) => ({ title: fb, key: index}))
            }
            return obj
          })
        }else return []
      }

    },
    methods: {
      popup(){
        this.popupState = !this.popupState
      },
    }
  }
</script>
