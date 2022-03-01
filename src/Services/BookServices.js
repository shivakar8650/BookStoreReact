import AxiosService from "./Axiosservices";
let url = 'https://localhost:44359/api/Books'

export const BookServices = {
     getAllproducts: (data) => {
         return AxiosService.getService(`${url}/getallbooks`, data)
     },
    
 }