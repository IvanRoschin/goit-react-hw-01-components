import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadowbox.profile};
  padding-top: ${p => p.theme.space[4]}px;
  margin-right: auto;
  margin-left: auto;
  width: 400px;
`;

export const ProfileAvatar = styled.img`
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal};
  display: block;
  width: 100px;
  height: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const ProfileName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ProfileTag = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
  color: ${p => p.theme.colors.graytext};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ProfileLocation = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
  color: ${p => p.theme.colors.graytext};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: ${p => p.theme.colors.gratbackprim};
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.4%;
  text-align: center;
  border: ${p => `1px solid ${p.theme.colors.gratbacksec}`};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const ProfileStatsLabel = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;
