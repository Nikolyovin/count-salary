import { applyMiddleware, combineReducers, createStore } from "redux"
import appReducer from "./app-reducer"

const reducers = combineReducers({
    app: appReducer
})

export const store = createStore(reducers)
