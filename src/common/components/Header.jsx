import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Container";
import { StyledLink } from "./StyledLink";

const HeaderText = styled.h3`
  font-size: 48px;
  @media (max-width: 900px) {
    font-size: 29px;
  }
`;

const HeaderContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: black;
  justify-content: space-between;
`;

const Content = styled.header`
  display: flex;
  height: 80px;
  padding: 17px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: white;
  box-shadow: 10px 5px 5px #a8a8aa;
  @media (max-width: 680px) {
    visibility: hidden;
  }
`;

export const Header = () => {
  const location = useLocation()
  const isHomeLocation = (location.pathname === '/')
  return (
    <Content> 
      <HeaderContainer>
        { !isHomeLocation && <StyledLink to='/'> <HeaderText>Catalogs</HeaderText> </StyledLink> }
      </HeaderContainer>
    </Content>
  );
};
