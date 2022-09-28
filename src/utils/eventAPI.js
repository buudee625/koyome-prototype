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
