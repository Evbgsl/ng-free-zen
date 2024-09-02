import { data } from './data.js';
import { Header } from './widgets/Header/index.js';
import { Download } from './widgets/Download/index.js';
import { Warranty } from './widgets/Warranty/index.js';
import { Care } from './widgets/Care/index.js';
import { Cashback } from './widgets/Cashback/index.js';
import { Clients } from './widgets/Clients/index.js';
import { Footer } from './widgets/Footer/index.js';
import { handleThemeClick } from './handlers.js';

localStorage.setItem('brands', JSON.stringify(data.clients.brands));

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(data.download));
$root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
$root?.insertAdjacentHTML('beforeend', Care(data.care));
$root?.insertAdjacentHTML('beforeend', Cashback(data.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(data.clients));
$root?.insertAdjacentHTML('beforeend', Footer(data.secondaryInfo));

const $themeBtn = document.querySelector('#theme');

$themeBtn?.addEventListener('click', handleThemeClick);
