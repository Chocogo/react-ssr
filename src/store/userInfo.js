import Axios from "axios"

// import axios form 'axios'
// action type
const GET_PUSERINFOLISTS = 'USERINFO/GET_USERINFOLISTS'
// action 
const updateUserInfo = (lists) => {
  return {
    type: GET_PUSERINFOLISTS,
    lists
  }
}
// async action
export const getUserInfo = () => {
  return (dispatch) => {
    return new Promise(resolve => {
      return Axios.get('http://localhost:8088/api/getUserInfo', {
        params: {
          userId: 338
        }
      }).then(({data}) => {
        console.log('data----',data)
        const { lists } = data
        resolve(dispatch(updateUserInfo(lists)))
      })
    }).catch(e => {
      resolve(e)
    })
    // return Axios.get('http://localhost:8088/api/getUserInfo', {
  }
}

// default product list
const defaultList = {
  lists: []
}


// reducer
export default function (state=defaultList, action) {
  switch(action.type) {
    case GET_PUSERINFOLISTS:
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