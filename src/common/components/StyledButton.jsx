import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 25px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  margin: 10px;
  width: 75%;
  background-color: #ffe9e4;
  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
