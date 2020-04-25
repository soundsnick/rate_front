import api from '@/api'
import axios from 'axios'

export default {
  login({ commit }, { email, password }){
    commit('clearLoginResponse')
    api.post(`/users/auth/${email}/${password}`)
      .then((response) => {
        if(response.data){
          response.data.password = "filtered"
          localStorage.setItem('access_token', JSON.stringify(response.data))
          location.reload()
        }else{
          commit('setLoginResponse', { message: "Неправильный email или пароль" })
        }
      })
      .catch((error) => {
        commit('setLoginResponse', { message: "Проверьте подключение к интернету" });
      });
  },
  logout(context){
    localStorage.removeItem('access_token')
    location.reload()
  },
  authRedirect(context, { vm }){
    if(vm.$store.getters.isAuthenticated){
      vm.$router.push('/')
    }
  },
  search({ commit }, { query }){
    axios.get(`http://jsonplaceholder.typicode.com/posts?q=${query}`)
      .then((response) => {
        commit('setSearchResult', { error: false, body: response.data.slice(0,5) })
      })
      .catch((error) => {
        console.warn('Ошибка подключения')
        commit('setSearchResult', { error: true })
      });
  }
}
