<template>
  <div class="search-wrapper">
    <form class="search-form" v-on:submit.prevent="search">
      <input class="search__field" type="text" v-debounce:200ms="search" v-model="query" placeholder="Кафедра, Специальность, Преподаватель, Дисциплина">
      <CircleButton additionalClasses="no-border search__button" :descriptor="buttonStyle" ifType="submit">
        <font-awesome-icon icon="search" />
      </CircleButton>
    </form>
    <div class="search-response" v-if="searchResult">
      <div class="search-status" v-if="searchResult.error">
        <span>Проблема с интернетом</span>
      </div>
      <div class="search-items-list">
        <div class="search__item" v-for="item in searchResult.body" :key="item.id">
          <span class="search__item-title">{{ item.title }}</span>
          <p class="search__item-body">{{ item.body }}</p>
        </div>
      </div>
      <div class="search-items-empty" v-if="searchResult.body.length == 0">
        <span><font-awesome-icon icon="search" style="margin-right: 10px;" /> Поиск не дал результатов</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .search__item-body{
    margin: 0;
    margin-top: 5px;
  }
  .search-form{
    display: flex;
  }
  .search__button{
    width: auto;
    padding: 10px 20px;
    margin-left: 10px;
  }
  .search__field{
    flex: 1;
    font-weight: 300;
    letter-spacing: inherit;
    border-radius: 8px;
    border: 1px solid transparent;
    font-family: inherit;
    font-size: 16px;
    background-color: #f9f9f9;
    padding: 15px 20px;
    outline: none;
    box-shadow: var(--wide-shadow);
    transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .search__field:focus{
    background: #fff;
    border-color: var(--primary-color);
    box-shadow: none;
  }
  .search-response{
    background: #fff;
    padding: 10px 30px;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .search__item{
    text-align: left;
    border-bottom: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 1px 0 #fff;
    padding: 20px 0;
  }
  .search__item:last-child{
    border-bottom: none;
    box-shadow: none;
  }
  .search__item-title{
    font-weight: 500;
  }
</style>
<script type="text/javascript">
  import { debounce } from 'vue-debounce'
  import CircleButton from './buttons/CircleButton.vue'

  export default {
    data(){
      return {
        query: ""
      }
    },
    props: ['buttonStyle'],
    components: {
      CircleButton
    },
    computed: {
      searchResult(){
        return this.$store.state.searchResult
      }
    },
    methods: {
      search(){
        if(this.query.length > 3)
          this.$store.dispatch('search', { query: this.query })
        else{
          this.$store.commit('setSearchResult', null)
        }
      }
    }
  }
</script>
