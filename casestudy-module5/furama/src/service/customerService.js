import axios from "axios";
export const findByName = async(value)=>{
    console.log(value)
    try {
        const response = await axios.get(`http://localhost:8080/customerList`)
        const data = response.data;
        const findName = data.filter(customer => customer.name.includes(value));
        return findName;
    } catch (error) {
        console.log(error);
    }
}
