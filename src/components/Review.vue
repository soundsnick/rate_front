<template>
  <div class="review">
    <header class="review__header">
      <div class="review__square" :style="'background-color:' + indexToColor(index)"></div>
      <span class="review__date">Дата: {{ review.date }}</span>
    </header>
    <div class="reviews-levels">
      <div class="reviews__level" v-for="level in review.levels">
        <span class="reviews__level-title">{{ level.title }}</span>
        <div class="reviews__level-stars">
          <div class="stars" :style="rateToGradient(level.rate)"></div>
          <span class="reviews__level-rate">{{ level.rate.toFixed(1) }}/5</span>
        </div>
      </div>
    </div>
    <div class="review__text">
      <b>Отзыв:</b> {{ review.text }}
    </div>
    <div class="reviews-tags--wrapper" v-if="review.tags">
      <div class="reviews-tags popup-tags">
        <div class="popup__tag" v-for="tag in review.tags">{{ tag.title }}</div>
      </div>
    </div>

    <!-- <div class="reviews-like" v-if="review.isOwner">
      <button type="button" class="reviews__like-button reviews__dislike" @click="deletePost">Удалить</button>
    </div> -->
  </div>
</template>
<style scoped>
  .review{
    background-color: var(--grey-bg);
    padding: 20px;
    border-radius: 4px;
    border: 1px solid var(--border-opaque);
    margin-bottom: 20px;
  }
  .review__header{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding: 10px 0;
  }
  .review__square{
    height: 25px;
    width: 30px;
    border-radius: 4px;
  }
  .reviews-levels{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  .review__text{
    margin: 15px 0;
    line-height: 1.4;
  }
  .review__text b{
    font-weight: 500;
  }
  .reviews-like{
    margin-top: 10px;
    text-align: right;
  }
  .reviews__like-button{
    margin-left: 5px;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .reviews__like-button:hover{
    background-color: var(--grey-bg);
  }
  .reviews__like{
    color: green;
  }
  .reviews__dislike{
    color: red;
  }
  .reviews__level{
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 16px 4px -14px rgba(0,0,0,.04);
  }
  .review__text{
    background: rgb(219, 233, 255);
    padding: 20px;
    border-radius: 4px;
  }
  .reviews__level-stars{
    display: flex;
    height: 24px;
    align-items: center;
    margin-top: 5px;
  }
  .reviews__level-rate{
    margin-bottom: -4px;
    font-size: 12px;
    color: grey;
    display: block;
  }
  .stars{
    display: block;
    height: 100%;
    width: 95px;
    margin-right: 10px;
    mask: url(../assets/images/rating.png) top left / cover;
  }
</style>
<script type="text/javascript">
  export default {
    props: ['review', 'index'],
    computed: {
      isStudent(){
        return (localStorage.access_token) ? JSON.parse(localStorage.access_token).user : false
      }
    },
    methods: {
      indexToColor(index){
        let colors = ['#4CAF50', '#F44336', 'grey']
        return colors[index%colors.length]
      },
      rateToGradient(rate){
        return `background: linear-gradient(to right, #FFC107 ${(rate/5)*100}%, #E4E4E4 0);`
      }
    }
  }
</script>
