import { catalogsApi } from "../src/api/catalogsApi";

async function fetchAllCatalogs () {
  console.log(await catalogsApi.fetchAll())
}

(async () => {
  fetchAllCatalogs()
})()