import React from 'react';

import {
  Container,
  Photo,
  UserName,
  UserGreeting,
  UserWrapper,
  UserInfo,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <UserInfo>
        <Photo source={{uri: 'https://github.com/rafaellessa.png'}} />
        <UserWrapper>
          <UserGreeting>Olá</UserGreeting>
          <UserName>Rafael Lessa</UserName>
        </UserWrapper>
      </UserInfo>
    </Container>
  );
};

export default Header;
