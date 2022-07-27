import axios from 'axios';

const apiClient = axios.create({
    // baseURL: 'https://my-json-server.typicode.com/jimdinapoli/BenAdminApiJson',
    baseURL: 'http://localhost:3001',
    withCredentials: false,
    headers:{
        'Accept': 'application.json',
        'ContentType' : 'application.json'
    }
})

export default {
    getPlans(){
        return apiClient.get('/plans');
    },
    getPlan(id){
        return apiClient.get('/plans/' + id);
    },
    insertPlan(plan){
        return apiClient.post('/plans', plan);
    }
}