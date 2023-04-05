import axios from 'axios';

export const findAll = async() =>{
    try {
        return (await axios.get('https://jsonplaceholder.typicode.com/todos')).data;
    } catch (error) {
        console.log(error)
    }
}
export const save = async(todoTask)=>{
    try {
        return await axios.post('https://jsonplaceholder.typicode.com/todos',{ ...todoTask })
    } catch (error) {
        console.log(error)
    }
}