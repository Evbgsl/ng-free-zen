import { dataFromAPI } from './data.js';
import { App } from './App.js';

import {
  handleLogoClick,
  onThemeClick,
  handleBurgerClick,
  handleNavLinkClick,
  handleOrderClick,
  handleCloseClick,
} from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(dataFromAPI));

const $logoBtn = document.querySelector('#logo');
const $themeBtn = document.querySelector('#theme');
const $burgerBtn = document.querySelector('#burger');
const $navLinks = document.querySelector('#nav');
const $orderBtn = document.querySelector('#order-open');
const $closeBtn = document.querySelector('#close');

$logoBtn?.addEventListener('click', handleLogoClick);
$themeBtn?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));
$burgerBtn?.addEventListener('click', handleBurgerClick);
$navLinks?.addEventListener('click', handleNavLinkClick);
$orderBtn?.addEventListener('click', handleOrderClick);
$closeBtn?.addEventListener('click', handleCloseClick);
