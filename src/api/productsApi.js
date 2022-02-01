import { client } from "./api";

export const productsApi = {
  fetchAllByCatalog: async (catalog) => {
    return await client.get("catalog", catalog);
  },
};
