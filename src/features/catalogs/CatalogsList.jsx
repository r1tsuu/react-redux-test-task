import styled from "styled-components";
import { CatalogItem } from "./CatalogItem";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 3rem;
  @media (max-width: 767) {
    flex-direction: column;
  }
`;

export const CatalogsList = ({ catalogs }) => {
  console.log(catalogs);
  return (
    <List>
      {catalogs.map((catalog) => (
        <CatalogItem catalog={catalog} key={catalog._id} />
      ))}
    </List>
  );
};
