import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFPercentage(42)}px;
  width: 100%;
`;
