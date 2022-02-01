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
    config.apiLanguage.toLowerCase() +
    urlFromApi.split(".")[1] +
    DOTJPG
  );
};

export const utils = {
  getPath,
  getFetchUrl,
  getImageURL,
};
