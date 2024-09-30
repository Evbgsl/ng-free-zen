/**
 * @typedef {import ('./types').ClientsData} ClientsData
 */

/**
 * @function Clients
 * @param {ClientsData} clientsData
 * @returns {string} HTML
 */

export const Clients = (clientsData) => {
  const logoSource = localStorage.getItem('theme');

  return `
    <section class="clients" id="clients">
      <div class="clients__wrapper">
        <ul class="clients__brands" id="brands">
          ${clientsData.brands.map((brand) => `
            <li class="clients__brand">
              <img src="${brand[logoSource + 'Source']}"
                alt="${brand.name}"
                data-id="brand"
              />
            </li>`
          ).join('')}
        </ul>
      </div>
    </section>
  `;
};
