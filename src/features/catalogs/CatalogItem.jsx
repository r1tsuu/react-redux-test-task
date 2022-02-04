import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title } from "../../common/components/Title";
import { utils } from "../../common/utils";

const Image = styled.img`
  display: block;
  width: 150px;
  height: 150px;
`;

const ImageContainer = styled.span`
  text-align: center;
  margin-top: 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
  &:hover {
    text-decoration: none;
  }
  :hover {
    color: white;
    background-color: blue;
    .img {
      background-color: #ffe9e4;
    }
  }
`;

const Item = styled.li`
  height: 300px;
  list-style-type: none;
  padding: 0;
  flex-grow: 0;
  flex-shrink: 0;
  flex: 0 0 calc((100% / 3) - 2rem);
  @media (max-width: 750px) {
    flex: 0 0 calc((100% / 1) - 2rem);
    height: 100px;
  }
`;

export const CatalogItem = ({ catalog }) => {
  return (
    <Item>
      <StyledLink to={`/catalog/` + catalog.url.ua}>
        <ImageContainer>
          <Image
            className="img"
            src={utils.getImageURL(catalog.categoryIcon)}
          />
        </ImageContainer>
        <Title>{catalog.categoryName}</Title>
      </StyledLink>
    </Item>
  );
};
