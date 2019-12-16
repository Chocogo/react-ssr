import Axios from "axios"

// import axios form 'axios'
// action type
const GET_PRODUCT = 'PRODUCT/GET_PRODUCT'
// action 
const updateProduct = (lists) => {
  return {
    type: GET_PRODUCT,
    lists
  }
}
// async action
export const getProduct = () => {
  return (dispatch) => {
    return new Promise((resolve) => { // 处理避免错误ajax的异步方法：  返回promise, 将错误rosolve处理掉
      return Axios.get('http://localhost:8088/api/getProduct', {
        params: {
          userId: 338
        }
      }).then(({data}) => {
        console.log('data----',data)
        const { lists } = data
        // dispatch(updateProduct(lists))
        resolve(dispatch(updateProduct(lists)))
      }).catch(e => {
        resolve(e)
      })
    })
  }
}

// default product list
const defaultList = {
  lists: []
}


// reducer
export default function (state=defaultList, action) {
  switch(action.type) {
    case GET_PRODUCT:
      const newList = {
        ...state,
        lists: action.lists
      }
      return newList
    default :
      return state // ？？？？写了个defaultList埋了一个大坑！！！
  }
}
// export default productReducer