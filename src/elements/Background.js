import React from 'react';
import styled from 'styled-components';

const Background = (props) => {
  const {children} = props;
  return (
    <Back>
      {children}
    </Back>
  );
};

Background.defaultProps = {
  children : null
}


const Back = styled.div`
  background-color: #ffffff3f;
  border-radius: 20px;
  height: 90%;
  width: 90%;
  display: flex;
`


export default Background;