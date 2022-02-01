import { client } from "./api";

export const filtersApi = {
  getFiltersByCatalogId: async (catalogId) => {
    return await client.get("catalog/filters", catalogId);
  },
};
