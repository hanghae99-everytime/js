import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const LIKE = 'LIKE';
const DELETE_LIKE = 'DELETE_LIKE';

const like = createAction(LIKE, (like) => ({ like }));
const deleteLike = createAction(DELETE_LIKE, (like) => ({ like }));

const initialState = {
  like:{}
}

const likeDB = () => {
  return function (dispatch, getState, { history }) {  
  }
}

const deleteLikeDB = () => {
  return function (dispatch, getState, { history }) {
    
  }
}

export default handleActions(
  {
    [LIKE] :(state, action) => produce(state, (draft)=>{
    }),
    [DELETE_LIKE] :(state, action) => produce(state, (draft)=>{
    }),
  },
  initialState
)