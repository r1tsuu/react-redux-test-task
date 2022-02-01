import { Base64 } from "js-base64";
import { config } from "../app/config";
import { DOTJPG } from "./constants";

/**
 * @param {string} baseUrl
 * @param {string} language
 * @param {string} path
 * @param  {string} query
 * @returns {string} URL
 */
const getFetchURL = (path, query='') => {
  return config.apiURL + "/" + path + "/" + config.apiLanguage.toLowerCase() + "/" + query;
};

const getImageURL = (urlFromApi) => {
  return (
    config.url + config.apiLanguage.toLowerCase() + urlFromApi.split(".")[1] + DOTJPG
  );
};

const filterIdsToUrl = (...ids) => {
  return ids.reduce((prev, current) => prev + "," + current);
};

export const utils = {
  getFetchURL,
  getImageURL,
};
