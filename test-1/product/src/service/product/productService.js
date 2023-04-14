import axios from 'axios'

export const findAll = (name,currentPage)=>{
    try {
        return axios.get(`http://localhost:8080/product?name=${name}&page=${currentPage}`)
    } catch (error) {
        console.log(error);
    }
}

export const getPageTotal = ()=>{
    try {
        return axios.get(`http://localhost:8080/product`)
    } catch (error) {
        console.log(error);
    }
}
export const save = (product)=>{
    try {
         axios.post('http://localhost:8080/product',{ ...product })
    } catch (error) {
        console.log(error);
    }
}

export const findById = (id)=>{
    try {
        return axios.get(`http://localhost:8080/product/detail?id=${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const edit = (product)=>{
    try {
         axios.put(`http://localhost:8080/product`,{ ...product })
    } catch (error) {
        console.log(error);
    }
}

export const remove = (id)=>{
    try {
         axios.delete(`http://localhost:8080/product?id=${id}`)
    } catch (error) {
        console.log(error);
    }
}
