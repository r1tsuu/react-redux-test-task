import { utils } from "../common/utils";
import { client } from "./api";

export const filtersApi = {
  fetchByCatalog: async (catalogId) => {
    if (!catalogId || typeof catalogId !== "string")
      throw new Error(`Unexcpected catalog id, catalog: ${catalogId} `);
    const path = utils.getPath("catalog/filters", catalogId);
    return await client.get(path);
  },
};
