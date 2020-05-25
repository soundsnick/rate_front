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
        return { title: department.name, link: "#", faculty: { title: getFacultyById(department.facultyId), link: "#" }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }) : [])
    }
  },
  getSelectDepartments(state){
    return state.departments.body ? state.departments.body.map(department => { return { label: department.name, value: department.id } }) : []
  },
  getTabSpecialities(state){
    if(state.departments.body){
      let getDepartmentById = (id) => state.departments.body.filter(department => department.id === id )[0].name
      return ((state.specialities.body) ? state.specialities.body.map(speciality => {
        return { title: speciality.name, link: "#", department: { title: getDepartmentById(speciality.departmentId), link: "#" }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }) : [])
    }
  },
  getTabProfessors(state){
    let getDisciplinesById = (id) => state.disciplines.body.filter(discipline => discipline.id === id )[0].name
    return ((state.professors.body) ? state.professors.body.map(professor => {
      return { title: `${professor.firstname} ${professor.surname}`, link: "#", reviews_count: 12, rate: 3.5, degree: professor.degree, disciplines: getDisciplinesByProfessorId({ state: state, professorId: professor.id }), button: { title: "Добавить отзыв", link: "#"} }
    }) : [])
  },
  getTabDisciplines(state){
    let getDepartmentById = (id) => state.departments.body.filter(department => department.id === id )[0].name
    return ((state.disciplines.body) ? state.disciplines.body.map(discipline => {
      return { title: discipline.name, link: "#", department: { title: getDepartmentById(discipline.departmentId), link: "#" }, reviews_count: 12, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
    }) : [])
  },

  getTopSpecialities(state){
    if(state.departments.body){
      let getDepartmentById = (id) => state.departments.body.filter(department => department.id === id )[0].name
      return ((state.specialities.body) ? state.specialities.body.map(speciality => {
        return { title: speciality.name, link: "#", department: { title: getDepartmentById(speciality.departmentId), link: "#" }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }).slice(0, 5) : [])
    }
  },
  getTopDepartments(state){
    if(state.faculties.body){
      let getFacultyById = (id) => state.faculties.body.filter(faculty => faculty.id === id )[0].facultyName
      return ((state.departments.body) ? state.departments.body.map(department => {
        return { title: department.name, link: "#", faculty: { title: getFacultyById(department.facultyId), link: "#" }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }).slice(0, 5) : [])
    }
  },
  getTopProfessors(state){
    let getDisciplinesById = (id) => state.disciplines.body.filter(discipline => discipline.id === id )[0].name
    return ((state.professors.body) ? state.professors.body.map(professor => {
      return { title: `${professor.firstname} ${professor.surname}`, link: "#", reviews_count: 12, rate: 3.5, degree: professor.degree, button: { title: "Добавить отзыв", link: "#"} }
    }).slice(0, 5) : [])
  },
}
