import axios from "axios";
import { utils } from "../common/utils";

export const client = {
  get: async (path, query) => {
    const url = utils.getFetchUrl(path, query);
    console.log(url)
    const response = await axios.get(url);
    return response.data;
  },
};
