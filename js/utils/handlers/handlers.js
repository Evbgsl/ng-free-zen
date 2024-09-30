import { showLoader } from '../../utils/index.js';
import { hideLoader } from '../../utils/index.js';
import { toggleBurgerAndNav } from '../../utils/index.js';
import { processDataAndRender } from '../../utils/index.js';

import { IconMoon } from '../../ui/IconMoon/index.js';
import { IconSun } from '../../ui/IconSun/index.js';

/**
 * @function handleLogoClick
 * @description Scrolls to the top
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * @typedef {import ('../../types').Brand} Brand
 */

/**
 * @function onThemeClick
 * @description In anonymous handler. Changing elements colors.
 * @param {Event} event
 * @param {Brand[]} brands
 */

export const onThemeClick = (event, brands) => {
  /** @type { HTMLElement | null } */
  const $root = document.querySelector('#root');

  const $themeBtn = /** @type { HTMLElement | null } */ (event.currentTarget);

  /** @type { NodeListOf<HTMLImageElement> } */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');

  if (!$root || !$themeBtn || !$brandNodes) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light'
    ? 'dark'
    : 'light';

  localStorage.setItem('theme', newTheme);
  $root.classList.replace(currentTheme, newTheme);
  $themeBtn.innerHTML = newTheme === 'light'
    ? IconMoon()
    : IconSun();

  $brandNodes.forEach(($element, index) => {
    $element.src = newTheme === 'light'
      ? brands[index].lightSource
      : brands[index].darkSource;
  });
};

/**
 * @function handleBurgerClick
 * @description Toggle burger icon and open/close nav menu.
 */

export const handleBurgerClick = () => {
  toggleBurgerAndNav();
};

/**
 * @function handleNavLinkClick
 * @description Set scrolling with the header height, hide nav menu.
 */

export const handleNavLinkClick = (event) => {
  toggleBurgerAndNav();

  if (event.target.tagName === 'A') {
    event.preventDefault();

    const $clickedLink = event.target;
    const targetId = $clickedLink.getAttribute('href').substring(1);

    const $header = /** @type { HTMLElement | null } */ document.querySelector('header');
    const $targetElement = /** @type { HTMLElement | null } */ document.getElementById(targetId);

    if (!$header || !$targetElement) return;

    const headerOffset = $header.offsetHeight;
    const elementPosition = $targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
};

/**
 * @function handleOrderClick
 * @description Show modal window
 */

export const handleOrderClick = () => {
  const $modal = /** @type { HTMLElement | null } */ document.querySelector('#modal');
  if (!$modal) return;
  $modal.classList.add('is-visible');
};

/**
 * @function handleCloseClick
 * @description Close modal window
 */

export const handleCloseClick = () => {
  const $modal = /** @type { HTMLElement | null } */ document.querySelector('#modal');
  if (!$modal) return;
  $modal.classList.remove('is-visible');
};

/**
 * @function handleLangChange
 * @description Changes language
 * @param {Event} event
 */

export const handleLangChange = async (event) => {
  const $langSelector = /** @type { HTMLSelectElement | null } */ (event.target);
  if ($langSelector) {
    const selectedLang = $langSelector.value;
    showLoader();
    await processDataAndRender(selectedLang);
    hideLoader();
  };
};
