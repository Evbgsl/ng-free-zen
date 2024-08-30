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
  if (theme === 'light') {
    $themeBtn.dataset.theme = 'dark';
    $themeBtn.innerHTML = IconSun();
    $root?.classList.add('dark');
    $root?.classList.remove('light');
  };
  if (theme === 'dark') {
    $themeBtn.dataset.theme = 'light';
    $themeBtn.innerHTML = IconMoon();
    $root?.classList.add('light');
    $root?.classList.remove('dark');
  };
};
