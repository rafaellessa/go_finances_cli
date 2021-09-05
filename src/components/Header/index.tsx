import React from 'react';

import {
  Container,
  User,
  Photo,
  UserName,
  UserGreeting,
  UserWrapper,
  UserInfo,
  IconSignOut,
  IconWrapper,
  ContentWrapper,
} from './styles';

interface HeaderProps {
  onPress: () => void;
}

const Header: React.FC<HeaderProps> = ({onPress}) => {
  return (
    <Container>
      <ContentWrapper>
        <UserInfo>
          <User>
            <Photo source={{uri: 'https://github.com/rafaellessa.png'}} />
            <UserWrapper>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Rafael Lessa</UserName>
            </UserWrapper>
          </User>
        </UserInfo>
        <IconWrapper onPress={onPress}>
          <IconSignOut />
        </IconWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
