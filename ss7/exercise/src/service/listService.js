import request from "../request";

const getAllUser =()=>{
    return request.get('/users')
}
const deleteUser =(id)=>{
    return request.delete(`/users/${id}`)
}
const userService = {
    getAllUser,
    deleteUser
}
export default userService