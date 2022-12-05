import React from 'react';
import styled from 'styled-components';
import users from '../../data/users.json';

const FriendContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  border: 1px solid blue;
  margin: 20px auto 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
`;

const ImgContainer = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const UserTitle = styled.p`
  font-size: 20px;
`;

function Friend(props) {
  function handleUserInfo(e) {
    console.log(e.target.id);
  }
  return (
    <FriendContainer onClick={handleUserInfo} id={props.user.title}>
      <ImgContainer src={props.img} alt={props.img} />
      <UserTitle>{props.user.title}</UserTitle>
    </FriendContainer>
  );
}

export default Friend;
