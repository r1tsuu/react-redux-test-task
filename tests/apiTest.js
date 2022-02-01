/* eslint-disable no-unused-vars */

/* node -r esm apiTest.js */

import { catalogsApi } from "../src/api/catalogsApi";
import { filtersApi } from "../src/api/filtersApi";
import { productsApi } from "../src/api/productsApi";

/** catalogs fetch */
// {
//     _id: '5f27df315b1900000079be1c',
//     categoryName: 'Холодильники',
//     categoryIcon: './upload/0/1596698117054-Union.svg',
//     showHome: true,
//     color: '#686DE0',
//     url: { ua: 'holodilniki', ru: 'holodilniki' }
//   },

/** products fetch */
// products: [
//     {
//       _id: '5f5f68dee905e10000726f50',
//       title: 'CNF 201 X',
//       image: './upload/0/compression/1600090115989-201 h .jpg',
//       url: [Object]
//     },
//     {
//       _id: '5f5f6d1be905e10000726f9b',
//       title: 'CNF 201 DX',
//       image: './upload/0/compression/1600089396876-201 dh .jpg',
//       url: [Object]
//     },

/** Filters fetch */
// [
//   {
//     _id: '5f44cf6264d2da0000629a06',
//     group_title: 'Колір',
//     filters: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
//   },
//   {
//     _id: '5f311538bcaf720000953027',
//     group_title: 'Енергозбереження',
//     filters: [ [Object], [Object], [Object] ]
//   },
//   {
//     _id: '5f44f55b0627a9000079b831',
//     group_title: 'Тип холодильника',
//     filters: [ [Object], [Object] ]
//   },


(async (f) => {
  f(await filtersApi.fetchAllByCatalog("5f27df315b1900000079be1c"));
})(console.log);
