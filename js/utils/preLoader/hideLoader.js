export const hideLoader = () => {
  const $loader = document.querySelector('.areaForLoader');
  if (!$loader) return;
  $loader.classList.remove('is-visible');
};
