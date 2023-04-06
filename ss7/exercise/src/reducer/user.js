import { DELETE_USER, GET_ALL_USERS } from "../action/types";


const initialState = []

export const usersReducer = (user = initialState,action)=>{
    const {type, payload} = action;

    switch(type){
        case GET_ALL_USERS:
            return payload
        case DELETE_USER:
            return payload

            default:
                return user
    }
}