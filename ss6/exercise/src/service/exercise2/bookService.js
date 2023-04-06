import axios from 'axios';


export const findAll = async()=>{
    try {
        return (await axios.get('http://localhost:8080/books')).data
    } catch (error) {
        console.log(error)
    }
}
export const save = async(book)=>{
    try {
        return await axios.post('http://localhost:8080/books',{ ...book })
    } catch (error) {
        console.log(error)
    }
}
export const detail = async(id)=>{
    try {
        return (await axios.get(`http://localhost:8080/books/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}
export const edit = async(book)=>{
    console.log(book)
    try {
        return await axios.put(`http://localhost:8080/books/${book.id}`,{ ...book })
    } catch (error) {
        console.log(error)
    }
}
export const remove = async(id)=>{
    try {
        return (await axios.delete(`http://localhost:8080/books/${id}`))
    } catch (error) {
        console.log(error)
    }
}