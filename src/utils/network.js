import { HTTP, HTTPS } from "@constants/api";

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {Strings} - url с HTTPS
 *
 */

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 *
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (url) => {
  const request = url.map((res) => {
    return fetch(res).then((res) => res.json());
  });

  const res = await Promise.all(request);

  return res;
};

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body))

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();
