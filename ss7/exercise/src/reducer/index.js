import { combineReducers } from "redux";
import { usersReducer } from "./user";


export const rootReducer = combineReducers({
    users: usersReducer
})