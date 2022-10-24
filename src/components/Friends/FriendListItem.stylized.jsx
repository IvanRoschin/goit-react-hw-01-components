import styled from '@emotion/styled';

export const FriendIsOnline = styled.span`
  background-color: #00ff00;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block; 
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%) } 
`;

export const FriendIsOffline = styled.span`
  background-color: #ff0000;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block; 
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%) } 
`;

export const FriendAvatar = styled.img`
  dispay: block;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const FriendName = styled.p`
  font-size: 25px;
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translate(0, -50%) } 
`;
