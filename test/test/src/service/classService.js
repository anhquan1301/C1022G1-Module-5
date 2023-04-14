import axios from "axios";
export const findAllClassList = async()=>{
    try {
        return (await axios.get(`http://localhost:8080/class`)).data
    } catch (error) {
        console.log(error)
    }
}