import { App } from './App.js';
import { AddHadlers } from './addHandlers.js';

const $root = document.querySelector('#root');

fetch('https://ng-free-zen-evbgsl-default-rtdb.firebaseio.com/languages/en.json')
.then((response) => {
  return response.json();
})
.then((responseData) => {
  $root?.insertAdjacentHTML('beforeend', App(responseData));
  AddHadlers(responseData);
})
.catch((error) => {
  console.error('Ошибка запроса:', error);
});
