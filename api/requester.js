
import Axios from 'axios';

let API = '';
let TOKEN = '';

/**
 * Convert object to url params
 * @param  {Object} object
 * @return {String}
 */
function object2params(object) {
  let result = [];

  for (const key in object) {
    let value = object[key];
    if (typeof value === 'object') value = object2params(value);

    result.push(`${key}=${value}`);
  }

  return result.length ? result.join('&') : '';
}


/**
 * Make GET request
 * @param  {String} url    Relative URL
 * @param  {Object} params Data to send
 * @param  {Object} config Axios config
 * @return {Promise}
 */
export function get(url, params = {}, config = {}) {
  const tokenizedParams = Object.assign(params, { appid: TOKEN });
  const serializedParams = object2params(tokenizedParams);
  debug(`Send GET %s%s?%s`, API, url, serializedParams);

  return Axios.get(API + url + '?' + serializedParams, {}, config);
}


/**
 * Configurate requester
 * @param  {String} options.url   Absolute URL for target API
 * @param  {String} options.token Auth token for API
 */
export function configurate({ url, token }) {
  if (url) {
    API = url;
  }

  if (token) {
    TOKEN = token;
  }
}
