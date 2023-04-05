import axios from 'axios';


export const findAll = async()=>{
    try {
        return (await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')).data
    } catch (error) {
        console.log(error)
    }
}
export const save = async(book)=>{
    try {
        return await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books',{ ...book })
    } catch (error) {
        console.log(error)
    }
}
export const detail = async(id)=>{
    try {
        return (await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}
export const edit = async(book)=>{
    console.log(book)
    try {
        return await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${book.id}`,{ ...book })
    } catch (error) {
        console.log(error)
    }
}
export const remove = async(id)=>{
    try {
        return (await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`))
    } catch (error) {
        console.log(error)
    }
}