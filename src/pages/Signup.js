import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//elements
import Input from '../elements/Input';
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Dives from '../elements/Dives';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState("")
  const [checkPw, setCheckPw] = useState("")

  return (
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
            <div className="wrap">
              <div className="title">회원가입</div>
              <div className="input">
                <div className="label">이메일</div>
                <Input
                width="100%"
                height="30px"
                type="text"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                />
              </div>
              <div className="input">
                <div className="label">비밀번호</div>
                <Input
                width="100%"
                height="30px"
                type="text"
                onChange={(e)=>setPw(e.target.value)}
                value={pw}/>
              </div>
              <div className="input">
                <div className="label">비밀번호 확인</div>
                <Input
                width="100%"
                height="30px"
                type="text"
                onChange={(e)=>setCheckPw(e.target.value)}
                value={checkPw}/>
              </div>
              <div className="input">
                <div className="label">승인 사진</div>
                <Input
                width="100%"
                height="30px"
                type="file"/>
                <div className="explain">항해 99 슬랙 캡쳐 사진</div>
              </div>
              <div>
               <button className="btn">회원가입</button>
              </div>
            </div>
          </div>
        </Ba>
      </Back>
    </Wrap>
  )
};


const Wrap = styled.div`
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
      .title{
        margin: auto;
        font-weight: 700;
        font-size: 1.5rem;
        width: 14%;
        margin-bottom: 30px;
      }
    }
    .input{
      margin-bottom: 20px;
      .label{
      font-weight: 600;
      margin-bottom: 10px;
      }
      .explain{
        font-size: 0.9rem;
        margin-top: 5px;
        margin-left: 10px;
      }
    }
    .btn{
      margin: 40px auto 20px auto;
      background-color: #DF0000;
      border: 0;
      border-radius: 5px;
      color: white;
      width: 40%;
      height: 40px;
      padding: 10px;
      box-shadow: 0 1px 1px 1px rgba(113, 113, 113, 0.3);
      cursor: pointer;
      font-weight: 700;
      display: block
    }
  }
`

export default Signup;
