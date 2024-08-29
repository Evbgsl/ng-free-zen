
import { ThemeLightMoonLogo } from './ui/ThemeLightMoonLogo/index.js';
import { ThemeDarkSunLogo } from './ui/ThemeDarkSunLogo/index.js';

/**
 * @function handleThemeLogoClick
 * @param {object} event
 */

export const handleThemeLogoClick = (event) => {
  const $themeBtn = event.currentTarget;
  const theme = $themeBtn.dataset.theme;
  const $root = document.querySelector('#root');
  if (theme === 'light') {
    $themeBtn.dataset.theme = 'dark';
    $themeBtn.innerHTML = ThemeDarkSunLogo();
    $root?.classList.add('dark');
    $root?.classList.remove('light');
  };
  if (theme === 'dark') {
    $themeBtn.dataset.theme = 'light';
    $themeBtn.innerHTML = ThemeLightMoonLogo();
    $root?.classList.add('light');
    $root?.classList.remove('dark');
  };
};
