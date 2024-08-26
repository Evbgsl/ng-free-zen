import { Title } from '../../ui/Title/index.js';

/**
 * @typedef {import('./types').CashbackData} CashbackData
 */

/**
 * @function Cashback
 * @param {CashbackData} data
 * @returns {string} HTML
 */

export const Cashback = (data) => {
  const {title, texts, image} = data;

  return `
    <section class="warranty" id="warranty">
      <div class="warranty__wrapper">
        <div class="warranty__text-block">
          ${Title(title, 'warranty__title')}
          ${texts.map((text) => `<p class="warranty__copy">${text}</p>`).join('')}
        </div>
        <div class="warranty__image-block">
          ${Image(image)}
        </div>
      </div>
    </section>
  `;
};
