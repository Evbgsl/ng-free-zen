import { IconLinkedIn } from '../../ui/IconLinkedIn/index.js';

/**
 * @typedef {import('./types').LinkDataFooter} LinkDataFooter
 */

/**
 * @function Link
 * @param {LinkDataFooter} link
 * @returns {string} HTML
 */

export const Link = (link) => `
  ${link.content.type === 'text'
    ? `<a href="${link.url}">${link.content.data}</a>`
    : ''}
  ${link.content.type === 'image'
    ? `<a href="${link.url}">${IconLinkedIn()}</a>`
    : ''}
`;
