import axios from 'axios';
export const findAll = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilitiesList')).data
    } catch (error) {
        console.log(error)
    }
}