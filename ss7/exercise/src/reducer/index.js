import { combineReducers } from "redux";
import { showUsersReducer, usersReducer } from "./user";


export const rootReducer = combineReducers({
    users: usersReducer,
    show: showUsersReducer
})