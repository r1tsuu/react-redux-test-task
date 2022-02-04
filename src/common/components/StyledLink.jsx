import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
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