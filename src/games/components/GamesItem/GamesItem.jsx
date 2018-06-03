import React, { Component } from 'react';
import styled from 'styled-components';

class GamesItem extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Name>game name</Name>
        <Hours>hours plated</Hours>
        <AppID>app id</AppID>
      </div>
    )
  }
}

const StyledGamesItem = styled(GamesItem)`
  width: 100%;
  padding: 10px 0;
  background-color: red;
  margin: 10px 0;
  display: flex;
  font-size: 1.6rem;

  &:first-child {
    margin-top: 60px;
  }

  &:last-child {
    margin-bottom: 60px;
  }
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

export default StyledGamesItem;
