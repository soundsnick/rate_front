import api from '@/api'

const getDisciplinesByProfessorId = ({ state, professorId }) => {
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

export {
    getDisciplinesByProfessorId
}