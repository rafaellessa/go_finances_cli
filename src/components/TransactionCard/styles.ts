import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import Icon, {IconItem} from '../Icon';

interface IconProps extends IconItem {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 10px;
`;

export const SampleIcon = styled(Icon).attrs(({name, source}: IconProps) => ({
  name,
  source,
}))<IconProps>`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text};
  /* ${({type}) =>
    type === 'up' &&
    css`
      color: ${({theme}) => theme.colors.success};
    `}
  ${({type}) =>
    type === 'down' &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `}

    ${({type}) =>
    type === 'total' &&
    css`
      color: ${({theme}) => theme.colors.shape};
    `} */
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: 2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 17px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 17px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
