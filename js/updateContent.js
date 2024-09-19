import { App } from './App.js';
import { addHandlers } from './addHandlers.js';
import { API_BASE_URL } from './config.js';

/**
 * @function updateContent
 * @param {string} lang
 */

export const updateContent = async (lang) => {
  const $root = document.querySelector('#root');
  const currentTheme = localStorage.getItem('theme') ?? 'light';

  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', currentTheme);

  $root?.classList.add(currentTheme);

  const response = await fetch(`${API_BASE_URL}/${lang}.json`);
  const responseData = await response.json();

  if ($root) $root.innerHTML = App(responseData);
  addHandlers(responseData);
}
