import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const IS_LIKE = 'IS_LIKE'

const isLike = createAction(IS_LIKE, (is_like)=>({is_like}))

const initialState = {
  like: {},
  is_like: false
}

const likeDB = (articleID) => {
  return function (dispatch, getState, { history }) {  
    axios.post(`/articles/:${articleID}/like`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
    })
      .then((res) => {
        alert(res.data.msg);
        dispatch(isLike())
      })
      .catch((err) => {
      console.log('라이크 오류', err)
    })
  }
}

const deleteLikeDB = (articleID) => {
  return function (dispatch, getState, { history }) {
    axios.delete(`/articles/:${articleID}/like`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
        },
    })
      .then((res) => {
        alert(res.data.msg);
        dispatch(isLike())
      })
      .catch((err) => {
      console.log('라이크 오류', err)
    })
  }
}

export default handleActions(
  {
    [IS_LIKE]: (state, action) => produce(state, (draft) => {
      draft.is_like = true
    }),
  },
  initialState
);

const actionCreators = {
  likeDB,
  deleteLikeDB
};

export { actionCreators };