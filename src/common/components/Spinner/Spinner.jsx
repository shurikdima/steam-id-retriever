import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Spinner = () => (
  <Background>
    <Circle />
  </Background>
);

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--white-bg);
`;

const rotate = keyframes`
 to { transform: rotate(360deg); }
`;

const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -10px 0 0 -10px;
    border-radius: 50%;
    border-top: 2px solid #07d;
    border-right: 2px solid transparent;
    animation: ${rotate} 1s linear infinite;
  }
`;

export default Spinner;
