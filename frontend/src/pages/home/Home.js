import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Friend from '../../components/friend/friend';
import { Context } from '../../App';
import userImg from '../../images/useravatar.jpg';
const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const ChattContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  border: 1px solid darkblue;
  margin: 0 auto;
  padding: 0 30px;
`;
const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  border: 1px solid yellow;
`;

const UserText = styled.p`
  color: violet;
  background-color: antiquewhite;
`;
const FriendText = styled.p`
  color: purple;
  background-color: antiquewhite;
`;
const MessageArea = styled.div`
  display: flex;
  flex-direction: row;
`;
const SendBtn = styled.button`
  background-color: purple;
  color: white;
`;
const MessageInput = styled.input`
  width: 100%;
  height: 26px;
  padding: 5px;
`;

function Home() {
  return (
    <HomeContainer>
      <FriendContainer>
        <Friend user={{ title: 'User1' }} img={userImg} />
        <Friend user={{ title: 'Admin' }} img={userImg} />
        <Friend user={{ title: 'Guest' }} img={userImg} />
      </FriendContainer>
      <ChattContainer>
        <UserText>Hello</UserText>
        <FriendText>Hello</FriendText>
        <UserText>Hello</UserText>
        <FriendText>Hello</FriendText>
        <MessageArea>
          <MessageInput />
          <SendBtn>Send</SendBtn>
        </MessageArea>
      </ChattContainer>
    </HomeContainer>
  );
}

export default Home;
