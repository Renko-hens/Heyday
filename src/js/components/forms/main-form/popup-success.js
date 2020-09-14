import {toggleElementWithButton} from '../../utils/utils';

const successPopup = document.querySelector(`.popup-success`);
toggleElementWithButton(successPopup, `popup-success--hide`, `button-close-popup`, `popup-success__button`);

