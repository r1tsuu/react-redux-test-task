import { Base64 } from "js-base64"
import { config } from "../app/config"

/**
 * @param {string} baseUrl
 * @param {string} language
 * @param {string} route
 * @param  {string[]} params
 * @returns {string}
 */
const getFetchURL = (baseUrl, language, route, ...params) => {
  /* from [param1, param2, param3...] to 'param1/param2/param3...' */
  const paramsReduced = params.reduce((prev, current) => prev + "/" + current)

  return (
    baseUrl + "/" + route + "/" + language.toLowerCase() + "/" + paramsReduced
  )
}

const getImageURL = (urlFromApi) => {
  return (
    "https://vestfrost.ua/" + "ua" + "/" + urlFromApi.split(".")[1] + ".jpg"
  )
}

const filterIdsToUrl = (...ids) => {
  return ids.reduce((prev, current) => prev + "," + current)
}

export const utils = {
  getFetchURL,
  getImageURL,
}
