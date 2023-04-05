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
    console.log(id)
    try {
        return (await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/1`)).data
    } catch (error) {
        console.log(error)
    }
}
export const edit = async(book)=>{
    try {
        return await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/1`)
    } catch (error) {
        console.log(error)
    }
}
