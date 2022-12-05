import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../features/auth/authSlice';
import Spinner from '../../components/spinner/Spinner';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const RegisterContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const RegisterForm = styled.form`
  height: 350px;
  width: 250px;
  margin: 100px auto 0 auto;
  border: 1px solid blue;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const InputStyled = styled.input`
  margin: 10px 0 15px 0;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const LabelCostume = styled.label`
  margin-top: 10px;
`;

const NavLinker = styled(NavLink)`
  margin: 0 0 0 10px;
`;
const ButtonStyled = styled.button`
  padding: 8px 0;
  font-weight: 900;
  background-color: orange;
`;
function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordconfirm: '',
  });
  const { username, email, password, passwordconfirm } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordconfirm) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        username,
        email,
        password,
        passwordconfirm,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <RegisterContainer>
      <RegisterForm onSubmit={onSubmit}>
        <LabelCostume htmlFor='username-register-input'>Username:</LabelCostume>
        <InputStyled
          type='text'
          id='username'
          placeholder='Enter username'
          name='username'
          value={username}
          onChange={onChange}
        />
        <LabelCostume htmlFor='email-register-input'>Email:</LabelCostume>
        <InputStyled
          type='email'
          id='email'
          placeholder='Enter a valid email'
          name='email'
          value={email}
          onChange={onChange}
        />

        <LabelCostume htmlFor='password-register-input'>Password:</LabelCostume>
        <InputStyled
          type='password'
          id='password'
          placeholder='Enter password'
          name='password'
          value={password}
          onChange={onChange}
        />
        <LabelCostume htmlFor='password-register-input'>
          Password confirm:
        </LabelCostume>
        <InputStyled
          type='password'
          id='passwordconfirm'
          placeholder='Enter password confirm'
          name='passwordconfirm'
          value={passwordconfirm}
          onChange={onChange}
        />
        <ButtonStyled>register</ButtonStyled>
      </RegisterForm>
      <LinkContainer>
        <span>Allready have an account?</span>
        <NavLinker to='/login'>Login User!</NavLinker>
      </LinkContainer>
    </RegisterContainer>
  );
}

export default Register;
