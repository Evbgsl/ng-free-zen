import { IconLogo } from './ui/IconLogo/IconLogo.js';
import { IconMoon } from './ui/IconMoon/index.js';
import { IconSun } from './ui/IconSun/index.js';

/**
 * @function handleThemeClick
 * @param {Event} event
 */

export const handleThemeClick = (event) => {
  /** @type { * | EventTarget } */
  const  $themeBtn = event.currentTarget;
  const theme = $themeBtn?.dataset.theme;
  const $root = document.querySelector('#root');
  const $iconLogo = document.querySelector('#logo');

  const brands = document.querySelectorAll('#brand');

  const isLightTheme = theme === 'light';

  $themeBtn.dataset.theme = isLightTheme ? 'dark' : 'light';
  $themeBtn.innerHTML = isLightTheme ? IconSun() : IconMoon();

  $root?.classList.toggle('dark', isLightTheme);
  $root?.classList.toggle('light', !isLightTheme);

  if ($iconLogo) $iconLogo.innerHTML = IconLogo();
};
