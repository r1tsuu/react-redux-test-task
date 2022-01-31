import { Oval } from "react-loader-spinner";

export const Loader = ( {size='150', color='black', ariaLabel='loading'} ) => {
  return (
    <Oval height={size} width={size} color={color} ariaLabel={ariaLabel}/>
  )
}