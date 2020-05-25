<template>
  <div class="form--wrapper">
    <form class="form" @submit.prevent="register">
      <div class="form-response" v-if="loginResponse">
        <span>{{ loginResponse }}</span>
      </div>
      <input class="form__field" type="text" name="email" placeholder="Email" v-model="email">
      <input class="form__field" type="text" name="name" placeholder="Ваше ФИО" v-model="name">
      <input class="form__field" type="password" name="password" placeholder="Пароль" v-model="password">
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
        selected_department: { label: "Кафедра", value: 0},
        email: '',
        password: '',
        name: ''
      }
    },
    beforeCreate(){
      this.$store.dispatch('getDepartments')
    },
    computed: {
      departments(){
        return this.$store.getters.getSelectDepartments
      },
      loginResponse(){ return this.$store.state.loginResponse }
    },
    methods: {
      register(){
        this.$store.dispatch('register',
          JSON.stringify({
            degree: "string",
            departmentId: "string",
            email: this.email,
            group: "string",
            id: "string",
            isVerified: true,
            name: this.name,
            password: this.password,
            specialityId: "string",
            year: 0
          })
        )
      }
    }
  }
</script>
