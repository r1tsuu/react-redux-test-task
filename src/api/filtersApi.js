import { client } from "./api";

export const filtersApi = {
  fetchAllByCatalog: async (catalogId) => {
    return await client.get("catalog/filters", catalogId);
  },
};
