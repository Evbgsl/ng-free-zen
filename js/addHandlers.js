import { dataEnFromApi } from './api/index.js';

import {
  handleLogoClick,
  onThemeClick,
  handleBurgerClick,
  handleNavLinkClick,
  handleOrderClick,
  handleCloseClick,
  handleLangChange,
} from './handlers.js';

export const AddHadlers = () => {
  const $logoBtn = document.querySelector('#logo');
  const $themeBtn = document.querySelector('#theme');
  const $burgerBtn = document.querySelector('#burger');
  const $navLinks = document.querySelector('#nav');
  const $orderBtn = document.querySelector('#order-open');
  const $closeBtn = document.querySelector('#close');
  const $langSelector = document.querySelector('#lang');

  $logoBtn?.addEventListener('click', handleLogoClick);
  $themeBtn?.addEventListener('click', (event) =>
    onThemeClick(event, dataEnFromApi.clients.brands));
  $burgerBtn?.addEventListener('click', handleBurgerClick);
  $navLinks?.addEventListener('click', handleNavLinkClick);
  $orderBtn?.addEventListener('click', handleOrderClick);
  $closeBtn?.addEventListener('click', handleCloseClick);
  $langSelector?.addEventListener('change', handleLangChange);
};
