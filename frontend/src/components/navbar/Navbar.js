import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import userImg from '../../images/useravatar.jpg';
const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
`;

const NavLinker = styled(NavLink)`
  width: 20px;
  height: 20px;
`;
const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border: 3px solid black;
  border-radius: 50%;
`;
const LogoutBtn = styled.button`
  color: darkblue;
`;

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout);
    dispatch(reset);
    navigate('/');
  };
  return (
    <NavContainer>
      <UserImg src={userImg} alt='userImg' />
      <NavLinksContainer>
        {user ? (
          <>
            <LogoutBtn onClick={onLogout}>LOGOUT</LogoutBtn>
          </>
        ) : (
          <>
            <NavLinker to='/'>Home</NavLinker>
            <NavLinker to='/login'>Login</NavLinker>
            <NavLinker to='register'>Register</NavLinker>
          </>
        )}
      </NavLinksContainer>
    </NavContainer>
  );
}

export default Navbar;
