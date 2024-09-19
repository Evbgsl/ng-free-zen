import { API_BASE_URL } from '../config.js';

export const getData = async (lang) => {
  const response = await fetch(`${API_BASE_URL}/${lang}.json`);
  return response.json();
};
