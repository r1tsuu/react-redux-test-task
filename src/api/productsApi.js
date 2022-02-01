import { client } from "./api";
import { utils } from "../common/utils";

export const productsApi = {
  fetchByCatalog: async (catalogUrl, filter = "") => {
    if (!catalogUrl || typeof catalogUrl !== "string")
      throw new Error(`Unexcpected catalog url value, catalog url: ${catalogUrl}`);
    const path = utils.getPath("catalog", catalogUrl);
    const query = { filter: filter };
    return await client.get(path, query);
  },
};
