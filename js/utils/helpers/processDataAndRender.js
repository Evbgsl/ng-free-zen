import { getData } from '../index.js';
import { renderApp } from '../index.js';

/**
 * @function processDataAndRender
 * @param {string} lang
 */

export const processDataAndRender = async (lang) => {
  const $root = document.querySelector('#root');
  if (!$root) return;

  const data = await getData(lang);

  if (!data) {
    $root.innerHTML = '<p>Что-то пошло не так</p>';
  } else {
    renderApp(data);
  }
};
