export const showLoader = () => {
  const $loader = document.querySelector('.areaForLoader');
  if (!$loader) return;
  $loader.classList.add('is-visible');
};
