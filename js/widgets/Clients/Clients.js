/**
 * @typedef {import ('./types').ClientsData} ClientsData
 */

/**
 * @function Clients
 * @param {ClientsData} clientList
 * @returns {string} HTML
 */

export const Clients = (clientList) => `
  <section class="clients" id="clients">
    <div class="clients__wrapper">
      <ul class="clients__brands" id="brands">
        ${clientList.brands.map((brand) => `
          <li class="clients__brand">
            <img src="${brand.lightSource}"
              alt="${brand.name}"
              data-id="brand"
            />
          </li>`
        ).join('')}
      </ul>
    </div>
  </section>
`;
