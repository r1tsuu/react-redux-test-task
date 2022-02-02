/* eslint-disable no-unused-vars */

/** Node.js with es6 imports run */
/* node -r esm apiTest.js */

import { catalogsApi } from "../src/api/catalogsApi";
import { filtersApi } from "../src/api/filtersApi";
import { productsApi } from "../src/api/productsApi";

/**  API SHOWCASES NOTE */
/**  API SHOWCASES NOTE */
/**  API SHOWCASES NOTE */

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
  f(await filtersApi.fetchByCatalog("5f27df315b1900000079be1c"));
})(console.log);




// https://vestfrost.ua/api/catalog/filters/ua/5f46593f1d374400006404b2
// Server response
// Code	Details
// 200	
// Response body
// Download
// [
//   {
//     "_id": "5f63407a077b28000086148b",
//     "group_title": "Тип плити",
//     "filters": [
//       {
//         "value": "5f6340b1077b28000086148c",
//         "label": "Комбінована"
//       },
//       {
//         "value": "5f6340c1077b28000086148d",
//         "label": "Газова"
//       }
//     ]
//   },
//   {
//     "_id": "5f61d338fbe07d0000a41bea",
//     "group_title": "Колір ",
//     "filters": [
//       {
//         "value": "5f61d374fbe07d0000a41beb",
//         "label": "Чорний"
//       },
//       {
//         "value": "5f61d38bfbe07d0000a41bec",
//         "label": "Нержавіюча сталь"
//       },
//       {
//         "value": "5f620507d5f9bd00003a7493",
//         "label": "Білий"
//       },
//       {
//         "value": "5fbfb59f1dcb1700004dbccc",
//         "label": "Бежевий"
//       }
//     ]
//   },
//   {
//     "_id": "5f6340ff077b28000086148e",
//     "group_title": "Тип духової шафи",
//     "filters": [
//       {
//         "value": "5f63411a077b28000086148f",
//         "label": "Електричний"
//       },
//       {
//         "value": "5f634128077b280000861490",
//         "label": "Газовий"
//       }
//     ]
//   },
//   {
//     "_id": "5f352e30a43ee50000e29cb8",
//     "group_title": "Кількість конфорок",
//     "filters": [
//       {
//         "value": "5f352f89a43ee50000e29cc6",
//         "label": "4"
//       },
//       {
//         "value": "5f352f8da43ee50000e29cc7",
//         "label": "5"
//       }
//     ]
//   }
// ]
