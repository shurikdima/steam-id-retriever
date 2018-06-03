import React, { Component } from 'react';
import styled from 'styled-components';
import { API_KEY, STEAM_ID } from '../../../steam-api/config';

class Form extends Component {
  state = {
    inputEmpty: true,
  };

  handleInputChange = (event) => {
    this.setState({ inputEmpty: event.target.value.length === 0 });
  };

  handleButtonClick = async (event) => {
    event.preventDefault();
    const requestPath = `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1?key=${API_KEY}&steamid=${STEAM_ID}`;

    // needed for CORS to work without any configuration
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(`${proxy}${requestPath}`);
    const responseJSON = await response.json();
    console.log(responseJSON.response);
  };

  render() {
    return (
      <form className={`form ${this.props.className}`}>
        <Label className="label">
          Enter Steam client ID
          <br />
          <Input
            className="form__input"
            type="text"
            name="steamID"
            onChange={this.handleInputChange}
          />
        </Label>
        <Button
          className="form__button"
          type="submit"
          value="Submit"
          disabled={this.state.inputEmpty}
          onClick={this.handleButtonClick}
        />
      </form>
    );
  }
}

const Input = styled.input`
  width: 200px;
  display: block;
  margin: 10px 0 16px 0;
  padding: 4px 0;
  font-size: 1.6rem;
`;

const Button = styled.input`
  background: ${props => (props.disabled ? 'var(--disabled)' : 'var(--light-green)')};
  border: none;
  padding: 10px 16px;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--white);
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};

  &:hover {
    cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  }
`;

const Label = styled.label`
  font-size: 1.8rem;
`;

const StyledForm = styled(Form)`
  background-color: var(--white);
  box-shadow: 0px 0px 30px 4px #333;
  border-radius: 4px;
  padding: 40px 80px 30px 80px;
  text-align: center;
  margin: 100px 0 40px 0;
`;

export default StyledForm;
