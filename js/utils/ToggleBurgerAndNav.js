export const ToggleBurgerAndNav = () => {
  const $burgerBtn = /** @type { HTMLElement | null } */ document.querySelector('#burger');
  const $navMenu = /** @type { HTMLElement | null } */ document.querySelector('#nav');

  if (!$burgerBtn || !$navMenu) return;

  $burgerBtn.classList.toggle('active');
  $navMenu.classList.toggle('active');
};
