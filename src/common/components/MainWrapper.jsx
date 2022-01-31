import styled from "styled-components";

export const MainWrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSize};
  background-color: ${(props) => props.theme.bg};
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`