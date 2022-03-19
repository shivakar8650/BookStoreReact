import AxiosService from "./Axiosservices";
let url = 'https://localhost:44359/api'

const header = {
  
  headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }

}

  export const CustomerDetails = {
    addcustomerdetails: (data) => {
      return AxiosService.postService(`${url}/Address`, data, header);
    },
  };