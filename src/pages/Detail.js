import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//elements
import Input from '../elements/Input';
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Dives from '../elements/Dives';
import Comments from "../components/Comments";

//assets
import { ReactComponent as Profile} from '../assets/profile.svg';
import { ReactComponent as Btn} from '../assets/btn.svg';
import { ReactComponent as Comment} from "../assets/comment.svg";
import { ReactComponent as Like} from "../assets/like.svg";


const Detail = () => {
  const [input, setInput] = useState("")
  const [edit, setEdit] = useState(false);
  
  return (
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
            <div className="titleWrap">
              <div className="titleBtn">
                <div className="title">글제목글제목글제목글제목 글제목글제목글제목글제목글제목글제목글제목글제목글제목글제목글제목글제목</div>
                {edit === true
                ?<div className="btn">
                  <Btn onClick={()=>{setEdit(false)}}/>
                  <div>수정 삭제</div>
                  </div>
                :<div className="btn">
                <Btn onClick={()=>{setEdit(true)}}/>
                <div></div>
                </div>}
              </div>
              <div className="profile">
                <div className="profileName">항해</div>
                <Profile/>
              </div>
            </div>
            <div className="time">04/21 13:57</div>
            <div className="contents">기존 부트캠프 대비 절반 정도로 수강료를 낮추었지만, 더 날카롭게 성장할 수 있는 교육을 제공할 것을 약속합니다. 수 많은 스파르타 온라인 수업과 멘토링, SW사관학교 정글을 운영하면서 얻은 노하우를 항해99에 담았습니다.99일간의 항해로, 훌륭한 개발자로 성장해나갈 수 있는 기반을 닦으세요. 때론 높은 파도가 치겠지만, 거친 바다를 헤쳐나간 경험이 소중한 자산으로 남을 것입니다.당신을 항해99로 초대합니다.</div>
            <div className="icon">
              <div className="like">
                <Like/>
              <div>10</div>
              </div>
              <div className="comment">
                <Comment/>
              <div>5</div>
              </div>
            </div>
            <hr/>
            <div className="commnetList">
              <div>
                <Input
                  width="88%"
                  placeholder="댓글 작성"
                  ></Input>
                <button className="button">확인</button>
              </div>
              <Comments/>
            </div>
          </div>
        </Ba>
      </Back>
    </Wrap>
  )
};


const Wrap = styled.div`
display: flex;
  .main{
    width: 80%;
    height: 90%;
    margin: auto;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 24px;
    .titleWrap{
      display: flex;
      text-align: center;
      justify-content: space-between;
      .titleBtn{
        display: flex;
        align-items: center;
      }
      .title{
        width: 90%;
        font-weight: 500;
        font-size: 24px;
      }
      .btn{
        cursor: pointer;
      }
      .profile{
        display: flex;
        align-items: center;
        width: 20%;
        .profileName{
          margin-right: 10px;
        }
      }
    }
    .time{
      margin-top: 10px;
      font-size: 0.9em;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .icon{
      display: flex;
      margin: 20px 0px;
      .like{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
      }
      .comment{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    hr{
      margin-top: 16px;
      width: 100%;
      height: 1.5px;
      background-color: #606060;
      border-radius: 50px;
      border: none;
    }
    .commnetList{
      .button{
        background-color: rgba(255, 255, 255, 0.5);
        border: none;
        padding: 9px 17px;
        border-radius: 5px;
        margin-left: 10px;
      }
    }
  }
`

export default Detail;