<template>
  <div class="form--wrapper">
    <form class="form">
      <input class="form__field" type="text" name="email" placeholder="Email">
      <input class="form__field" type="password" name="password" placeholder="Пароль">
      <v-select v-model="selected_department" name="department" :options="departments" />
      <input class="form__button button" type="submit" value="Регистрация">
    </form>
    <div class="form__caption-block">
      <span class="form__caption">Регистрация предназначена только для студентов.</span>
      <router-link class="form__link" to="/login">Уже есть аккаунт?</router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        departments: ["ИС", "ВТиПО", "МКМ"],
        selected_department: ["Кафедра"]
      }
    }
  }
</script>
