import api from '@/api'
import axios from 'axios'

export default {
  getRating({ commit }, { id, code }){
    let url = `/review/read/rating/other/${id}/${code}`
    if(code == "professor"){
      url = `/review/read/rating/professor/${id}`
    }
    api.get(url)
      .then(response => {
        if(response.data.data.overallScore){
          commit('setRating', response.data.data.overallScore)
        }
      })
      .catch(error => {
        console.warn('...')
      })
  },
  login({ commit }, { email, password }){
    commit('clearLoginResponse')
    api.post(`/users/auth/${email}/${password}`)
      .then(response => {
        if(response.data.response !== "not_authorised"){
          response.data.password = "filtered"
          localStorage.removeItem('register_token')
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
    localStorage.removeItem('register_token')
    location.reload()
  },
  register({ commit }, payload){
    let data = JSON.stringify(payload)
    let headers = { headers: {
      "Content-type": "application/json"
    }}
    api.post(`/users/auth/register`, data, headers)
      .then(response => {
        if(response.data.id){
          localStorage.setItem('register_token', JSON.stringify(response.data))
          commit('setLoginResponse', { message: "Вы успешно зарегистрированы, и вам на почту отправлена ссылка с кодом подтверждения." })
        }else{
          commit('setLoginResponse', { message: "Произошла ошибка" })
        }
      })
      .catch(error => {
        console.log(error)
        commit('setLoginResponse', { message: "Электронная почта зарегистрирована" })
      })
  },
  confirm({ commit, dispatch }, { idUser, idCode }){
    api.get(`/users/user/confirm/${idUser}/${idCode}`)
      .then(response => {
        if(response.data.status == "success"){
          api.get(`/users/read/${idUser}`)
            .then(response => {
              dispatch('login', { email: response.data.email, password: response.data.password })
            })
        }else{
          commit('setLoginResponse', { message: "Не правильный код подтверждения" })
        }
      })
  },
  authRedirect(context, { vm }){
    if(vm.$store.getters.isAuthenticated){
      vm.$router.push('/')
    }
  },

  search({ commit, state }, { query }){
    let result = []
    query = query.toLowerCase()
    result = [...result, ...(state.universities.body.filter(specialty => specialty.name.toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.name, id: el.id, type: 'university' })))]
    result = [...result, ...(state.specialities.body.filter(specialty => specialty.name.toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.name, id: el.id, type: 'speciality' })))]
    result = [...result, ...(state.departments.body.filter(specialty => specialty.name.toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.name, id: el.id, type: 'department' })))]
    result = [...result, ...(state.disciplines.body.filter(specialty => specialty.name.toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.name, id: el.id, type: 'discipline' })))]
    result = [...result, ...(state.professors.body.filter(specialty => (specialty.surname + " " + specialty.firstname).toLowerCase().indexOf(query) !== -1).map(el => ({ title: el.surname + " " + el.firstname, id: el.id, type: 'professor' })))]
    commit('setSearchResult', { error: false, body: result })
  },

  addComment({ commit, state }, query){
    let data = JSON.stringify(query)
    let headers = { headers: {
      "Content-type": "application/json"
    }}
    api.post(`/review/post/comment`, data, headers)
      .then(response => {
        commit('setCommentResponse', "Published")
        location.reload()
      })
      .catch(error => {
        location.reload()
        console.warn("Error")
      })
  },
  searchReviewPage({ commit, state }, { id }){
    function search(){
      let result = []
      result = [...result, ...(state.specialities.body.filter(specialty => specialty.id == id))]
      result = [...result, ...(state.departments.body.filter(specialty => specialty.id == id))]
      result = [...result, ...(state.disciplines.body.filter(specialty => specialty.id == id))]
      result = [...result, ...(state.professors.body.filter(specialty => specialty.id == id))]
      result = [...result, ...(state.universities.body.filter(specialty => specialty.id == id))]
      commit('setReviewPage', result[0])
    }
    setTimeout(search, 1000)
  },
  getNotifications({ commit, state }, { userId }){
    api.get(`/notification/read/all/iterable/${userId}`)
      .then(response => {
        commit('setNotifications', response.data.data)
      })
  },
  getCodeReviews({ commit, state }, { id, code }){
    api.get(`/review/read/custom/${id}/${code}`)
      .then(response => {
        commit('setCodeReviews', response.data.data)
      })
      .catch(error => {
        console.warn("Ошибка подключения")
      })
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
  getUniversities({ commit }){
    api.get(`/university/read/all/iterable`)
      .then(response => {
        commit('setUniversities', { error: false, body: response.data.data })
      })
      .catch(error => {
        console.warn('Ошибка подключения')
        commit('setUniversities', { error: true })
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
