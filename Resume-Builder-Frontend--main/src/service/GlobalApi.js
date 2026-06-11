import axios from 'axios';

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

// Error interceptor for global error handling
axiosClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            console.error('Unauthorized: Please login again');
        } else if (error.response?.status === 403) {
            console.error('Forbidden: You do not have permission to access this resource');
        } else if (error.response?.status === 404) {
            console.error('Not Found: Resource not found');
        } else if (!error.response) {
            console.error('Network error: Unable to reach server');
        } else {
            console.error('Error:', error.response?.data?.message || error.message);
        }
        return Promise.reject(error);
    }
);

const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data)

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eql]='+userEmail)

const UpdateResumeDetail = (id, data) => axiosClient.put(`/user-resumes/${id}`, data);

const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*")

const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}