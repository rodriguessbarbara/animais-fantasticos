import chamaScrollSuave from './modules/scrollSuave.js';
import chamaAccordion from './modules/accordion.js';
import chamaTabNav from './modules/tabNav.js';
import chamaModal from './modules/modal.js';
import chamaTooltip from './modules/tooltip.js';
// import chamaAnimacaoNumeros from './modules/animacaoNumeros.js';
import chamaAnimacaoScroll from './modules/animacaoScroll.js';
import chamaDropDown from './modules/menuDropDown.js';
import chamaMenuMobile from './modules/menuMobile.js';
import fetchAnimais from './modules/fetch-animais.js';

const scrollSuave = new chamaScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new chamaAccordion('.js-accordion dt');
accordion.init();

const tabNav = new chamaTabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.init();    

const modal = new chamaModal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new chamaTooltip('[data-tooltip]');
tooltip.init();

chamaAnimacaoScroll();
chamaDropDown();
chamaMenuMobile();
fetchAnimais('../../animaisapi.json', '.numeros-grid');
