import { updateContent } from './utils/index.js';

(async () => {
  const currentLang = localStorage.getItem('lang') ?? 'en';
  await updateContent(currentLang);
})();
