import React, { useState } from 'react';
import styled from 'styled-components';

//elements
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Dives from '../elements/Dives';

//assets
import { ReactComponent as Comment} from "../assets/comment.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { ReactComponent as Finder } from "../assets/finder.svg";

const Main = () => {
  const [search, setSearch] = useState("")
  return (
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
            <div className='contents'>
              <div className='inputWrap'>
                <input className='input'
                onChange={(e) => { setSearch(e.target.value); }}></input>
                <Finder className='finderIcon'></Finder>
              </div>
              <div className='boxWrap'>
                <div className='box'>
                  <div className='top'>
                    <div className='title'>글 제목ㄴㅇ마ㅣ럼ㅇ니라ㅓㅁㄴㅇ;리ㅏㅓㅁㄴㅇ;리ㅏㅁㄴ얼;민아ㅓㄹㅁㄴ;이라ㅓㅇㄴ;리ㅏㅓ</div>
                    <div className='iconWrap'>
                      <div className='icon'>
                        <Like></Like>
                        <div className='likeCnt'>10</div>
                      </div>
                      <div className='icon'>
                        <Comment></Comment>
                        <div className='commentCnt'>10</div>
                      </div>
                    </div>
                  </div>
                  <div className='text'>
                    글내요오오오오오오오오오오오오ㅇㅇㅇㅇㅇㅇㅇㅇdㅇㄴ마렁ㄴ미;ㅏ럼ㅇㄴ;ㅣㅏ럼;니아럼ㅇㄴ;ㅣ라ㅓㅁㄴㅇ;리ㅏ먼ㅇㄹ;ㅣ만ㅇ러;ㅣㅁㄴ아ㅓㄹ;ㅁㄴ이ㅏ럼ㅇㄴ;ㅣ라ㅓㅁㅇㄴ;리ㅏㅁㄴ얼;ㅣㅁ나ㅓㄹㅁ;니아ㄹㅇ;니ㅏ럼ㅇ니ㅏㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ글작글작ㅇㅇㅇㅇ글작글ㅇㅇㅇㅇ글작글ㅇㅇㅇㅇ글작글ㅇㅇㅇㅇㅇㅇ
                    글내요오오오오오오오오오오오오ㅇㅇㅇㅇㅇㅇㅇㅇdㅇㄴ마렁ㄴ미;ㅏ럼ㅇㄴ;ㅣㅏ럼;니아럼ㅇㄴ;ㅣ라ㅓㅁㄴㅇ;리ㅏ먼ㅇㄹ;ㅣ만ㅇ러;ㅣㅁㄴ아ㅓㄹ;ㅁㄴ이ㅏ럼ㅇㄴ;ㅣ라ㅓㅁㅇㄴ;리ㅏㅁㄴ얼;ㅣㅁ나ㅓㄹㅁ;니아ㄹㅇ;니ㅏ럼ㅇ니ㅏㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ글작글작ㅇㅇㅇㅇ글작글ㅇㅇㅇㅇ글작글ㅇㅇㅇㅇ글작글ㅇㅇㅇㅇㅇㅇ
                  </div>
                </div>
              </div>
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
    border-radius: 20px;
    padding: 24px;
    .contents{
      margin: auto;
      .inputWrap{
        display: flex;
        position: relative;
        .input{
          width: -webkit-fill-available;
          background-color:  rgba(255, 255, 255, 0.5);
          border: none;
          border-radius: 50px;
          padding: 11px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin-bottom: 20px;
          cursor: auto;
          ::placeholder {
            color: black;
          }
          :focus{
            outline: none;
          }
      }
        .finderIcon{
          position: absolute;
          right : 11px;
          top : 13%;
        }
      }
    }
    .boxWrap{
      width: 100%;
      margin: auto;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      .box{
        margin: auto;
        padding: 20px;
        .top{
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          .title{
            width: 60%;
            font-size: 1.3rem;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .iconWrap{
            display: flex;
            .icon{
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
    .text{
      width: 100%;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`

export default Main;
