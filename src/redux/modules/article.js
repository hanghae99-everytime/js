import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_ARTICLE = 'GET+ARTICLE';
const ARTICLE_COUNT = 'ARTICLE_COUNT';
const GET_WRITE_ARTICLE = 'GET_WRITE_ARTICLE';
const GET_LIKE_ARTICLE = 'GET_LIKE_ARTICLE';

const getArticle = createAction(GET_ARTICLE, (article)=>({article}))
const articleCount = createAction(ARTICLE_COUNT, (articleCount)=>({articleCount}));
const getWrteArticle = createAction(GET_WRITE_ARTICLE, (writeArticle)=>({writeArticle}));
const getLikeArticle = createAction(GET_LIKE_ARTICLE, (likeArticle)=>({likeArticle}));

const initialState = {
  articleCount : "",
  article:{},
  writeArticle:{},
  likeArticle:{}
};

//게시글 전체 가져오기
const getArticleDB =(pageNum)=>{
  return function(dispatch, getState, {history}){
    axios.get(`/articles?page=${pageNum}`)
    .then((res)=>{
      dispatch(getArticle(res.data.articles))
    })
    .catch((err)=>{
      console.log('게시글 전체 가져오기 오류', err)
    })
  }
}

//게시글 전체 수 가져오기
const articleCountDB =()=>{
  return function(dispatch, getState, {history}){
    axios.get('/articles/articleCount')
    .then((res)=>{
      dispatch(articleCount(res.data.articleCount))
    })
    .catch((err)=>{
      console.log('전체게시글받아오기 실패', err)
    })
  }
}

//검색 게시글 가져오기
const SearchDB =(search, pageNum)=>{
  return function(dispatch, getState, {history}){
    axios.get(`/articles/search?page=${pageNum}&q=${search}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
    })
    .then((res)=>{
      dispatch(getArticle(res.data.articles))
    })
    .catch((err)=>{
      console.log('검색오류', err)
    })
  }
}

//내가 쓴 게시글 가져오기
const getWrteArticleDB =()=>{
  return function(dispatch, getState, {history}){
    axios.get('/articles/myArticle',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
    })
    .then((res)=>{
      dispatch(getWrteArticle(res.data.articles))
    })
    .catch((err)=>{
      console.log('내가 쓴 게시글 가져오기 오류', err)
    })
  }
}

//내가 좋아요한 게시글 가져오기
const getLikeArticleDB =()=>{
  return function(dispatch, getState, {history}){
    axios.get('/articles/myArticle',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
    })
    .then((res)=>{
      dispatch(getLikeArticle(res.data.articles))
    })
    .catch((err)=>{
      console.log('내가 좋아요한 게시글 가져오기 오류', err)
    })
  }
}

//게시글 작성
const wrtieDB =(title, content)=>{
  return function(dispatch, getState, {history}){
    axios.post('/aritcles',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      },
    })
    .then((res)=>{
      if(!res.data.result){
        alert(res.data.msg);
        return;
      }
      alert(res.data.msg);
      history.replace('/');
    })
    .catch((err)=>{
      console.log('글 작성 오류', err)
    })
  }
}

//리덕스
export default handleActions(
  {
    [GET_ARTICLE] :(state, action) => produce(state, (draft)=>{
      draft.article.push(...action.payload.articles);
    }),
    [ARTICLE_COUNT]: (state, action) =>produce(state, (draft) => {
        draft.articleCount = action.payload.articleCount;
    }),
    [GET_WRITE_ARTICLE]: (state, action) =>produce(state, (draft) => {
      draft.writeArticle.push(...action.payload.articles)
    }),
    [GET_LIKE_ARTICLE]: (state, action) =>produce(state, (draft) => {
      draft.likeArticle.push(...action.payload.articles)
    }),
  },
  initialState
);

const actionCreators = {
  getArticleDB,
  articleCountDB,
  wrtieDB,
  SearchDB
};

export { actionCreators };
