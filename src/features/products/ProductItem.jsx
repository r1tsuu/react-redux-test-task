import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../common/components/Title';
import { utils } from '../../common/utils';

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  width: 100%;
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
    //background-color:${(props) => props.theme.colors.primary} ;
    color: white;
  }
`;

const Item = styled.li`
  display: flex;
  max-width: 200px;
  padding: 0;
  flex: 1 1 calc((100% / 5) - 2rem);
  @media (max-width: 750px) {
    flex: 1 1 calc((100% / 1) - 2rem);
    height: 100px;
  }
`;

export const ProductItem = ({product}) => {
  return (
    <Item>
      <StyledLink to ='/'>
        <Image src={utils.getImageURL(product.image)}/>
        <Title>{product.title}</Title>
      </StyledLink>
    </Item>
  )
};
