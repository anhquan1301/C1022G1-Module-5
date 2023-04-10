
import userService from './../service/listService';
import { DELETE_USER, GET_ALL_USERS, SHOW_USER } from './types';

export const getAllUsers=()=> async(dispatch)=>{
        try {
            const res = await userService.getAllUser();
            dispatch({
                type:GET_ALL_USERS,
                payload:res.data
            })
        } catch (error) {
            console.log(error)
        }
} 

export const deleteUser = (id) => async(dispatch) => {
    try {
        const res = await userService.deleteUser(id);
        console.log(res)
        dispatch({
            type:DELETE_USER,
            payload:id
        })
    } catch (error) {
        console.log(error)
    }
}

export const showUser = () => (dispatch) => {
        dispatch({
            type:SHOW_USER
        })

} 