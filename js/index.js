import { dataFromAPI } from './data.js';
import { Header } from './widgets/Header/index.js';
import { Download } from './widgets/Download/index.js';
import { Warranty } from './widgets/Warranty/index.js';
import { Care } from './widgets/Care/index.js';
import { Cashback } from './widgets/Cashback/index.js';
import { Clients } from './widgets/Clients/index.js';
import { Footer } from './widgets/Footer/index.js';
import { Modal } from './widgets/Modal/index.js';

import {
  handleLogoClick,
  onThemeClick,
  handleBurgerClick,
  handleNavLinkClick,
  handleOrderClick,
  handleCloseClick,
} from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(dataFromAPI.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(dataFromAPI.download));
$root?.insertAdjacentHTML('beforeend', Warranty(dataFromAPI.warranty));
$root?.insertAdjacentHTML('beforeend', Care(dataFromAPI.care));
$root?.insertAdjacentHTML('beforeend', Cashback(dataFromAPI.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(dataFromAPI.clients));
$root?.insertAdjacentHTML('beforeend', Footer(dataFromAPI.secondaryInfo));
$root?.insertAdjacentHTML('beforeend', Modal());

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
