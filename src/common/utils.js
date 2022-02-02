import { config } from "../app/config";
import { DOTJPG } from "./constants";
import { buildUrl } from "../../node_modules/build-url/dist/build-url";

const getPath = (path, pathParams = "") =>
  path + `/${config.apiLanguage.toLowerCase()}/` + pathParams;

const getFetchUrl = (path, query) => {
  return buildUrl(config.apiURL, {
    path: path,
    queryParams: query
  });
};

const getImageURL = (urlFromApi) => {
  return (
    config.url +
    urlFromApi.split(".")[1] +
    DOTJPG
  );
};

const combineFilters = (filters) => {
  return filters.reduce((prev, next) => prev + ',' + next)
}

export const utils = {
  getPath,
  getFetchUrl,
  getImageURL,
  combineFilters
};
