const HOST = 'localhost';
const PORT = 3001;

export default async function fetchApi(path, options) {
  try {
    const request = await fetch(`http://${HOST}:${PORT}${path}`, options);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
