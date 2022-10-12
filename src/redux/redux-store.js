import { applyMiddleware, combineReducers, createStore } from "redux"
import appReducer from "./app-reducer"
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    app: appReducer
})

export const store = createStore(reducers, (applyMiddleware(thunkMiddleware)))
