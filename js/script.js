import {header, download, warranty, care, cashback, clients, footer} from './data.js';

function createDownloadSection(data) {
  // Создание секции
  const section = document.createElement('section');
  section.className = 'download';
  section.id = 'download';

  // Создание обертки
  const wrapper = document.createElement('div');
  wrapper.className = 'download__wrapper';
  section.appendChild(wrapper);

  // Создание текстового блока
  const textBlock = document.createElement('div');
  textBlock.className = 'download__text-block';
  wrapper.appendChild(textBlock);

  // Создание заголовка
  const title = document.createElement('h1');
  title.className = 'download__title';
  title.textContent = data.title;
  textBlock.appendChild(title);

  // Создание абзаца
  const copy = document.createElement('p');
  copy.className = 'download__copy';
  copy.textContent = data.texts[0];
  textBlock.appendChild(copy);

  // Создание блока ссылок
  const links = document.createElement('div');
  links.className = 'download__links';
  textBlock.appendChild(links);

  // Ссылка Apple
  const appleLink = document.createElement('a');
  appleLink.className = 'download__link';
  appleLink.href = data.linkApple.url;
  const appleImg = document.createElement('img');
  appleImg.src = data.linkApple.source;
  appleImg.alt = 'Apple icon';
  appleLink.appendChild(appleImg);
  links.appendChild(appleLink);

  // Ссылка Google
  const googleLink = document.createElement('a');
  googleLink.className = 'download__link';
  googleLink.href = data.linkGoogle.url;
  const googleImg = document.createElement('img');
  googleImg.src = data.linkGoogle.source;
  googleImg.alt = 'Google icon';
  googleLink.appendChild(googleImg);
  links.appendChild(googleLink);

  // Создание блока изображения
  const imageBlock = document.createElement('div');
  imageBlock.className = 'download__image-block';
  wrapper.appendChild(imageBlock);

  // Изображение
  const image = document.createElement('img');
  image.src = data.image.source;
  image.alt = data.image.description;
  imageBlock.appendChild(image);

  // Добавление секции на страницу
  document.body.appendChild(section);
}

createDownloadSection(download);