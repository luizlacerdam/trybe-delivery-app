import fetchAPI from './fetchApi';

export default async function postApi(path, body) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const data = await fetchAPI(path, options);
  return data;
}
