
import { applyMiddleware, createStore } from 'redux';

import { rootReducer } from './reducer/index';
import  thunk from 'redux-thunk';

const initialState = {}

const middleware = [thunk];

export const store= createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)