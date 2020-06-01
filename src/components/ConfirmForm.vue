<template>
  <div class="form--wrapper">
    <form class="form" v-on:submit.prevent="confirm">
      <div class="form-response" v-if="loginResponse">
        <span>{{ loginResponse }}</span>
      </div>
      <input class="form__field" type="text" v-model="idUser" placeholder="ID">
      <input class="form__field" type="text" v-model="idCode" placeholder="Код подтверждения">
      <input class="form__button button" type="submit" value="Подтвердить аккаунт">
    </form>
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
        idUser: this.$route.params.id,
        idCode: this.$route.params.code
      }
    },
    computed: {
      loginResponse(){ return this.$store.state.loginResponse },
    },
    mounted(){
      this.isVerified()
    },
    methods: {
      confirm(){
        this.$store.dispatch('confirm', { idUser: this.idUser, idCode: this.idCode })
      },
      isVerified(){
        if(localStorage.access_token && JSON.parse(localStorage.access_token).user){
          this.$router.push('/')
        }
      }
    }
  }
</script>
