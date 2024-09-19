import { updateContent } from './updateContent.js';

(async () => {
  const currentLang = localStorage.getItem('lang') ?? 'en';
  await updateContent(currentLang);
})();
