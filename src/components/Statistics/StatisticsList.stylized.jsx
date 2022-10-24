import styled from '@emotion/styled';

export const StatisticsCard = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding-top: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

// Generates random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: center;
  border: 1px solid #eeeeee;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${getRandomHexColor()};
`;
