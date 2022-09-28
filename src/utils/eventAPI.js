import tokenService from './tokenService';
const BASE_URL = '/api/events';

export function create(event) {
  return fetch(BASE_URL, {
    method: 'POST',
    body: event,
    headers: {
      Authorization: 'Bearer ' + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) {
      console.log(res.json(), '<< res.json() from create(): eventAPI');
      return res.json();
    }

    return res.json().then((response) => {
      throw new Error(response.err, '<< response.err create(): eventAPI');
    });
  });
}

export function getAll() {
  return fetch(BASE_URL, {
    headers: {
      Authorization: 'Bearer ' + tokenService.getToken(), // This grabs thee JWT token out
      // local storage and send its in the header to the server
    },
  }).then((res) => {
    if (res.ok) return res.json();

    return res.json().then((response) => {
      console.log(response);
      throw new Error(response.err, '<< response.err create(): eventAPI');
    });
  });
}
