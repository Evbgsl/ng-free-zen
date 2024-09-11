/**
 * @function Modal
 * @returns {string} HTML
 */

export const Modal = () => {
  return `
    <div class="modal" id="modal">
      <div class="modal__body">
        <button class="modal__close" id="close">
          <img src="assets/icons/close.svg" alt="Close" />
        </button>
        <h3 class="modal__title">Order a consultation</h3>
        <form class="form" id="order">
          <label class="form__input">
            <input type="text" id="name" placeholder="Name" required>
          </label>
          <label class="form__input">
            <input type="tel" id="tel" placeholder="Tel." required>
          </label>
          <label class="form__input">
            <input type="email" id="email" placeholder="E-mail" required>
          </label>
          <label class="form__select">
            <select id="connection" required>
              <option disabled value="" selected>Connection</option>
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </label>
          <label class="form__checkbox">
            <input type="checkbox" id="policy">
            <a href="https://example.com/policy" target="_blank">Privacy policy</a>
          </label>
          <button class="form__submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  `;
};
