import { IconLang } from '../../ui/IconLang/index.js';

/**
 * @typedef {import('./types').LangItemData} LangItemData
 */

/**
 * @function Lang
 * @param {LangItemData[]} LangList
 * @returns {string} HTML
 */

export const Lang = (LangList) => `
  ${IconLang()}
  <select id="lang">
    ${LangList.map((langItem) => `
      <option value="${langItem.key}">
        ${langItem.name}
      </option>
    `).join('')}
  </select>
`
