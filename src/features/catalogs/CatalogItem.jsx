import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title } from "../../common/components/Title";

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffe9e4;
  color: ${(props) => props.theme.colors.primary};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  :hover {
    background-color: #002e5d;
    color: white;
  }
`;

const Item = styled.li`
  height: 300px;
  list-style-type: none;
  padding: 0;
  flex: 1 1 calc((100% / 3) - 2rem);
  @media (max-width: 750px) {
    flex: 1 1 calc((100% / 1) - 2rem);
    height: 100px;
  }
`;

export const CatalogItem = ({ catalog }) => {
  return (
    <Item>
      <StyledLink to={`/catalog/` + catalog.url.ua}>
        <Title>{catalog.categoryName}</Title>
      </StyledLink>
    </Item>
  );
};
