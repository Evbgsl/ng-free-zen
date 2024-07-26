import {primaryInfo, download, warranty, care, cashback, clients, secondaryInfo} from './data.js';

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

  data.links.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.className = 'download__link';
    linkElement.href = link.url;
    const linkImg = document.createElement('img');
    linkImg.src = `./assets/icons/${link.name}.svg`;
    linkImg.alt = `${link.name.charAt(0).toUpperCase() + link.name.slice(1)} icon`;
    linkElement.appendChild(linkImg);
    links.appendChild(linkElement);
  });

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

function createWarrantySection(data) {
  // Создание секции
  const section = document.createElement('section');
  section.className = 'warranty';
  section.id = 'warranty';

  // Создание обертки
  const wrapper = document.createElement('div');
  wrapper.className = 'warranty__wrapper';
  section.appendChild(wrapper);

  // Создание текстового блока
  const textBlock = document.createElement('div');
  textBlock.className = 'warranty__text-block';
  wrapper.appendChild(textBlock);

  // Создание заголовка
  const title = document.createElement('h2');
  title.className = 'warranty__title';
  title.textContent = data.title;
  textBlock.appendChild(title);

  // Создание абзаца
  data.texts.forEach(text => {
    const copy = document.createElement('p');
    copy.className = 'warranty__copy';
    copy.textContent = text;
    textBlock.appendChild(copy);
  });

  // Создание блока изображения
  const imageBlock = document.createElement('div');
  imageBlock.className = 'warranty__image-block';
  wrapper.appendChild(imageBlock);

  // Изображение
  const image = document.createElement('img');
  image.src = data.image.source;
  image.alt = data.image.description;
  imageBlock.appendChild(image);

  // Добавление секции на страницу
  document.body.appendChild(section);
}

function createCareSection(data) {
  // Создание секции
  const section = document.createElement('section');
  section.className = 'care';
  section.id = 'care';

  // Создание обертки
  const wrapper = document.createElement('div');
  wrapper.className = 'care__wrapper';
  section.appendChild(wrapper);

  // Создание текстового блока
  const textBlock = document.createElement('div');
  textBlock.className = 'care__text-block';
  wrapper.appendChild(textBlock);

  // Создание заголовка
  const title = document.createElement('h2');
  title.className = 'care__title';
  title.textContent = data.title;
  textBlock.appendChild(title);

  // Создание абзаца
  data.texts.forEach(text => {
    const copy = document.createElement('p');
    copy.className = 'care__copy';
    copy.textContent = text;
    textBlock.appendChild(copy);
  });

  // Создание блока изображения
  const imageBlock = document.createElement('div');
  imageBlock.className = 'care__image-block';
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
createWarrantySection(warranty);
createCareSection(care);