import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const {placeholder, onChange, type, margin, width, padding, height,value} = props;

  const styled = { width, margin, padding, height }

  return (
    <InputBox
      {...styled}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  type: '',
  onChange: () => {},
  width: '',
  margin: '',
  padding: '',
  height:'',
  value:''
};

const InputBox = styled.input`
  background-color:  rgba(255, 255, 255, 0.5);;
  border: none;
  ${(props) => (props.width ? `width:${props.width};` : '')};
  ${(props) => (props.height ? `height:${props.height};` : '')};
  padding: 11px;
  border-radius: 5px;
  ::placeholder {
  color: black;
  }
  :focus{
    outline: none;
  }
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`


export default Input;