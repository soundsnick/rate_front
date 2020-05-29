import api from '@/api'
import axios from 'axios'

export default {
  login({ commit }, { email, password }){
    commit('clearLoginResponse')
    api.post(`/users/auth/${email}/${password}`)
      .then(response => {
        if(response.data.response !== "not_authorised"){
          response.data.password = "filtered"
          localStorage.setItem('access_token', JSON.stringify(response.data))
          location.reload()
        }else{
          commit('setLoginResponse', { message: "Неправильный email или пароль" })
        }
      })
      .catch(error => {
        commit('setLoginResponse', { message: "Проверьте подключение к интернету" });
      });
  },
  logout(context){
    localStorage.removeItem('access_token')
    location.reload()
  },
  register({ commit }, payload){
    api.post(`/users/auth/register`, { user: payload })
      .then(response => {
        if(response.data.id){
          response.data.password = "filtered"
          localStorage.setItem('access_token', JSON.stringify(response.data))
          location.reload()
        }else{
          commit('setLoginResponse', { message: "Ошибка регистрации. Проверьте правильность введенных данных или попробуйте позже" })
        }
      })
      .catch(error => {
        console.log(error)
        commit('setLoginResponse', { message: "Ошибка регистрации. Проверьте правильность введенных данных или попробуйте позже" })
      })
  },
  authRedirect(context, { vm }){
    if(vm.$store.getters.isAuthenticated){
      vm.$router.push('/')
    }
  },

  search({ commit, state }, { query }){
    let result = []
    result = [...result, ...(state.specialities.body.filter(specialty => specialty.name.toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.name, id: el.id, type: 'speciality' })))]
    result = [...result, ...(state.departments.body.filter(specialty => specialty.name.toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.name, id: el.id, type: 'department' })))]
    result = [...result, ...(state.disciplines.body.filter(specialty => specialty.name.toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.name, id: el.id, type: 'discipline' })))]
    result = [...result, ...(state.professors.body.filter(specialty => (specialty.surname + " " + specialty.firstname).toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.surname + " " + el.firstname, id: el.id, type: 'professor' })))]
    commit('setSearchResult', { error: false, body: result })
  },

  getDepartments({ commit }){
    api.get(`/department/read/all/iterable`)
      .then(response => {
        commit('setDepartments', { error: false, body: response.data.data })
      })
      .catch(error => {
        console.warn('Ошибка подключения')
        commit('setDepartments', { error: true })
      })
  },
  getFaculties({ commit }){
    api.get(`/faculty/read/all/iterable`)
      .then(response => {
        commit('setFaculties', { error: false, body: response.data.data })
      })
      .catch(error => {
        console.warn('Ошибка подключения')
        commit('setFaculties', { error: true })
      })
  },
  getSpecialities({ commit }){
    api.get(`/speciality/read/all/iterable`)
      .then(response => {
        commit('setSpecialities', { error: false, body: response.data.data })
      })
      .catch(error => {
        console.warn('Ошибка подключения')
        commit('setSpecialities', { error: true })
      })
  },
  getProfessors({ commit }){
    api.get(`/professor/read/all/iterable`)
      .then(response => {
        commit('setProfessors', { error: false, body: response.data.data })
      })
      .catch(error => {
        console.warn('Ошибка подключения')
        commit('setProfessors', { error: true })
      })
  },
  getDisciplines({ commit }){
    api.get(`/discipline/read/all/iterable`)
      .then(response => {
        commit('setDisciplines', { error: false, body: response.data.data })
      })
      .catch(error => {
        console.warn('Ошибка подключения')
        commit('setDisciplines', { error: true })
      })
  },
  getProfessorDisciplines({ commit }){
    api.get(`/professorDiscipline/read/all/iterable`)
      .then(response => {
        commit('setProfessorDisciplines', { error: false, body: response.data.data })
      })
      .catch(error => {
        console.warn('Ошибка подключения')
        commit('setProfessorDisciplines', { error: true })
      })
  },

}
