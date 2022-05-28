import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//elements
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Dives from '../elements/Dives';

//assets
import { ReactComponent as Profile} from '../assets/profile.svg';
import { ReactComponent as Btn} from '../assets/btn.svg';
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
        position: absolute;
        right: 0px;
      }
    }
  }
`

export default MyPage;
