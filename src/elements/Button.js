import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {text, _onClick, children, margin, width, padding, height, active, bg, color, br, top, left } = props;

  const styled = { margin, width, height, padding, bg, color, br, top, left }

  return (
    <Btn
      {...styled}
      onClick={_onClick}
      {...active}
    >
      {text? text : children}
    </Btn>
  );
};

Button.defaultProps = {
  text: '',
  children: null,
  _onClick: () => { },
  margin: '',
  width: '',
  height: '',
  padding: '',
  active: false,
  bg: '',
  color: '',
  br: '',
  top: '',
  left:''
};

const Btn = styled.button`
  background-color: ${(props) => (props.bg==='red' ? '#DF0000' : '#fff')};;
  border: 0;
  ${(props) => (props.br ? `border-radius:${props.br};` : '')};
  box-shadow: 0 1px 1px 1px rgba(113, 113, 113, 0.3);
  color: ${(props)=>(props.color==='black'?'#000000':'#fff')};
  ${(props) => (props.width ? `width:${props.width};` : '')};
  ${(props) => (props.margin ? `margin:${props.margin};` : '')};
  ${(props) => (props.height ? `height:${props.height};` : '')};
  ${(props) => (props.padding ? `padding:${props.padding};` : '')};
  cursor: pointer;
  position: absolute;
  ${(props) => (props.top ? `top:${props.top};` : '')};
  ${(props) => (props.left ? `left:${props.left};` : '')};
  font-weight: 700;
`


export default Button;