import React from 'react';
import Header from '../../components/Header';
import HighLightCard from '../../components/HighLightCard';

import {Container, HighLightCards} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header onPress={() => {}} />
      <HighLightCards>
        <HighLightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLightCard
          type="down"
          title="Saídas"
          amount="R$ 7.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighLightCard
          type="total"
          title="Total"
          amount="R$ 16.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
      </HighLightCards>
    </Container>
  );
};

export default Dashboard;
