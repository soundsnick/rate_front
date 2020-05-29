<template>
  <div class="search-wrapper">
    <form class="search-form" v-on:submit.prevent="search">
      <input class="search__field" type="text" v-debounce:200ms="search" v-model="query" v-bind:placeholder="$t('search.placeholder')">
      <CircleButton additionalClasses="no-border search__button" :descriptor="buttonStyle" ifType="submit">
        <font-awesome-icon icon="search" />
      </CircleButton>
    </form>
    <div class="search-response" v-if="searchResult">
      <div class="search-status" v-if="searchResult.error">
        <span>Проблема с интернетом</span>
      </div>
      <div class="search-items-list">
        <SearchItem :item="item" v-for="item in searchResult.body" :key="item.id" />
      </div>
      <div class="search-items-empty" v-if="searchResult.body.length == 0">
        <span><font-awesome-icon icon="search" style="margin-right: 10px;" /> Поиск не дал результатов</span>
      </div>
    </div>
  </div>
</template>
<style scoped>

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
    border: 1px solid var(--border-opaque);
    box-shadow: var(--wide-shadow);
  }

</style>
<script type="text/javascript">
  import { debounce } from 'vue-debounce'
  import CircleButton from './buttons/CircleButton.vue'
  import SearchItem from './SearchItem.vue'

  export default {
    data(){
      return {
        query: ""
      }
    },
    props: ['buttonStyle'],
    components: {
      CircleButton,
      SearchItem
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
