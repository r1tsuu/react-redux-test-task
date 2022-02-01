/* eslint-disable no-unused-vars */

/* node -r esm apiTest.js */

import { catalogsApi } from "../src/api/catalogsApi";
import { filtersApi } from "../src/api/filtersApi";
import { productsApi } from "../src/api/productsApi";
import { config } from "../src/app/config";

async function fetchAllCatalogs() {
  console.log(await catalogsApi.fetchAll());
}

const getFetchURL = (baseUrl, language, path, query='') => {
  return baseUrl + "/" + path + "/" + language.toLowerCase() + "/" + query;
};

async function fetchProducts() {
  const catalogs = await catalogsApi.fetchAll();
  const url = catalogs[0].url.ua;
  console.log(await productsApi.fetchAllByCatalog(url));
}

async function fetchFilters() {
  const catalogs = await catalogsApi.fetchAll();
  const id = catalogs[0]._id;
  console.log(await filtersApi.getFiltersByCatalogId(id));
}

(async (f) => {
  
})(console.log);
