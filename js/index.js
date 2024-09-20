import { showLoader } from './utils/index.js';
import { hideLoader } from './utils/index.js';
import { processDataAndRender } from './utils/index.js';

(async () => {
  showLoader();
  const currentLang = localStorage.getItem('lang') ?? 'en';
  await processDataAndRender(currentLang);
  hideLoader();
})();
