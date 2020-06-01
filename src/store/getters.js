import api from '@/api'
import { getDisciplinesByProfessorId, formatTab } from '@/helpers/getters.js'

export default {
  isAuthenticated(){
    return localStorage.access_token
  },

  getTabDepartments(state){
    if(state.faculties.body){
      let getFacultyById = (id) => state.faculties.body.filter(faculty => faculty.id === id )[0].facultyName
      return ((state.departments.body) ? state.departments.body.map(department => {
        return { title: department.name, link: `/reviews/department/${department.id}`, faculty: { title: getFacultyById(department.facultyId), link: `/reviews/faculty/${department.facultyId}` }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }) : [])
    }
  },
  getSelectDepartments(state){
    return state.departments.body ? state.departments.body.map(department => { return { label: department.name, value: department.id } }) : []
  },
  getSelectSpecialities(state){
    return state.specialities.body ? state.specialities.body.map(department => { return { label: department.name, value: department.id } }) : []
  },
  getTabSpecialities(state){
    if(state.departments.body){
      let getDepartmentById = (id) => {
        let filtered = state.departments.body.filter(department => department.id === id)
        if(filtered.length > 0){
          return filtered[0].name
        }
        return false
      }
      return ((state.specialities.body) ? state.specialities.body.map(speciality => {
        let body = { title: speciality.name, link: `/reviews/speciality/${speciality.id}`, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
        let depart = getDepartmentById(speciality.departmentId)
        if(depart)
          body['department'] = { title: depart, link: `/reviews/department/${speciality.departmentId}` }
        return body
      }) : [])
    }
  },
  getTabProfessors(state){
    let getDisciplinesById = (id) => state.disciplines.body.filter(discipline => discipline.id === id )[0].name
    return ((state.professors.body) ? state.professors.body.map(professor => {
      return { title: `${professor.firstname} ${professor.surname}`, link: `/reviews/professor/${professor.id}`, reviews_count: 12, rate: 3.5, degree: professor.degree, disciplines: getDisciplinesByProfessorId({ state: state, professorId: professor.id }), button: { title: "Добавить отзыв", link: "#"} }
    }) : [])
  },
  getTabDisciplines(state){
    let getDepartmentById = (id) => {
      try {
        let filtered = state.departments.body.filter(department => department.id === id )
      } catch (e) {
        console.log(e, id)
      } finally {

      }
    }
    return ((state.disciplines.body) ? state.disciplines.body.map(discipline => {
      return { title: discipline.name, link: `/reviews/discipline/${discipline.id}`, department: { title: getDepartmentById(discipline.departmentId), link: `/reviews/department/${discipline.departmentId}` }, reviews_count: 12, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
    }) : [])
  },

  getTopSpecialities(state){
    if(state.departments.body){
      let getDepartmentById = (id) => {
        let filtered = state.departments.body.filter(department => department.id === id)
        if(filtered.length > 0){
          return filtered[0].name
        }
        return false
      }
      return ((state.specialities.body) ? state.specialities.body.map(speciality => {
        return { title: speciality.name, link: `/reviews/speciality/${speciality.id}`, department: { title: getDepartmentById(speciality.departmentId), link: `/reviews/department/${speciality.departmentId}` }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }).slice(0, 5) : [])
    }
  },
  getTopDepartments(state){
    if(state.faculties.body){
      let getFacultyById = (id) => state.faculties.body.filter(faculty => faculty.id === id )[0].facultyName
      return ((state.departments.body) ? state.departments.body.map(department => {
        return { title: department.name, link: `/reviews/department/${department.id}`, faculty: { title: getFacultyById(department.facultyId), link: `/reviews/faculty/${department.facultyId}` }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }).slice(0, 5) : [])
    }
  },
  getTopProfessors(state){
    let getDisciplinesById = (id) => state.disciplines.body.filter(discipline => discipline.id === id )[0].name
    return ((state.professors.body) ? state.professors.body.map(professor => {
      return { id: professor.id, title: `${professor.firstname} ${professor.surname}`, link: `/reviews/professor/${professor.id}`, reviews_count: 12, rate: 3.5, degree: professor.degree, button: { title: "Добавить отзыв", link: "#"} }
    }).slice(0, 5) : [])
  }
}
