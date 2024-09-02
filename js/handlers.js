import { IconLogo } from './ui/IconLogo/IconLogo.js';
import { IconMoon } from './ui/IconMoon/index.js';
import { IconSun } from './ui/IconSun/index.js';

/**
 * @function handleThemeClick
 * @param {Event} event
 */

export const handleThemeClick = (event) => {
  /** @type { * | EventTarget } */
  const $themeBtn = event.currentTarget;
  const theme = $themeBtn?.dataset.theme;
  const $root = document.querySelector('#root');
  const $iconLogo = document.querySelector('#logo');
  const $brandElements = document.querySelectorAll('[data-id="brand"]');

  const clientBrandsString = localStorage.getItem('brands');
  const clientBrands = clientBrandsString ? JSON.parse(clientBrandsString) : [];

  const isLightTheme = theme === 'light';
  const newTheme = isLightTheme ? 'dark' : 'light';

  $themeBtn.dataset.theme = newTheme;
  $themeBtn.innerHTML = newTheme === 'light' ? IconMoon() : IconSun();

  if ($root) {
    $root.classList.remove('dark', 'light');
    $root.classList.add(newTheme);
  }

  if ($iconLogo) {
    $iconLogo.innerHTML = IconLogo();
  }

  $brandElements.forEach(($element, index) => {
    if ($element instanceof HTMLImageElement && clientBrands[index]) {
      $element.src = isLightTheme
      ? clientBrands[index].darkSource
      : clientBrands[index].lightSource;
    };
  });
};
