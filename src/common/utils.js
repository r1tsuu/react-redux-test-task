/**
 * @param {string} baseUrl
 * @param {string} language
 * @param {string} route
 * @param  {string[]} params
 * @returns {string}
 */
const getFetchURL = (baseUrl, language, route, ...params) => {
  /* from [param1, param2, param3...] to 'param1/param2/param3...' */
  const paramsReduced = params.reduce((prev, current) => prev + "/" + current);

  return baseUrl + "/" + route + "/" + language.toLowerCase() + "/" + paramsReduced;
};

export const utils = {
  getFetchURL,
};
