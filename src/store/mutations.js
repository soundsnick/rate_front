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
  }
}
