import React from 'react';
import styled from 'styled-components';

//elements
import Ba from '../elements/Background';
import Back from '../elements/Back';
import Dives from '../elements/Dives';

const Main = () => {
  return (
    <Wrap>
      <Back>
        <Ba>
          <Dives>
          </Dives>
          <div className="main">
            메인!
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

export default Main;
