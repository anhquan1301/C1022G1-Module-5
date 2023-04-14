import axios  from 'axios';

export const findAll = (name,page)=>{
    try {
        return axios.get(`http://localhost:8080/customer?name_like=${name}&_page=${page}&_limit=3&_sort=id&_order=desc`)
    } catch (error) {
        console.log(error);
    }
}
export const findById = (id)=>{
    try {
        return axios.get(`http://localhost:8080/customer/${id}`)
    } catch (error) {
        console.log(error);
    }
}
export const remove = (id)=>{
    try {
        axios.delete(`http://localhost:8080/customer/${id}`)
    } catch (error) {
        console.log(error);
    }
}
export const save = (customer)=>{
    try {
        axios.post(`http://localhost:8080/customer/`,{ ...customer })
    } catch (error) {
        console.log(error);
    }
}
export const edit = (customer)=>{
    try {
        axios.put(`http://localhost:8080/customer/${customer.id}`,{ ...customer })
    } catch (error) {
        console.log(error);
    }
}