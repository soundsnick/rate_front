<template>
  <div class="form--wrapper">
    <form class="form">
      <input class="form__field" type="text" name="email" placeholder="Email">
      <input class="form__field" type="password" name="password" placeholder="Пароль">
      <select class="form__field" name="department">
        <option value="null">Кафедра</option>
        <option value="1">ИС</option>
        <option value="2">ВТИПО</option>
        <option value="3">МКМ</option>
      </select>
      <input class="form__button button" type="submit" value="Регистрация">
    </form>
    <div class="form__caption-block">
      <span class="form__caption">Регистрация предназначена только для студентов.</span>
      <router-link class="form__link" to="/login">Уже есть аккаунт?</router-link>
    </div>
  </div>
</template>
