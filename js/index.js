import { getData } from './utils/index.js';
import { renderApp } from './utils/index.js';
import { showLoader, hideLoader } from './utils/index.js';

(async () => {
  showLoader();
  const currentLang = localStorage.getItem('lang') ?? 'en';
  const data = await getData(currentLang);
  renderApp(data);
  hideLoader();
})();
