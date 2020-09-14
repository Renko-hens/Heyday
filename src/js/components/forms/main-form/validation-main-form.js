import {nameInputValidationHandler, emailInputValidationHandler, phoneInputValidationHandler} from '../validation-element-forms/validation-element-forms.js';

const mainForm = document.querySelector(`#main-form`);
if (mainForm) {
  const nameInput = mainForm.querySelector(`#formName`);
  const emailInput = mainForm.querySelector(`#formEmail`);
  const phoneInput = mainForm.querySelector(`#formPhone`);

  const mainFormSubmitHandler = (evt) => {
    evt.preventDefault();

    mainForm.reset();

    const successPopup = document.querySelector(`.popup-success`);
    successPopup.classList.remove(`popup-success--hide`);

    console.log(new FormData(mainForm));
  };

  nameInput.addEventListener(`input`, nameInputValidationHandler);
  nameInput.addEventListener(`invalid`, nameInputValidationHandler);
  emailInput.addEventListener(`input`, emailInputValidationHandler);
  emailInput.addEventListener(`invalid`, emailInputValidationHandler);
  phoneInput.addEventListener(`input`, phoneInputValidationHandler);
  phoneInput.addEventListener(`invalid`, phoneInputValidationHandler);

  mainForm.addEventListener('submit', mainFormSubmitHandler);
}