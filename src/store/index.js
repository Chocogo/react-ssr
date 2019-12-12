import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './product'
const store = createStore(
  combineReducers({ product: productReducer }),
  applyMiddleware(thunk)
)

export default store