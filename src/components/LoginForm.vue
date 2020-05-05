<template>
  <div class="form--wrapper">
    <form class="form" v-on:submit.prevent="login">
      <div class="form-response" v-if="loginResponse">
        <span>{{ loginResponse }}</span>
      </div>
      <input class="form__field" type="text" @change="email_validate" v-model="email" placeholder="Email">
      <input class="form__field" type="password" v-model="password" placeholder="Пароль">
      <input class="form__button button" type="submit" value="Вход">
      <router-link class="form__link" to="/register">Зарегистрироваться</router-link>
    </form>
    <div class="form__caption-block">
      <span class="form__caption">Регистрация предназначена только для студентов.</span>
    </div>
  </div>
</template>
<style>
  .form__field{
    display: block;
    width: 100%;
    border: 1px solid rgba(0,0,0,.25);
    padding: 10px;
    font-size: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    background: #fff;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .form__field:focus{
    border-color: #6eb5f3;
    box-shadow: 0 0 0 0.2rem rgba(17,119,209,.25)
  }
  select.form__field{
    color: rgba(0,0,0,.6);
    padding-left: 6px;
  }
  .form--wrapper{
    display: flex;
  }
  .form__caption-block{
    flex: 1;
    padding: 40px;
  }
  .form{
    flex: 0 0 45%;
    text-align: left;
  }
  .form__button{
    margin-top: 20px;
    outline: none;
  }
  .form__link{
    color: #0066CC;
    font-size: 14px;
    display: inline-block;
    margin-top: 15px;
  }
  .form__caption{
    line-height: 1.5;
    display: block;
    font-size: 16px;
  }
  .form-response{
    padding: 10px 0;
    font-size: 14px;
    line-height: 1.3;
    color: #F44336;
  }
</style>

<script type="text/javascript">
  export default{
    data(){
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      loginResponse(){ return this.$store.state.loginResponse }
    },
    methods: {
      email_validate(){
        // if(this.email.indexOf("@"))
        //   this.email = this.email.split("@")[0] + "@iitu.kz"
        // else
        //   this.email = this.email + "@iitu.kz"
      },
      login(){
        this.$store.dispatch('login', { email: this.email, password: this.password })
      }
    }
  }
</script>
