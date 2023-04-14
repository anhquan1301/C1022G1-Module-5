import axios from "axios";

export const findAll = async(name)=>{
    try {
        return (await axios.get(`http://localhost:8080/student/${name}`)).data
    } catch (error) {
        console.log(error);
    }
}
export const save = async(student)=>{
    try {
         await axios.post(`http://localhost:8080/student`,{ ...student })
    } catch (error) {
        console.log(error);
    }
}
export const findById = async(id)=>{
    try {
         return (await axios.get(`http://localhost:8080/student/${id}`)).data
    } catch (error) {
        console.log(error);
    }
}
export const edit = async(student)=>{
    console.log(student);
    try {
         await axios.put(`http://localhost:8080/student/${student.id}`,{ ...student })
    } catch (error) {
        console.log(error);
    }
}

export const remove = async(id)=>{
    try {
         await axios.delete(`http://localhost:8080/student/${id}`)
    } catch (error) {
        console.log(error);
    }
}