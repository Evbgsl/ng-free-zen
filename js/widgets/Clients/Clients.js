/**
 * @typedef {import ('./types').BrandDataFromAPI} BrandDataFromAPI
 */

/**
 * @function Clients
 * @param {BrandDataFromAPI} brandList
 * @returns {string} HTML
 */

export const Clients = (brandList) => `
  <section class="clients" id="clients">
    <div class="clients__wrapper">
      <ul class="clients__brands" id="brands">
        ${brandList.brands.map((brand) => `
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
