import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT'

const login = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user)=>({ user }));

const initialState = {
  user :{}
};

//로그인 미들웨어
const logInDB = (email, pwd) => {
  return function (dispatch, getState, { history }) {
    axios.post('/user/login')
   .then((res) => {
    alert(res.data.msg)
    localStorage.setItem("login-token", res.data.data.token);
    dispatch(login({ email, pwd }));
    window.location.reload("/main");
   })
   .catch(function (error) {
     alert(error.response.data.msg);
   });
  };
 };

 //회원가입
const signUpDB = (email, pwd) =>{
  return function(dispatch, getState, {history}){
    axios.post('/user/signup')
    .then((res)=>{
      alert(res.data.msg)
      dispatch(logInDB(email,pwd))
    })
    .catch((err)=>{
      alert(err.response.data.msg)
    })
  }
}

//로그인체크
const loginCheckDB =()=>{
  return function (dispatch, getState, {history}){
    axios.get('/user/auth',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
    })
    .then((res)=>{
      if(!res.data.result){
        alert('회원정보가 올바르지 않습니다');
        history.replace('/');
        window.location.reload();
        return
      }
    })
    .catch((err)=>{
      console.log(err);
      alert('로그인 후 이용 가능 합니다');
      history.replace('/');
      window.location.reload();
    })
  }
}

 //리덕스
export default handleActions(
  {
    [LOG_IN]: (state, action) => produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.is_login = true;
      }),
    [LOG_OUT] :(state, action) => produce(state, (draft)=>{
      localStorage.removeItem('login-token');
      draft.user = null;
      draft.is_login = false;
      window.location.reload('/')
    })
  },
  initialState
);

 const actionCreators = {
   logInDB,
   signUpDB,
 };

 export { actionCreators };
