import React from "react";
import styled from "styled-components";
import { Container } from "../../common/components/Container";
import { Catalogs } from "../../features/catalogs/Catalogs";
import { PageWrapper } from "../PageWrapper";

const HomeCategories = styled.section`
  padding: 50px 0;
`;

const HomeHeader = styled.header`
  text-decoration: lightgreen;
  width: 100%;
  font-weight: 800;
  color: ${(p) => p.theme.colors.primary};
  font-size: 48px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 29px;
  }
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <HomeCategories>
        <HomeHeader>Catalogs List</HomeHeader>
        <Container>
          <Catalogs />
        </Container>
      </HomeCategories>
    </PageWrapper>
  );
};

export default HomePage;
