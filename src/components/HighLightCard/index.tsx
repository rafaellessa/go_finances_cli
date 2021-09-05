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

interface HighLightCardProps {}

const HighLightCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <SampleIcon name="arrow-up-circle" source="Feather" />
      </Header>
      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighLightCard;
