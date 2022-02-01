import { utils } from "../common/utils";
import { client } from "./api";

export const catalogsApi = {
  fetchAll: async () => {
    const path = utils.getPath("catalog");
    return await client.get(path);
  },
};
