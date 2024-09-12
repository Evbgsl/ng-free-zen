import { dataEnFromAPI } from './api/index.js';
import { App } from './App.js';
import { AddHadlers } from './addHandlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(dataEnFromAPI));
AddHadlers();
