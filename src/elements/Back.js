import React from 'react';
import styled from 'styled-components';
import Ba from "../assets/hero1.png";

const Back = (props) => {
  const {children} = props;

  return (
    <BackBox>{children}</BackBox>
  );
};

Back.defaultProps = {
  children: null,
};

const BackBox = styled.div`
  background: url(${Ba}) no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Back;