import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_COMMENT = 'GET_COMMENT';
const WRITE_COMMENT = 'WRITE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';

const getComment = createAction(GET_COMMENT, (comments) => ({ comments }));
const writeComment = createAction(WRITE_COMMENT, (comments) => ({ comments }));
const editComment = createAction(EDIT_COMMENT, (comments) => ({ comments }));

const initialState = {
  comments:{},
}

//댓글 전체 가져오기
const getCommentDB = (articleID) => {
  return function (dispatch, getState, { history }) {
    axios.get(`/articles/:${articleID}/comments`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
    })
      .then((res) => {
        dispatch(getComment(res.data.comments))
      })
      .catch((err) => {
      console.log('댓글 가져오기 오류', err)
    })
  }
}
//댓글 작성
const writeCommentDB = (articleID,content) => {
  return function (dispatch, getState, { history }) {
    axios.get(`/articles/:${articleID}/comments`, {
      headers: {
      Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
    })
      .then((res) => {
        dispatch(writeComment(content))
        alert(res.data.msg);
      })
      .catch((err) => {
      console.log('댓글 작성 오류', err)
    })
  };
}

//댓글 수정 
const editCommentDB = (commentID, content) => {
  return function (dispatch, getState, { history }) {
    axios.patch(`/articles/comments/:${commentID}`,
      {
      content:content
      },
      {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
      }
    )
      .then((res) => {
        dispatch(editComment(content))
        alert(res.data.msg);
      })
      .catch((err) => {
        console.log('댓글 수정하기 에러', err)
      })
  };
}

//댓글 삭제
const deleteCommentDB = (commentID) => {
  return function (dispatch, getState, { history }) {
    axios.delete(`/articles/comments/:${commentID}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
    })
      .then((res) => {
        alert(res.data.msg);
        dispatch(getComment());
      })
      .catch((err) => {
      console.log('댓글 삭제 오류', err)
    })
  };
}

export default handleActions({
  [GET_COMMENT]: (state, action) => produce(state, (draft) => {
    draft.comments.push(...action.payload.comments)
  }),
  [WRITE_COMMENT]: (state, action) => produce(state, (draft) => {
    draft.comments.push(...action.payload.comments)
  }),
  [EDIT_COMMENT]: (state, action) => produce(state, (draft) => {
    draft.comments.push(...action.payload.comments)
  }),
},  
  initialState
);

const actionCreators = {
  getCommentDB,
  writeCommentDB,
  deleteCommentDB,
  editCommentDB
};

export { actionCreators };