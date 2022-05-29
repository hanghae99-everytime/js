import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//elements
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Dives from '../elements/Dives';

//assets
import { ReactComponent as Comment} from "../assets/comment.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { ReactComponent as Finder } from "../assets/finder.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import { ReactComponent as Left } from "../assets/left.svg";

const MyPage = () => {
  return (
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
            <div className="wrap">
              <div className="title">마이페이지</div>
              <div className="finder"><Finder/></div>
              <div style={{marginBottom:"40px", marginTop:"70px"}}>
                <div className='title2'>내가 쓴 글</div>
                <div className='container'>
                  <div className='btn left'><Left/></div>
                  <div className='contentsWrap'>
                    <div className='contents'>글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성</div>
                    <div className='iconWrap'>
                      <div className='icon'>
                        <Like className='icons'></Like>
                        <div className='Cnt'>10</div>
                      </div>
                      <div className='icon'>
                        <Comment className='icons'></Comment>
                        <div className='Cnt'>10</div>
                      </div>
                    </div>
                    <div className='contentsTitle'>내가쓴 글제목dflakdj;flkasjd;lkj</div>
                  </div>
                  <div className='contentsWrap'>
                    <div className='contents'>글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성</div>
                    <div className='iconWrap'>
                      <div className='icon'>
                        <Like className='icons'></Like>
                        <div className='Cnt'>10</div>
                      </div>
                      <div className='icon'>
                        <Comment className='icons'></Comment>
                        <div className='Cnt'>10</div>
                      </div>
                    </div>
                    <div className='contentsTitle'>내가쓴 글제목dflakdj;flkasjd;lkj</div>
                  </div>
                  <div className='contentsWrap'>
                    <div className='contents'>글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성</div>
                    <div className='iconWrap'>
                      <div className='icon'>
                        <Like className='icons'></Like>
                        <div className='Cnt'>10</div>
                      </div>
                      <div className='icon'>
                        <Comment className='icons'></Comment>
                        <div className='Cnt'>10</div>
                      </div>
                    </div>
                    <div className='contentsTitle'>내가쓴 글제목dflakdj;flkasjd;lkj</div>
                  </div>
                  <div className='btn right'><Right/></div>
                </div>
              </div>

              <div>
                <div className='title2'>내가 좋아요 글</div>
                <div className='container'>
                  <div className='btn left'><Left/></div>
                  <div className='contentsWrap'>
                    <div className='contents'>글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성</div>
                    <div className='iconWrap'>
                      <div className='icon'>
                        <Like className='icons'></Like>
                        <div className='Cnt'>10</div>
                      </div>
                      <div className='icon'>
                        <Comment className='icons'></Comment>
                        <div className='Cnt'>10</div>
                      </div>
                    </div>
                    <div className='contentsTitle'>내가쓴 글제목dflakdj;flkasjd;lkj</div>
                  </div>
                  <div className='contentsWrap'>
                    <div className='contents'>글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성</div>
                    <div className='iconWrap'>
                      <div className='icon'>
                        <Like className='icons'></Like>
                        <div className='Cnt'>10</div>
                      </div>
                      <div className='icon'>
                        <Comment className='icons'></Comment>
                        <div className='Cnt'>10</div>
                      </div>
                    </div>
                    <div className='contentsTitle'>내가쓴 글제목dflakdj;flkasjd;lkj</div>
                  </div>
                  <div className='contentsWrap'>
                    <div className='contents'>글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성글작성</div>
                    <div className='iconWrap'>
                      <div className='icon'>
                        <Like className='icons'></Like>
                        <div className='Cnt'>10</div>
                      </div>
                      <div className='icon'>
                        <Comment className='icons'></Comment>
                        <div className='Cnt'>10</div>
                      </div>
                    </div>
                    <div className='contentsTitle'>내가쓴 글제목dflakdj;flkasjd;lkj</div>
                  </div>
                  <div className='btn right'><Right/></div>
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
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 24px;
     .wrap{
      margin: auto;
      width: 80%;
      position: relative;
      .title{
        margin: auto;
        font-weight: 700;
        font-size: 1.5rem;
        width: fit-content;
        margin-bottom: 30px;
      }
      .finder{
        width: fit-content;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 6px;
        float: right;
      }
      .title2{
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .container{
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
        gap: 10px;
        .btn{
          width: fit-content;
          height: min-content;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          padding: 10px;
          margin: auto;
        }
        .contentsWrap{
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          width: 160px;
          height: 180px;
          padding: 10px;
          border-radius: 5px;
          .contents{
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .iconWrap{
            display: flex;
            margin-top: 20px;
            margin-bottom: 10px;
            .icon{
              display: flex;
              align-items: center;
              .icons{
                margin-right: 2px;
              }
              .Cnt{
                margin-right: 5px;
              }
            }
          }
          .contentsTitle{
            font-size: 1.2rem;
            font-weight: 600;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
`

export default MyPage;
