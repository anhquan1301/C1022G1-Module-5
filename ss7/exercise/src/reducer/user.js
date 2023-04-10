import { DELETE_USER, GET_ALL_USERS, SHOW_USER } from "../action/types";


const initialState = []

export const usersReducer = (user = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case GET_ALL_USERS:
            return payload
        case DELETE_USER:
            console.log(user);
            console.log(payload);
               return user.filter((users)=>(users.id!==payload))
               
            default:
                return user
    }
}
const initialStateShowUser = false
export const showUsersReducer = (state = initialStateShowUser,action)=>{
    const { type } = action;
    let newState = state;
    switch(type){
        case SHOW_USER:
            newState = !state
            break;
            default:
                return state
    }
    return newState
}