import React from 'react';
import styled from 'styled-components';

//assets
import { ReactComponent as Profile} from '../assets/profile.svg';
import { ReactComponent as Btn} from '../assets/btn.svg';
import { ReactComponent as Like} from "../assets/like.svg";

const Comments = () => {
  //그리드 써서 해볼것 
  return (
      <Wrap>
        <div className="profile">
          <div className="profileWrap">
            <Profile/>
            <div className="nicknameWrap">
              <div className="nickname">
                <div className="name">항해</div>
                <div className="writer">작성자</div>
              </div>
              <div>04/21 10:00</div>
            </div>
          </div>
          <Btn/>
        </div>
        <div className="commentWrap">
          <div className="comment">
            재밌겠네요
          </div>
          <div className="likeWrap">
            <div className="like"> <Like/> 1 개 </div>
          </div>
        </div>
      </Wrap>
  )
};

const Wrap =styled.div`
margin-top: 20px;
padding: 0px 20px;
  .profile{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .profileWrap{
      display: flex;
      align-items: center;
      .nicknameWrap{
        margin-left: 20px;
        .nickname{
          display: flex;
          .name{
            font-weight: 600;
            margin-right: 10px;
          }
          .writer{
            color: red;
            font-size: 0.8rem;
            font-weight: 550;
          }
        }
      }
    }
  }
  .commentWrap{
    margin-left: 9%;
    .likeWrap{
      display: flex;
      margin-top: 10px;
      .like{
        display: flex;
        align-items: center;
      }
      div{
        margin-right: 10px;
        font-size: 0.9rem;
      }
    }
  }
`
export default Comments;
