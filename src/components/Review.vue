<template>
  <div class="review">
    <header class="review__header">
      <div class="review__square" :style="'background-color:' + indexToColor(index)"></div>
      <span class="review__date">Дата: {{ review.date }}</span>
    </header>
    <div class="reviews-levels">
      <span class="reviews__level" v-for="level in review.levels">{{ `${level.title}: ${level.rate}/5` }}</span>
    </div>
    <div class="review__text">
      <b>Отзыв:</b> {{ review.text }}
    </div>
    <div class="reviews-tags--wrapper" v-if="review.tags">
      <div class="reviews-tags popup-tags">
        <div class="popup__tag" v-for="tag in review.tags">{{ tag.title }}</div>
      </div>
    </div>
    <div class="reviews-like" v-if="review.likes">
      <button type="button" class="reviews__like-button reviews__like">+{{ review.likes }}</button>
      <button type="button" class="reviews__like-button reviews__dislike">-{{ review.dislikes }}</button>
    </div>
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
</style>
<script type="text/javascript">
  export default {
    props: ['review', 'index'],
    methods: {
      indexToColor(index){
        let colors = ['#4CAF50', '#F44336', 'grey']
        return colors[index%colors.length]
      }
    }
  }
</script>
