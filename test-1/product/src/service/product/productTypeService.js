import axios from "axios";

export const findAll = ()=>{
    try {
        return axios.get('http://localhost:8080/productType')
    } catch (error) {
        console.log(error);
    }
}