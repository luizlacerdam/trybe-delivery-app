import fetchAPI from './fetchApi';

export default async function postAPI(path, callback, body) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  await fetchAPI(path, callback, options);
}
