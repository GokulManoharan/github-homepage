import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import apiReducer from '../reducers/apiReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        apiData : apiReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore