<template>
  <div class="locales">
    <button class="language" id="language" @click="isActive = !isActive">{{ currentLanguageCode | codeToName(languages) }}</button>
    <div class="locale-options" v-if="isActive">
      <div class="locale-option" v-for="language in languages" :key="language.code" @click="changeLanguage(language.code)">
        <span>{{ language.text }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .locales{
    position: relative;
    padding: 0 15px;
  }
  .language{
    font-size: 15px;
    padding: 10px;
    background: transparent;
    font-family: inherit;
    border: none;
    outline: none;
    width: 200px;
    color: inherit;
    cursor: pointer;
  }
  .locale-options{
    position: absolute;
    z-index: 100;
    background: #fff;
    box-shadow: var(--wide-shadow);
    border-radius: 4px;
    border: 1px solid var(--border);
    width: 200px;
    overflow: hidden;
  }
  .locale-option{
    padding: 10px 10px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.15s;
  }
  .locale-option:hover{
    background-color: var(--default-hover)
  }
</style>

<script type="text/javascript">
  export default{
    data(){
      return {
        languages: [
          { text: 'Русский (Ru)', code: 'ru' },
          { text: 'Казахский (Kk)', code: 'kk' },
          { text: 'English (En)', code: 'en' }
        ],
        currentLanguage: localStorage.language,
        isActive: false
      }
    },
    filters: {
      codeToName(code, languages){
        return languages.filter((language) => language.code === code)[0].text
      }
    },
    computed: {
      currentLanguageCode(){
        return this.currentLanguage || 'ru'
      }
    },
    methods: {
      changeLanguage(code){
        localStorage.language = code
        this.isActive = false
        this.currentLanguage = code
      },
      showLanguageBar(){
        return false
      }
    }
  }
</script>
