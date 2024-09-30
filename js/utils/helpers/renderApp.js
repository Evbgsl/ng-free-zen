import { App } from '../../App.js';
import { addHandlers } from '../handlers/addHandlers.js';

/**
 * @typedef {import('../../types').AppDataFromAPI} DataFromAPI
 */

/**
 * @function renderApp
 * @param {DataFromAPI} data
 */

export const renderApp = (data) => {
  const $root = document.querySelector('#root');
  const currentTheme = localStorage.getItem('theme') ?? 'light';

  localStorage.setItem('theme', currentTheme);
  $root?.classList.add(currentTheme);

  if ($root) $root.innerHTML = App(data);
  addHandlers(data);
}
