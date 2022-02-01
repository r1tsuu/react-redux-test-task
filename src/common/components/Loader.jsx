import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const LoaderDiv = styled.div`
  width: 100%;
`
export const Loader = ( {size='150', color='black', ariaLabel='loading'} ) => {
  return (
    <LoaderDiv>
      <Oval height={size} width={size} color={color} ariaLabel={ariaLabel} />
    </LoaderDiv>
  );
}