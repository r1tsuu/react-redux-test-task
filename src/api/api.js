// import axios from "axios"; Migrated from axios to fetch.
import { utils } from "../common/utils";

export const client = {
  get: async (path, query) => {
    const url = utils.getFetchUrl(path, query);
    console.log(url)
    const response = await fetch(url);
    return await response.json();
  },
};
