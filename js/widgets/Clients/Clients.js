/**
 * @typedef {import ('./types').ClientsDataFromAPI } ClientsDataFromAPI
 */

/**
 * @function Clients
 * @param {ClientsDataFromAPI } clientsData
 * @returns {string} HTML
 */

export const Clients = (clientsData) => `
  <section class="clients" id="clients">
    <div class="clients__wrapper">
      <ul class="clients__brands" id="brands">
        ${clientsData.brands.map((brand) => `
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
