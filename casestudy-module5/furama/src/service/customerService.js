import axios from "axios";
export const findByName = async(value)=>{
    console.log(value)
    try {
        return (await axios.get(`http://localhost:8080/customerList?name_like=${value}`)).data
    } catch (error) {
        console.log(error);
    }
}
export const save = async(customer)=>{
    try {
        await axios.post(`http://localhost:8080/customerList`,{ ...customer })
    } catch (error) {
        console.log(error);
    }
}

export const update = async(customer)=>{
    try {
        await axios.put(`http://localhost:8080/customerList/${customer.id}`,{ ...customer })
    } catch (error) {
        console.log(error);
    }
}
export const findById = async(id)=>{
    try {
        return (await axios.get(`http://localhost:8080/customerList/${id}`)).data
    } catch (error) {
        console.log(error);
    }
}

export const customerTypeList = async()=>{
    try {
        return (await axios.get(`http://localhost:8080/customerTypeList`)).data
    } catch (error) {
        console.log(error);
    }
}