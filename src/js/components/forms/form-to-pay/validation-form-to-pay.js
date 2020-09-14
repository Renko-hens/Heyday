import {nameInputValidationHandler, emailInputValidationHandler, phoneInputValidationHandler} from '../validation-element-forms/validation-element-forms.js';

const basketForm = document.querySelector(`.main-basket__form`);
if (basketForm) {
  const clientName = document.querySelector(`#clientName`);
  const clientPhone = document.querySelector(`#clientPhone`);
  const clientEmail = document.querySelector(`#clientEmail`);

  const receipientName = document.querySelector(`#recipientName`);
  const receipientPhone = document.querySelector(`#recipientPhone`);

  const basketFormSubmitHandler = (evt) => {
    evt.preventDefault();

    alert("dine");
    console.log(new FormData(basketForm));
  };

  clientName.addEventListener(`input`, nameInputValidationHandler);
  clientName.addEventListener(`invalid`, nameInputValidationHandler);
  clientPhone.addEventListener(`input`, phoneInputValidationHandler);
  clientPhone.addEventListener(`invalid`, phoneInputValidationHandler);
  clientEmail.addEventListener(`input`, emailInputValidationHandler);
  clientEmail.addEventListener(`invalid`, emailInputValidationHandler);

  receipientName.addEventListener(`input`, nameInputValidationHandler);
  receipientName.addEventListener(`invalid`, nameInputValidationHandler);
  receipientPhone.addEventListener(`input`, phoneInputValidationHandler);
  receipientPhone.addEventListener(`invalid`, phoneInputValidationHandler);

  basketForm.addEventListener('submit', basketFormSubmitHandler);
}