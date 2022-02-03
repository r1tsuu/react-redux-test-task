import { config } from "../app/config";
import { buildUrl } from "../../node_modules/build-url/dist/build-url";

const getPath = (path, pathParams = "") =>
  path + `/${config.apiLanguage.toLowerCase()}/` + pathParams;

const getFetchUrl = (path, query) => {
  return buildUrl(config.apiURL, {
    path: path,
    queryParams: query,
  });
};

const getImageURL = (urlFromApi) => {
  const splitted = urlFromApi.split(".");
  return config.url + splitted[1] + "." + splitted[2];
};

const combineFilters = (filters) => {
  return filters.reduce((prev, next) => prev + "," + next);
};

/**
 * 
 * @param {string} urlFilter 
 * @param {Array<{value: string}>} options 
 * @returns {string}
 */
const findUrlFilterInOptions = (urlFilter, options) => {
  const filters = urlFilter.split(',')
  return options.find((option) => filters.find((filter) => filter === option.value) )
}

export const utils = {
  getPath,
  getFetchUrl,
  getImageURL,
  combineFilters,
  findUrlFilterInOptions
};
