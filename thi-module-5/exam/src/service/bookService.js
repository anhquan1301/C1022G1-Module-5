import axios from 'axios'

export const findByName = (name,bookType,page)=>{
    try {
        return axios.get(`http://localhost:8080/books?name=${name}&bookType=${bookType}&page=${page ? page : '0'}`)
    } catch (error) {
        console.log(error);
    }
}


export const save = (books)=>{
    try {
        axios.post('http://localhost:8080/books',{ ...books })
    } catch (error) {
        console.log(error);
        // return error
    }
}
export const findById = (id)=>{
    try {
        return axios.get(`http://localhost:8080/books/detail?id=${id}`)
    } catch (error) {
        console.log(error);
    }
}
export const edit = (books)=>{
    console.log(books)
    try {
        axios.put('http://localhost:8080/books',{ ...books })
    } catch (error) {
        console.log(error);
    }
}
export const remove = (id)=>{
    try {
        axios.delete(`http://localhost:8080/books?id=${id}`)
    } catch (error) {
        console.log(error);
    }
}