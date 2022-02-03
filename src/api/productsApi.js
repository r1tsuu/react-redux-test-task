import { client } from "./api";
import { utils } from "../common/utils";

export const productsApi = {
  /**
   * @param {string} catalogUrl example: 'holodilniki'
   * @param {string} filter filters splitted by comma
   */
  fetchByCatalog: async (catalogUrl, filter) => {
    if (!catalogUrl || typeof catalogUrl !== "string")
      throw new Error(
        `Unexcpected catalog url value, catalog url: ${catalogUrl}`
      );
    const path = utils.getPath("catalog", catalogUrl);
    console.log(filter);
    const query = { filter: filter ? filter : null };
    return await client.get(path, query);
  },
};
