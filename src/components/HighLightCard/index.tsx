import React from 'react';

import {
  Container,
  Header,
  Title,
  Footer,
  Amount,
  LastTransaction,
  SampleIcon,
} from './styles';

interface HighLightCardProps {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
}

const HighLightCard: React.FC<HighLightCardProps> = ({
  type,
  title,
  amount,
  lastTransaction,
}) => {
  const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
  };
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <SampleIcon name={icon[type]} source="Feather" type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighLightCard;
