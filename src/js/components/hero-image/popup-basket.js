import {toggleElementWithButton} from '../utils/utils';

const basketElement = document.querySelector(`.popup-basket`);
toggleElementWithButton(basketElement, `popup-basket--hide`, `button-close-popup`, `popup-basket__button`);
