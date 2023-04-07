import axios from 'axios';
export const findAll = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilitiesList')).data
    } catch (error) {
        console.log(error)
    }
}

export const save = async(facility)=>{
    try {
        await axios.post('http://localhost:8080/facilitiesList',{ ...facility })
    } catch (error) {
        
    }
}
export const getFacilitiesType = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilitiesType')).data
    } catch (error) {
        console.log(error)
    }
}
export const getFacilitiesStandard = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityStandard')).data
    } catch (error) {
        console.log(error)
    }
}

export const getFacilitiesRentType = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityRentType')).data
    } catch (error) {
        console.log(error)
    }
}

export const getFacilityService = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityService')).data
    } catch (error) {
        console.log(error)
    }
}