import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestDataWithToken = async (endpoint, token) => {
  const { data } = await api.get(endpoint, { headers: { Authorization: token } });
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestPostWithToken = async (endpoint, body, token) => {
  const { data } = await api.post(endpoint, body, { headers: { Authorization: token } });
  return data;
};

export const requestPatchWithToken = async (endpoint, body, token) => {
  const { data } = await api.patch(endpoint, body, { headers: { Authorization: token } });
  return data;
};

export default api;
