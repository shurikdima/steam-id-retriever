import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import GamesItem from '../GamesItem/GamesItem';

// a CSS grid could be used here
class GamesList extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Title>Games List</Title>
        <Hr />
        <Categories>
          <Name>Name</Name>
          <Hours>Total hours played</Hours>
          <AppID>AppID</AppID>
        </Categories>
        {_.range(3).map(number => (
          <React.Fragment key={number + 1}>
            <GamesItem key={`game-item-${number + 1}`} />
            <Hr key={`hr-${number + 1}`} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--white);
  text-align: center;
  padding-top: 18px;
`;

const Hr = styled.hr`
  width: 90%;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(65, 65, 65, 0.4);

  &:first-of-type {
    margin: 20px 0;
  }
`;

const Categories = styled.div`
  font-size: 1.6rem;
  display: flex;
  color: var(--white);
`;

const Name = styled.div`
  width: 50%;
  text-align: center;
`;

const Hours = styled.div`
  width: 25%;
  text-align: center;
`;

const AppID = styled.div`
  width: 25%;
  text-align: center;
`;

const StyledGamesList = styled(GamesList)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  min-height: 300px;
  border-radius: 8px;
  background: linear-gradient(#141e30, #243b55);
  box-shadow: 0px 0px 16px 2px;
  margin: 70px 0 40px 0;
`;

export default StyledGamesList;
