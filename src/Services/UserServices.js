import AxiosService from "./Axiosservices";
 
let url = 'https://localhost:44359/api/User';

export const UserService = {
     login: (data) => {
        return AxiosService.postService(`${url}/login`, data)
     },
     signup: (data) => {
        return AxiosService.postService(`${url}/register`, data)
     },
 }


