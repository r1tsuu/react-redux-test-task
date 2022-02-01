import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: calc(100vh - 346px);
  padding-top: 79px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;