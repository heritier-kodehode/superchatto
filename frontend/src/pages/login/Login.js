import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const LoginForm = styled.form`
  height: 350px;
  width: 250px;
  margin: 100px auto 0 auto;
  border: 1px solid blue;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const InputStyled = styled.input`
  margin: 6px 0 10px 0;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const NavLinker = styled(NavLink)`
  margin: 0 0 0 10px;
`;

const ButtonStyled = styled.button`
  padding: 8px 0;
  font-weight: 900;
  background-color: orange;
  margin: 15px 0;
`;

const LabelCostume = styled.label`
  margin-top: 5px;
`;
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <LoginContainer>
      <LoginForm>
        <LabelCostume htmlFor='email'>Email:</LabelCostume>
        <InputStyled id='email' placeholder='Enter email' />
        <LabelCostume htmlFor='password'>Password:</LabelCostume>
        <InputStyled id='password' placeholder='Enter password' />
        <ButtonStyled>Login</ButtonStyled>
      </LoginForm>
      <LinkContainer>
        <span>New user?</span>
        <NavLinker to='/register'>Register User!</NavLinker>
      </LinkContainer>
    </LoginContainer>
  );
}

export default Login;
