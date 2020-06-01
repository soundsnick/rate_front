export default {
  setLocale(state, { locale }){
    state.locale = locale
  },
  setLoginResponse(state, { message }){
    state.loginResponse = message
  },
  clearLoginResponse(state){
    state.loginResponse = null
  },
  setSearchResult(state, payload){
    state.searchResult = payload
  },
  setDepartments(state, payload){
    state.departments = payload
  },
  setUniversities(state, payload){
    state.universities = payload
  },
  setFaculties(state, payload){
    state.faculties = payload
  },
  setSpecialities(state, payload){
    state.specialities = payload
  },
  setProfessors(state, payload){
    state.professors = payload
  },
  setDisciplines(state, payload){
    state.disciplines = payload
  },
  setProfessorDisciplines(state, payload){
    state.professorDisciplines = payload
  },
  setReviewPage(state, payload){
    state.reviewPage = payload
  },
  setCodeReviews(state, payload){
    state.codeReviews = payload
  },
  setNotifications(state, payload){
    state.notifications = payload
  },
  setCommentResponse(state, payload){
    state.commentResponse = payload
  }
}
