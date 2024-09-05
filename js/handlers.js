import { IconMoon } from './ui/IconMoon/index.js';
import { IconSun } from './ui/IconSun/index.js';

/**
 * @typedef {import ('./widgets/Clients/types').BrandFromAPI} BrandFromAPI
 */

/**
 * @function onThemeClick
 * @description In anonymous handler
 * @param {Event} event
 * @param {BrandFromAPI[]} brandsFromAPI
 */

export const onThemeClick = (event, brandsFromAPI) => {
  /** @type { HTMLElement | null } */
  const $root = document.querySelector('#root');

  const $themeBtn = /** @type { HTMLElement | null } */ (event.currentTarget);

  /** @type { NodeListOf<HTMLImageElement> } */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');

  if (!$root || !$themeBtn || !$brandNodes) return;

  const currentTheme = $themeBtn.dataset.theme;
  const newTheme = currentTheme === 'light'
    ? 'dark'
    : 'light';

  $root.dataset.theme = newTheme;
  $themeBtn.dataset.theme = newTheme;
  $themeBtn.innerHTML = newTheme === 'light'
    ? IconMoon()
    : IconSun();

  $brandNodes.forEach(($element, index) => {
    $element.src = newTheme === 'light'
      ? brandsFromAPI[index].lightSource
      : brandsFromAPI[index].darkSource;
  });
};

/**
 * @function onLogoClick
 * @description In anonymous handler
 */

export const onLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * @function onBurgerClick
 * @description In anonymous handler
 * @param {Event} event
 */

export const onBurgerClick = (event) => {
  const $burgerBtn = /** @type { HTMLElement | null } */ (event.currentTarget);
  if ($burgerBtn) {
    $burgerBtn.classList.toggle('active');
  }
};
