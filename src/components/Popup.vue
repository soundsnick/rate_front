<template>
  <div class="popup">
    <span class="popup__title">{{ title }}</span>
    <div class="popup-level" v-for="(rate, index) in rates" :key="index">
      <span class="popup-level__title">{{ rate.title }}</span>
      <div class="stars popup-star" :style="rateToGradient(rate.rate)" v-if="rate.rate"></div>
      <div class="popup__bools" v-if="rate.bools">
        <span class="popup__bool">{{ rate.bools[0] }}</span>
        <span class="popup__bool">{{ rate.bools[1] }}</span>
      </div>
    </div>
    <div class="popup__dropdowns">
      <v-select name="dropdown" :options="dropdown.option" v-for="dropdown in dropdowns" />
    </div>
    <span class="popup__subtitle">Выберите 3 тега</span>
    <div class="popup-tags">
      <div class="popup__tag" v-for="tag in tags" :key="tag.key">
        {{ tag.title }}
      </div>
    </div>
    <div class="popup-textarea--wrapper" v-if="textarea">
      <span class="popup__subtitle">Более подробно:</span>
      <textarea class="popup-textarea"></textarea>
    </div>
    <div class="popup__button--wrapper">
      <CircleButton text="Добавить отзыв" to="#" additionalClasses="no-border rate-item-button popup__button" descriptor="primary" />
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
    props: ['title', 'rates', 'tags', 'textarea', 'dropdowns'],
    components: {
      CircleButton
    },
    methods: {
      rateToGradient(rate){
        return `background: linear-gradient(to right, #FFC107 ${(rate/5)*100}%, #E4E4E4 0);`
      },
    }
  }
</script>
