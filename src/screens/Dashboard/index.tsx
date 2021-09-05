import React from 'react';
import Header from '../../components/Header';
import HighLightCard from '../../components/HighLightCard';

import {Container, HighLightCards} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header onPress={() => {}} />
      <HighLightCards>
        <HighLightCard />
        <HighLightCard />
        <HighLightCard />
      </HighLightCards>
    </Container>
  );
};

export default Dashboard;
