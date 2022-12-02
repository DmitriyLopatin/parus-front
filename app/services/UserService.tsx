import http from "./http";

const signInUser = (data:any) => {
  return http.post("login", data);
};
const signInUserEDS = (data:any) => {
  return http.post("login/eds", data);
};
const signOut = (data="") => {
  return http.post("logout", data, { headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}});
};
const register = (addUserData:any)=>{
    return http.post('register', addUserData)
}
const registerEDS = (addUserData:any)=>{
    return http.post('register/eds', addUserData)
}
const getInstitutions = ()=>{
    return http.get('institutions', { headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
}
const addInstitutions = (institutionsData:any)=>{
    return http.post('institutions', institutionsData, { headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
}
const getUser = ()=>{
    return http.get(`users`,{headers:{ "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
}



// const getProjects = (page)=>{
//     return http.get(`projects?per_page=4&page=${page}`,{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const getProjects = (page)=>{
//     return http.get(`projects?orderby[id]=desc&per_page=8&page=${page}`,{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const getProjectsPublish = (page)=>{
//     return http.get(`public-projects`)
// }
// const putPublush= (project_id, publish_status)=>{
//     return http.put(`projects\\${project_id}`,publish_status,{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }

// const getProject= (project_id)=>{
//     return http.get(`projects\\${project_id}`,{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const addProjects = async (newProjectData)=>{
//     return await http.post('projects', newProjectData, { headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const getTransmittalLetters = ()=>{
//     return http.get('cover-letters?filter[project][published]=true',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const addTransmittalLetter = (transmittLeterID, transmittalLeterData)=>{
//     return http.put(`cover-letters/${transmittLeterID}`, transmittalLeterData, { headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const getBranchOfLegislation = ()=>{
//     return http.get('branch-of-legislations?per_page=50',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getAuthorityDevelopers = ()=>{
//     return http.get('authority-developers?per_page=300',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getExperts = ()=>{
//     return http.get('users?filter[role][slug]=expert',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const saveRecExpert = (userId)=>{
//     return http.delete(`recomendation-experts/${userId}`,{headers:{ "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const getExpertRecomend = (projectId)=>{
//     return http.post('recomendation-experts', {project_id:projectId}, { headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getCoordinators = ()=>{
//     return http.get('users?filter[role][slug]=coordinator',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getCorrectors = ()=>{
//     return http.get('users?filter[role][slug]=corrector',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getClerks = ()=>{
//     return http.get('users?filter[role][slug]=clerk',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getTranslators = ()=>{
//     return http.get('users?filter[role][slug]=translator',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getProjectStatuses = ()=>{
//     return http.get('project-statuses',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getDocumentTypes = ()=>{
//     return http.get('document-types?per_page=20',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getCatos = ()=>{
//     return http.get('catos',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const putExpert = (data,pageID)=>{
//     return http.put(`projects/${pageID}`,data ,{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`} })
// }
// const getFilteredData = (page,filteredItem)=>{
//     return http.get(`projects?orderby[id]=desc&per_page=8&page=${page}&${filteredItem}`,
//         {headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}}
//         )
// }
// const getFilteredDataPending = (page,filteredItem)=>{
//     return http.get(`projects?orderby[id]=desc&per_page=8&page=${page}&filter[status_id]=2&${filteredItem}`,
//         {headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}}
//         )
// }
// const getFilteredDataAccepted = (page,filteredItem)=>{
//     return http.get(`projects?orderby[id]=desc?per_page=8&page=${page}&filter[status_id]=4&${filteredItem}`,
//         {headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}}
//         )
// }
// const getFilteredDataCompleted = (page,filteredItem)=>{
//     return http.get(`projects?orderby[id]=desc&per_page=8&page=${page}&filter[status_id]=7&${filteredItem}`,
//         {headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}}
//         )
// }
// const getFilteredDataConclusions = (page,filteredItem)=>{
//     return http.get(`conclusions?orderby[id]=desc&per_page=8&page=${page}&${filteredItem}`,
//         {headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}}
//         )
// }
// const getFilteredDataLetters = (filteredItem)=>{
//     return http.get(`cover-letters?${filteredItem}`,
//         {headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}}
//         )
// }
// const addUser = (addUserData)=>{
//     return http.post('users', addUserData,{headers:{ "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }

// const deleteUser = (userId)=>{
//     return http.delete(`users/${userId}`,{headers:{ "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const upDateUser = (userId, userDataChanged)=>{
//     return http.put(`users/${userId}`, userDataChanged, {headers:{ "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const editConclusion = (conclusionId, userDataChanged)=>{
//     return http.put(`conclusions/${conclusionId}`, userDataChanged, {headers:{ "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const getConclusionStatuses = ()=>{
//     return http.get('conclusion-statuses',{headers:{ "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const getConclusions = ()=>{
//     return http.get('conclusions?orderby[id]=desc',{headers:{ "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}`}})
// }
// const getConclusion= (conclusion_id)=>{
//     return http.get(`conclusions\\${conclusion_id}`,{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const getRiskFactors= ()=>{
//     return http.get('risk-factors?per_page=30',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const getCorruptionFactors= ()=>{
//     return http.get('corruption-factors?per_page=50',{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const putConclusion= (conclusion_id, conclusion_status)=>{
//     return http.put(`conclusions\\${conclusion_id}`,conclusion_status,{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const putLowAnalys= (comment_id, comment_data)=>{
//     return http.put(`law-analys-expert-comments\\${comment_id}`, comment_data,{ headers: { "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const uploadConclusion= (conclusion_id, data)=>{
//     return http.post(`conclusions\\${conclusion_id}`,data,{ headers: 
//         {  'Content-Type': 'multipart/form-data', 
//         "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
// const uploadECP= (conclusion_id, data)=>{
//     return http.post(`conclusions\\${conclusion_id}`,data,{ headers: { 'Content-Type': 'multipart/form-data', "Authorization": `Bearer ${localStorage.getItem('.AuthToken')}` } })
// }
//_method: put



export  const UserService = {
    signInUser,
    signOut,
    getUser

}

