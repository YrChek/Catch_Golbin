import Image from './images';
import Action from './action';
import Panel from './panel';

const gameСells = document.querySelectorAll('.item_field');
const gameBlock = document.querySelector('.container');
const button = document.querySelector('.button-start');
const missPanel = document.querySelector('.misses');
const scorePanel = document.querySelector('.score');
const picture = document.createElement('img');
picture.src = '/src/image/goblin.png';
picture.alt = 'gob';
picture.classList.add(picture.alt);

const game = new Image(picture, gameСells);
const panel = new Panel(button, missPanel, scorePanel);

const click = new Action(gameBlock, game, panel);
