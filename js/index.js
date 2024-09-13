import { App } from './App.js';
import { addHandlers } from './addHandlers.js';

const $root = document.querySelector('#root');

fetch('https://ng-free-zen-evbgsl-default-rtdb.firebaseio.com/languages/en.json')
  .then((response) => response.json())
  .then((responseData) => {
    $root.innerHTML = App(responseData);
    addHandlers(responseData);
  })
  .catch((error) => {
    console.error('Ошибка запроса:', error);
  });
