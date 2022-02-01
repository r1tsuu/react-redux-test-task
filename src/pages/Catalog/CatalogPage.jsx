import React from "react";
import styled from "styled-components";
import { Container } from "../../common/components/Container";
import { Catalogs } from "../../features/catalogs/Catalogs";
import { Products } from "../../features/products/Products";
import { PageWrapper } from "../PageWrapper";
import { useCatalogParams } from "./useCatalogParams";

const CatalogTitle = styled.h1`
  color: ${(p) => p.theme.colors.primary};
  font-size: 40px;
  font-weight: 800;
`;

const CatalogHeading = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CatalogSection = styled.section`
  padding: 50px 0 70px;
`;

export const CatalogPage = () => {
  const catalog = useCatalogParams();
  return (
    <PageWrapper>
      <CatalogHeading>
        <CatalogTitle>{catalog}</CatalogTitle>
      </CatalogHeading>
      <Container>
        <Products catalog={catalog}/>
      </Container>
    </PageWrapper>
  );
};
