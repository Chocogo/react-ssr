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
    Axios.get('http://localhost:8088/api/getProduct', {
      params: {
        userId: 338
      }
    }).then(({data}) => {
      console.log(data)
      dispatch(updateProduct(data.lists))
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
      return {
        ...state,
        lists: action.lists
      }
    default :
      return defaultList
  }
}
// export default productReducer