import chamaTabNav from './modules/tabNav.js';
import chamaAccordion from './modules/accordion.js';
import chamaScrollSuave from './modules/scrollSuave.js';
import chamaAnimacaoScroll from './modules/animacaoScroll.js';
import chamaModal from './modules/modal.js';
import chamaTooltip from './modules/tooltip.js';
import chamaDropDown from './modules/menuDropDown.js';
import chamaMenuMobile from './modules/menuMobile.js';
import chamaAnimacaoNumeros from './modules/animacaoNumeros.js';

const scrollSuave = new chamaScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

chamaTabNav();
chamaAccordion();
chamaAnimacaoScroll();
chamaModal();
chamaTooltip();
chamaDropDown();
chamaMenuMobile();
chamaAnimacaoNumeros();