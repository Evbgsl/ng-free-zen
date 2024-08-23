/**
 * @typedef { import("./types").MyImageData } MyImageData
 */

/**
 * @function Image
 * @param {MyImageData} data
 * @returns {string} HTML
 */

export const Image = (data) => `
  <img
    src="${data.source}"
    alt="${data.description}"
  />
`
