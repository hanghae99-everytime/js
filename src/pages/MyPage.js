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
import { ReactComponent as Like} from "../assets/like.svg";


const MyPage = () => {
  return (
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
            마이페이지!
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
  }
`

export default MyPage;
