/* eslint-disable no-unused-vars */

/* node -r esm apiTest.js */

import { catalogsApi } from "../src/api/catalogsApi";
import { filtersApi } from "../src/api/filtersApi";
import { productsApi } from "../src/api/productsApi";

async function fetchAllCatalogs() {
  console.log(await catalogsApi.fetchAll());
}

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

(async () => {
  fetchProducts();
})();
