<template>
  <div class="popup">
    <span class="popup__title">{{ title }}</span>
    <div class="popup-level" v-for="(rate, index) in Object.keys(levelsHash)" :key="index">
      <span class="popup-level__title">{{ levelsHash[rate] }}</span>
      <input type="number" max="5" min="0" :data-id="`criteria${rate}`" value="0" />
    </div>
    <span class="popup__subtitle">Выберите теги</span>

    <v-select :options="tags" v-model="feedback" multiple />
    <div class="popup-textarea--wrapper" v-if="textarea">
      <span class="popup__subtitle" >Текст отзыва:</span>
      <textarea class="popup-textarea" v-model="comment"></textarea>
    </div>
    <div class="popup__button--wrapper">
      <CircleButton additionalClasses="no-border rate-item-button popup__button" descriptor="primary" @click.native="addComment()">
        Добавить отзыв
      </CircleButton>
    </div>
  </div>
</template>
<style scoped>
  .stars{
    width: 87px;
    margin-right: 10px;
    mask: url(../assets/images/rating.png) top left / cover;
  }
  .popup{
    background: #fff;
    text-align: left;
    padding: 50px 30px;
    box-shadow: var(--wide-shadow);
    max-width: 600px;
    margin: auto;
    border: 1px solid var(--border-opaque);
    border-radius: 4px;
  }
  .popup__title{
    display: block;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .popup-level{
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    font-size: 16px;
  }
  .popup__subtitle{
    font-size: 20px;
    margin-top: 25px;
    display: block;
    margin-bottom: 15px;
    font-weight: 500;
  }
  .popup-textarea{
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 100px;
    max-height: 200px;
    padding: 10px;
    font-family: inherit;
    font-size: 16px;
    color: inherit;
    background: var(--grey-bg);
    border: 1px solid var(--border-opaque);
    outline: none;
  }
  .popup__button{
    width: auto;
    display: inline-block;
    margin-top: 10px;
  }
  .popup__button--wrapper{
    text-align: center;
  }
  .popup__bool{
    padding: 0 3px;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
  }
  .popup__dropdowns{
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-gap: 10px;
    margin-top: 15px;
  }
</style>
<script type="text/javascript">
  import CircleButton from './buttons/CircleButton.vue'

  export default {
    data(){
      return {
        feedback: [],
        comment: ""
      }
    },
    props: ['title', 'rates', 'tags', 'textarea', 'dropdowns', 'reviewId', 'levelsHash'],
    components: {
      CircleButton
    },
    methods: {
      rateToGradient(rate){
        return `background: linear-gradient(to right, #FFC107 ${(rate/5)*100}%, #E4E4E4 0);`
      },
      addComment(){
        let feedbacks = this.feedback.join(',')
        let criterias = Object.keys(this.levelsHash).reduce((acc, el) => {
          return {
            ...acc,
            [el]: document.querySelector(`input[data-id='criteria${el}']`).value
          }
        }, {})
        let comment = this.comment
        let query = {
          comment: {
            feedback: feedbacks,
            reviewId: this.reviewId,
            text: comment,
            userId: JSON.parse(localStorage.access_token).user.id
          },
          criteriaCommentList: Object.keys(criterias).map(key => ({ criteriaId: key, score: criterias[key] }))
        }
        this.$store.dispatch('addComment', query)
      }
    }
  }
</script>
