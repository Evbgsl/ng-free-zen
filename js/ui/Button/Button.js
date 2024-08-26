/**
 * @function Button
 * @param {string} buttonText
 * @param {string} className
 * @returns {string} HTML
 */

export const Button = (buttonText, className) => `
  <button class="${className}"
    type="button"
    id="order-open"
  >
    ${buttonText}
  </button>
`;
