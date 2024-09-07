import { IconMoon } from './ui/IconMoon/index.js';
import { IconSun } from './ui/IconSun/index.js';

/**
 * @function handleLogoClick
 * @description Scrolls to the top
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

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
 * @function toggleActive
 * @description Switches the active class of the burger and the navigation menu
 */

export const toggleActive = () => {
  const $burgerBtn = /** @type { HTMLElement | null } */ document.querySelector('#burger');
  const $navMenu = /** @type { HTMLElement | null } */ document.querySelector('#nav');

  if (!$burgerBtn || !$navMenu) return;

  $burgerBtn.classList.toggle('active');
  $navMenu.classList.toggle('active');
};

/**
 * @function adjustScroll
 * @description Sett scrolling with the header height
 */

export const adjustScroll = (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();

    const $clickedLink = event.target;
    const targetId = $clickedLink.getAttribute('href').substring(1);

    const $header = /** @type { HTMLElement | null } */ document.querySelector('header');
    const $targetElement = /** @type { HTMLElement | null } */ document.getElementById(targetId);

    if (!$header || !$targetElement) return;

    const $headerOffset = $header.offsetHeight;
    const $elementPosition = $targetElement.getBoundingClientRect().top;
    const offsetPosition = $elementPosition - $headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
