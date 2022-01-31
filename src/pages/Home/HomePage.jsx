import React from 'react';
import styled from 'styled-components';
import { Container } from '../../common/components/Container';
import { Catalogs } from '../../features/catalogs/Catalogs';

const HomeCategories = styled.section`
  padding: 50px 0;
`;

const PageWrapper = styled.main`
  min-height: calc(100vh - 346px);
  padding-top: 79px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <HomeCategories>
        <Container>
          <Catalogs/>    
        </Container>      
      </HomeCategories>
    </PageWrapper>
  )
};

export default HomePage;
