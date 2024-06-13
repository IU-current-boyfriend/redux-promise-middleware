import axios from "axios";

export const actionCreator = ({
  type, payload
}) => {
  return {
    type,
    payload
  }
}

// export const fetchUpdateCommentListAction = (type) => {
//   // 异步
//   axios.get('http://localhost:3001/get_list').then(res => {
//     console.log('res: =>', res);
//   });
//   // 同步, 所以payload不一定存在值
//   return {
//     type,
//     payload: 'payload'
//   }
// }


// 返回promise对象
export const fetchUpdateCommentListAction = async (type) => {
  const res = await axios.get('http://localhost:3001/get_list');
  return {
    type,
    payload: res.data.data.comments
  }
}

// 返回对象promise
export const fetchUpdateCommentListAction2 = (type) => {
  return axios.get('http://localhost:3001/get_list').then(res => {
    return {
      type,
      payload: res.data.data.comments
    }
  });
}

// 返回function
export const fetchUpdateCommentListAction3 = (type) => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3001/get_list');
    dispatch({
      type,
      payload: res.data.data.comments
    })
  };
}

