import { client } from "./api";

export const productsApi = {
  fetchByCatalog: async (catalog) => {
    return await client.get("catalog", catalog);
  },
  fetchByCatalogAndFilter: async (catalog, filter) => {
    return await client.get
  }
};
