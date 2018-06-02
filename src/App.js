import React, { Component } from 'react';
import Form from './profile/components/Form/Form';
import styled from 'styled-components';
import steamLogo from './profile/img/steam-logo.svg';

const App = ({ className }) => (
  <CSSVariables>
    <div className={`App ${className}`}>
      <HeaderContainer className="header__container">
        <Logo className="logo" src={steamLogo} />
        <Header className="header">SteamID Information Retriever</Header>
      </HeaderContainer>
      <Form />
    </div>
  </CSSVariables>
);

const CSSVariables = styled.div`
  --bg-color: #394263;
  --white: #ffffff;
  --light-green: #03bea4;
`;

const Header = styled.div`
  display: block;
  font-size: 3.2rem;
  font-weight: 500;
  color: var(--white);
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  display: inline-block;
  padding-right: 10px;
  padding-bottom: 6px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const StyledApp = styled(App)`
  width: 100%;
  height: 100vh;
  background-color: var(--bg-color);
  position: relative;
`;

export default StyledApp;
