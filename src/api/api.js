import axios from "axios";
import { utils } from "../common/utils";

export const client = {
  get: async (route, query) => {
    const URL = utils.getFetchURL(route, query);
    const response = await axios.get(URL);
    return await response.data;
  },
};