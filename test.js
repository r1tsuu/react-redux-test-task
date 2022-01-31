const LANGUAGE = '/ua/'

const BASE_URL = 'https://vestfrost.ua/api/'

const client = (url, ...params) => {
  paramsURL = params.reduce( (prev, current) => (prev + '/' + current) )
  return BASE_URL + url + LANGUAGE + paramsURL
}

const string1 = 'qwe'
const string2 = 'rty'
const string3 = 'uio'


console.log(client('catalog', 'param1', 'param2', 'param3'))

console.log(3 % 2)