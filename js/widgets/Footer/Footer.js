import { Column } from '../../ui/Column/index.js';
import { FooterLogo } from '../../ui/FooterLogo/index.js';
import { FooterDev } from '../../ui/FooterDev/index.js';

/**
 * @typedef {import ('./types').FooterData} FooterData
 */

/**
 * @function Footer
 * @param {FooterData} data
 */

export const Footer = (data) => {
  const {categories, texts, developer} = data;

  return `
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          ${categories.map((category) => Column(category)).join('')}
        </div>
        <div class="footer__info">
          <a class="footer__logo" href="https://example.com">
            ${FooterLogo()}
          </a>
          ${texts.map((text) => `<p class="footer__copy">${text}</p>`).join('')}
          ${FooterDev(developer)}
        </div>
      </div>
          <!-- Footer info -->
      </div>
    </footer>
  `;
};
