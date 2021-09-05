import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Icon, {IconItem} from '../Icon';
import {TouchableOpacity} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFPercentage(42)}px;
  width: 100%;
`;

export const ContentWrapper = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const User = styled.View`
  flex-direction: row;
`;

export const UserInfo = styled.View`
  flex-direction: row;
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

export const IconWrapper = styled(TouchableOpacity)``;

export const IconSignOut = styled(Icon).attrs(({size}: IconItem) => ({
  source: 'Feather',
  name: 'power',
  size: size ? RFValue(size) : RFValue(24),
}))`
  color: ${({theme}) => theme.colors.secondary};
`;
