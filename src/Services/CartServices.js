import AxiosService from "./Axiosservices";
let url = 'https://localhost:44359/api/Cart'

const header = {
  
  headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }

}

  export const CartServices = {
    addtocart: (data) => {
      return AxiosService.postService(`${url}`, data, header);
    },
  
    getcart: () => {
      return AxiosService.getcartService(`${url}`, header);
    },
  };