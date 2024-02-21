import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const instance = axios.create({
  baseURL: API_URL,
});
