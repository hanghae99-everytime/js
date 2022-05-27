import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//로그인 체크
const SET_USER = "SET_USER";

const initialState = {
  user: {},
};

//회원가입 미들웨어
const signUpDB = (origin, nickname, pwd) => {
  return function (dispatch, getState, { history }) {
    // apis
    //   .signup(origin, nickname, pwd)
    //   .then((res) => {
    //     window.alert(res.data.msg);
    //     window.location.reload("/main");
    //   })
    //   .catch(function (error) {
    //     window.alert(error.response.data.msg);
    //   });
  };
};


//리덕스
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
};

export { actionCreators };
