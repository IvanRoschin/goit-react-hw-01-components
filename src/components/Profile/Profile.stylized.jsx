import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 400px;
`;

export const ProfileDescription = styled.div`
  width: 400px;
  padding: 0;
`;

export const ProfileAvatar = styled.img`
  border-radius: 50px;
  display: block;
  width: 100px;
  height: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const ProfileName = styled.p`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProfileTag = styled.p`
  text-align: center;
  color: #768696;
  margin-bottom: 10px;
`;

export const ProfileLocation = styled.p`
  text-align: center;
  color: #768696;
  margin-bottom: 20px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: #f3f6f9;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.4%;
  text-align: center;
  border: 1px solid #eeeeee;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ProfileStatsLabel = styled.span`
  font-weight: bold;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: normal;
`;
