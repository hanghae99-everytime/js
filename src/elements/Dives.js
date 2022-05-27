import React from 'react';
import styled from 'styled-components';
import { history } from "../redux/configureStore";

import Button from "../elements/Button";

const Dives = (props) => {
  const {} = props;

  const styles = {};

  return (
    <Dive>
      <div className="title" onClick={() => { history.push('/');  window.location.reload()}}>항해99에 타</div>
        <Button
        width="83%"
        height="3.5%"
        br="40px"
        top="91px"
        left="21px"
        color="black"
        _onClick={() => { history.push("/login");  window.location.reload()}}
      >
        로그인
      </Button>
      <Button
        width="83%"
        height="3.5%"
        br="40px"
        top="124px"
        left="21px"
        color="black"
        _onClick={() => { history.push("/write/1");  window.location.reload()}}
      >
        글작성하기
      </Button>
      <div className="article">
        <hr className="line" />
        <div className="number">10,000건</div>
        <div className="string">게시글 현황</div>
        <hr className="line2" />
      </div>
    </Dive>
  );
};

Dives.defaultProps = {
  children: null,
};

const Dive = styled.div`
  background: rgba(196, 196, 196, 0.5);
  border-radius: 20px 0px 0px 20px;
  height: 100%;
  width: 190px;
  position: relative;
  display: flex;
  .title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fb0000;
    position: absolute;
    top: 43px;
    left: 32px;
    cursor: pointer;
  }
  .article {
    position: absolute;
    top: 165px;
    width: 83px;
    left: 53px;
    .line {
      width: 30%;
      height: 3px;
      background-color: white;
      border-radius: 50px;
    }
    .number {
      font-weight: 500;
      font-size: 1.2rem;
      text-align: center;
    }
    .string {
      font-weight: 500;
      font-size: 0.8rem;
      text-align: center;
    }
    .line2 {
      width: 30%;
      height: 3px;
      background-color: white;
      border-radius: 50px;
    }
  }
`;


export default Dives;