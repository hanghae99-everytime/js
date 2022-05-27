// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import axios from "axios";

// //로그인 체크
// const SET_USER = "SET_USER";

// const setUser = createAction(SET_USER, (user) => ({ user }));

// const initialState = {
// };

// //로그인 미들웨어
// const logInDB = (origin, pwd) => {
//   return function (dispatch, getState, { history }) {
//     // apis
//     //   .login(origin, pwd)
//     //   .then((res) => {
//     //     alert("로그인에 성공하였습니다!");
//     //     localStorage.setItem("login-token", res.data.data.token);
//     //     dispatch(setUser({ origin }));
//     //     window.location.reload("/main");
//     //   })
//     //   .catch(function (error) {
//     //     alert(error.response.data.msg);
//     //   });
//   };
// };

// //리덕스
// export default handleActions(
//   {
//     [SET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         draft.user = action.payload.user;
//         draft.is_login = true;
//       }),
//   },
//   initialState
// );

// const actionCreators = {
// };

// export { actionCreators };
