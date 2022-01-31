import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeading = styled.h3`
  font-weight: 1000;
  font-size: 26px;
  @media (max-width: 750px) {
    font-size: 22px;
  }
  line-height: 28px;
  text-align: center;
`;

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
      <StyledLink to={'/'}>
        <StyledHeading>{catalog.categoryName}</StyledHeading>
      </StyledLink>
    </Item>
  );
};
