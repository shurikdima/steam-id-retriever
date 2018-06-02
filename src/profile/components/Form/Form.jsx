import React, { Component } from 'react';
import styled from 'styled-components';

class Form extends Component {
  render() {
    return (
      <form className={`form ${this.props.className}`}>
        <Label className="label">
          Enter Steam client ID
          <br />
          <Input className="form__input" type="text" name="name" />
        </Label>
        <Button className="form__button" type="submit" value="Submit" />
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
  background: var(--light-green);
  border: none;
  padding: 10px 16px;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--white);

  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.label`
  font-size: 1.8rem;
`;

const StyledForm = styled(Form)`
  display: inline-block;
  background-color: var(--white);
  box-shadow: 0px 0px 30px 4px #333;
  position: absolute;
  left: 50%;
  top: 160px;
  border-radius: 4px;
  transform: translateX(-50%);
  padding: 40px 80px 30px 80px;
  text-align: center;
`;

export default StyledForm;