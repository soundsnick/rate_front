import api from '@/api'

let getDisciplinesByProfessorId = ({ state, professorId }) => {
  if(state.disciplines.body && state.professorDisciplines.body){
    let getDisciplinesById = (id) => state.disciplines.body.filter(discipline => discipline.id === id )[0].name
    let getProfessorDisciplinesById = (id) => state.professorDisciplines.body.filter(professorDiscipline => professorDiscipline.id === id )[0].disciplineId
    api.get(`/professorDiscipline/read/byprofessorid/${professorId}`)
      .then(response => {
        return response.data.data.map(discipline => getDisciplinesById(getProfessorDisciplinesById(discipline.id)) )
      })
      .catch(error => {
        console.warn(error)
      })
  }
  else{
    return []
  }
}

export default {
  isAuthenticated(){
    return localStorage.access_token
  },



  getTabDepartments(state){
    if(state.faculties.body){
      let getFacultyById = (id) => state.faculties.body.filter(faculty => faculty.id === id )[0].facultyName
      return ((state.departments.body != undefined) ? state.departments.body.map(department => {
        return { title: department.name, link: "#", faculty: { title: getFacultyById(department.facultyId), link: "#" }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }) : [])
    }
  },
  getTabSpecialities(state){
    if(state.departments.body){
      let getDepartmentById = (id) => state.departments.body.filter(department => department.id === id )[0].name
      return ((state.specialities.body != undefined) ? state.specialities.body.map(speciality => {
        return { title: speciality.name, link: "#", department: { title: getDepartmentById(speciality.departmentId), link: "#" }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }) : [])
    }
  },
  getTabProfessors(state){
    let getDisciplinesById = (id) => state.disciplines.body.filter(discipline => discipline.id === id )[0].name
    return ((state.professors.body != undefined) ? state.professors.body.map(professor => {
      console.log(getDisciplinesByProfessorId({ state: state, professorId: professor.id }))
      return { title: `${professor.firstname} ${professor.surname}`, link: "#", reviews_count: 12, rate: 3.5, degree: professor.degree, disciplines: getDisciplinesByProfessorId({ state: state, professorId: professor.id }), button: { title: "Добавить отзыв", link: "#"} }
    }) : [])
  },
  getTabDisciplines(state){
    let getDepartmentById = (id) => state.departments.body.filter(department => department.id === id )[0].name
    return ((state.disciplines.body != undefined) ? state.disciplines.body.map(discipline => {
      return { title: discipline.name, link: "#", department: { title: getDepartmentById(discipline.departmentId), link: "#" }, reviews_count: 12, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
    }) : [])
  },

  getTopSpecialities(state){
    if(state.departments.body){
      let getDepartmentById = (id) => state.departments.body.filter(department => department.id === id )[0].name
      return ((state.specialities.body != undefined) ? state.specialities.body.map(speciality => {
        return { title: speciality.name, link: "#", department: { title: getDepartmentById(speciality.departmentId), link: "#" }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }).slice(0, 5) : [])
    }
  },
  getTopDepartments(state){
    if(state.faculties.body){
      let getFacultyById = (id) => state.faculties.body.filter(faculty => faculty.id === id )[0].facultyName
      return ((state.departments.body != undefined) ? state.departments.body.map(department => {
        return { title: department.name, link: "#", faculty: { title: getFacultyById(department.facultyId), link: "#" }, reviews_count: 12, students_count: 300, professors_count: 50, rate: 3.5, button: { title: "Добавить отзыв", link: "#"} }
      }).slice(0, 5) : [])
    }
  },
  getTopProfessors(state){
    let getDisciplinesById = (id) => state.disciplines.body.filter(discipline => discipline.id === id )[0].name
    return ((state.professors.body != undefined) ? state.professors.body.map(professor => {
      return { title: `${professor.firstname} ${professor.surname}`, link: "#", reviews_count: 12, rate: 3.5, degree: professor.degree, button: { title: "Добавить отзыв", link: "#"} }
    }).slice(0, 5) : [])
  },
}
