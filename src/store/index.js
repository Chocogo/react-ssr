import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './product'
import userInfoReducer from './userInfo'
// const store = createStore(
//   combineReducers({ product: productReducer }),
//   applyMiddleware(thunk)
// )

// 服务端数据
export const serverStore = () => {
  return createStore(
    combineReducers({ product: productReducer, userInfo: userInfoReducer }),
    applyMiddleware(thunk)
  )
}
// 客户端：将初始化的数据赋值给
export const clientStore = () => {
  let defaultState = window.__context ? window.__context : {}
  return createStore(
    combineReducers({ product: productReducer, userInfo: userInfoReducer }),
    defaultState,
    applyMiddleware(thunk)
  )
}


// export default store