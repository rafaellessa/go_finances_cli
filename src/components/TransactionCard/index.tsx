import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  SampleIcon,
  CategoryName,
  Date,
} from './styles';

interface TransactionProps {
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface DataProps {
  data: TransactionProps;
}

interface CategoryProps {
  name: string;
  icon: string;
}

const TransactionCard: React.FC<DataProps> = ({data}) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <SampleIcon name={data.category.icon} source="Feather" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
