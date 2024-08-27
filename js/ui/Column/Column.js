import { LinkFooter } from '../LinkFooter/index.js'

/**
 * @typedef {import ('./types').CategoriesData} CategoriesData
 */

/**
 * @function Column
 * @param {CategoriesData} data
 * @returns {string} HTML
 */

export const Column = (data) => {
  const {name, links} = data;
  return `
    <div class="column">
      <h3 class="column__title">${name}</h3>
      <ul class="column__list">
        ${links.map((link) => (
          `<li class="column__item">
            ${LinkFooter(link)}
          </li>`)
        ).join('')}
      </ul>
    </div>
  `;
};
