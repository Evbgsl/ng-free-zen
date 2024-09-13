import { dataEnFromAPI } from './api/index.js';
import { App } from './App.js';
import { AddHadlers } from './addHandlers.js';

const $root = document.querySelector('#root');

/*
  Выполняем запрос к серверу
  Обрабатываем ответ
  Если ожидаемый ответ получен, то с помощью компонента App (передав ему данные)
  собираем и отрисовываем интерфейс
  Регистрируем обработчики событий
*/

$root?.insertAdjacentHTML('beforeend', App(dataEnFromAPI));
AddHadlers();
