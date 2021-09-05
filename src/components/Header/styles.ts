import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFPercentage(42)}px;
  width: 100%;
  justify-content: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  background-color: red;
  padding: 0 24px;
`;

export const UserWrapper = styled.View`
  margin-left: 18px;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;
export const UserName = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;
export const UserGreeting = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.shape};
`;
