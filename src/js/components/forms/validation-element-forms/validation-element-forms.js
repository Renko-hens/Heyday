const nameInputValidationHandler = (evt) => {
  const name = evt.target;

  if (name.validity.valueMissing) {
    name.classList.remove(`form__input--valid`);
    name.classList.add(`form__input--invalid`);
    name.setCustomValidity('Запишите Ваше имя');

    name.addEventListener(`input`, nameInputValidationHandler);
  } else if (name.validity.tooShort || name.validity.tooLong) {
    name.classList.remove(`form__input--valid`);
    name.classList.add(`form__input--invalid`);
    name.setCustomValidity('Имя должно состоять минимально из 1 символа и максимально 40 символов');

    name.addEventListener(`input`, nameInputValidationHandler);
  } else {
    name.classList.remove(`form__input--invalid`);
    name.classList.add(`form__input--valid`);
    name.setCustomValidity('');

    name.removeEventListener(`input`, nameInputValidationHandler);
  }

};

const phoneInputValidationHandler = (evt) => {
  const phone = evt.target

  if (phone.validity.valueMissing) {
    phone.classList.remove(`form__input--valid`);
    phone.classList.add(`form__input--invalid`);
    phone.setCustomValidity('Запишите номер телефона');

    phone.addEventListener(`input`,  phoneInputValidationHandler);
  } else {
    phone.classList.remove(`form__input--invalid`);
    phone.classList.add(`form__input--valid`);
    phone.setCustomValidity('');

    phone.removeEventListener(`input`,  phoneInputValidationHandler);
  }

};

const emailInputValidationHandler = (evt) => {
  const email = evt.target;

  if (email.validity.valueMissing) {
    email.classList.remove(`form__input--valid`);
    email.classList.add(`form__input--invalid`);
    email.setCustomValidity('Запишите Вашу почту');

    email.addEventListener(`input`, emailInputValidationHandler);
  } else if (email.validity.patternMismatch) {
    email.classList.remove(`form__input--valid`);
    email.classList.add(`form__input--invalid`);
    email.setCustomValidity('Почта должна иметь как минимум такой пример "name@hoisting.ru');
    
    email.addEventListener(`input`, emailInputValidationHandler);
  } else {
    email.classList.remove(`form__input--invalid`);
    email.classList.add(`form__input--valid`);
    email.setCustomValidity('');

    email.removeEventListener(`input`, emailInputValidationHandler);
  }

};

export {nameInputValidationHandler, emailInputValidationHandler, phoneInputValidationHandler};