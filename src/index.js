import "./styles.css";
import { home } from './modules/home.js';
import { menu } from './modules/menu.js';
import { about } from './modules/about.js';


document.getElementById("home").addEventListener('click', home); 
document.getElementById("menu").addEventListener('click', menu); 
document.getElementById("about").addEventListener('click', about); 


home();