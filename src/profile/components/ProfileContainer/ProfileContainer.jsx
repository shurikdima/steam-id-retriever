import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import ProfileRow from '../ProfileRow/ProfileRow';
import userLogo from '../../img/user-logo.svg';

class ProfileContainer extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Avatar src={userLogo} />
        <Name>
          <Status />
          shurikdima
        </Name>
        <Hr />
        {_.range(2).map(number => (
          <ProfileRow key={`row-${number + 1}`} className={`profile-row-${number + 1}`} />
        ))}
        <Button type="submit" value="Games" />
      </div>
    );
  }
}

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 40px;
`;

const Name = styled.div`
  font-size: 1.6rem;
  color: var(--white);
  display: inline-block;
  margin: 10px 0;
`;

const Status = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--green);
  display: inline-block;
  border-radius: 50%;
  margin-right: 8px;
`;

const Hr = styled.hr`
  width: 90%;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(65, 65, 65, 0.4);
  margin-bottom: 10px;
`;

const Button = styled.input`
  border: none;
  font-size: 1.4rem;
  padding: 8px 24px;
  border-radius: 20px;
  margin-top: 24px;
  text-transform: uppercase;
  background: var(--light-green);
  font-family: "Roboto";

  &:hover {
    cursor: pointer;
  }
`;

const StyledProfileContainer = styled(ProfileContainer)`
  background: linear-gradient(#141e30, #243b55);
  position: absolute;
  width: 300px;
  height: 500px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 12px;
  box-shadow: 0px 0px 16px 2px;
`;

export default StyledProfileContainer;
