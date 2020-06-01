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
      <br>
      <v-select v-model="selected_speciality" name="speciality" :options="specialities" />
      <br>
      <v-select v-model="selected_course" name="year" :options="courses" />
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
        selected_department: { label: "Кафедра", value: null},
        selected_speciality: { label: "Специальность", value: null},
        selected_course: { label: "1 Курс", value: 1 },
        email: '',
        password: '',
        name: ''
      }
    },
    beforeCreate(){
      this.$store.dispatch('getDepartments')
      this.$store.dispatch('getSpecialities')
    },
    computed: {
      courses(){
        return [
          { label: "1 Курс", value: 1 },
          { label: "2 Курс", value: 2 },
          { label: "3 Курс", value: 3 },
          { label: "4 Курс", value: 4 }
        ]
      },
      departments(){
        return this.$store.getters.getSelectDepartments
      },
      specialities(){
        return this.$store.getters.getSelectSpecialities
      },
      loginResponse(){ return this.$store.state.loginResponse }
    },
    methods: {
      register(){
        this.$store.dispatch('register',
          {
            departmentId: this.selected_department.value,
            email: this.email,
            name: this.name,
            password: this.password,
            specialityId: this.selected_speciality.value,
            year: this.selected_course.value
          }
        )
      }
    }
  }
</script>
