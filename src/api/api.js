import axios from "axios";
import { config } from "../app/config";
import { utils } from "../common/utils";

export const client = {
  get: async (route, ...params) => {
    const URL = utils.getFetchURL(
      config.apiURL,
      config.apiLanguage,
      route,
      params
    );
    const response = await axios.get(URL);
    return await response.data;
  },
};
