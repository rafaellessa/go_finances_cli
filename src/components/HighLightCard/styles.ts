/* eslint-disable no-sequences */
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import Icon, {IconItem} from '../Icon';

interface TransactionTypeProps {
  type: 'up' | 'down' | 'total';
}

interface IconProps extends IconItem {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TransactionTypeProps>`
  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TransactionTypeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const SampleIcon = styled(Icon).attrs(({name, source}: IconProps) => ({
  name,
  source,
}))<IconProps>`
  font-size: ${RFValue(40)}px;
  ${({type}) =>
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
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TransactionTypeProps>`
  font-size: ${RFValue(32)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TransactionTypeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;
