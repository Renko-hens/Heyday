import flatpickr from "flatpickr";
import {Russian} from "flatpickr/dist/l10n/ru.js"
import "flatpickr/dist/flatpickr.min.css";
import './validation-form-to-pay';

// 
const deliveryBlock = document.querySelector(`.delivery`);

if (deliveryBlock) {
  const radioDeliveryButtons = deliveryBlock.querySelectorAll(`.form__radio`);
  const routeBlock = deliveryBlock.querySelector(`.form__wrapper-route`);
  const inputList =  deliveryBlock.querySelector(`.form__wrapper-input-list`);
  const labelInputList = deliveryBlock.querySelector(`.form__route-additionally`);
  const pickupBlock = deliveryBlock.querySelector(`.form__wrapper-pickup`);


  radioDeliveryButtons.forEach((radioDeliveryButton) => {
    radioDeliveryButton.addEventListener(`change`, (evt) => {
      if (evt.target.id === `deliveryMethodShipping`) {
        pickupBlock.classList.add(`form__wrapper-pickup--hide`);
        routeBlock.classList.remove(`form__wrapper-route--hide`);
        labelInputList.classList.remove(`form__route-additionally--hide`);
        inputList.classList.remove(`form__wrapper-input-list--hide`);
      } else if (evt.target.id === `deliveryMethodPickup`) {
        routeBlock.classList.add(`form__wrapper-route--hide`);
        pickupBlock.classList.remove(`form__wrapper-pickup--hide`);
        labelInputList.classList.add(`form__route-additionally--hide`);
        inputList.classList.add(`form__wrapper-input-list--hide`);
      }
    });
  });

}

// 
const dateElement = document.querySelector(`.form__date`);
if (dateElement) {
  const inputDate = flatpickr(dateElement, {
    "locale": Russian,
    altInput: true,
    allowInput: true,
    disableMobile: true,
    altFormat: `F j, Y`,
    dateFormat: `Y-m-d`,  
    minDate: "today",
    defaultDate: "today",
    // maxDate: new Date().fp_incr(30)
  });

  const dateIconbutton = document.querySelector(`.form__date-button--open`);
  if(dateIconbutton) {
    dateIconbutton.addEventListener(`click`, () => {
      inputDate.toggle();
    });
  }

  // 
  const timeElement = document.querySelector(`.form__time`);
  if (timeElement) {
    const inputTime = flatpickr(timeElement, {
      "locale": Russian,
      enableTime: true,
      noCalendar: true,
      disableMobile: true,
      dateFormat: "H:i",
      time_24hr: true,
      minDate: "10:00",
      maxTime: "21:00",
    });

    
    const buttonOpen = document.querySelector(`.form__time-button--open`);
    if(buttonOpen) {
      buttonOpen.addEventListener(`click`, () => {
        inputTime.toggle();
      });
    }

    const hurryUpTimeButton = document.querySelector(`#hurryUpTime`);
    const timeMobileElement = document.querySelector(`.form__time.flatpickr-mobile`);

    const checkHurryUpCheckbox = () => {
      if (hurryUpTimeButton.checked) {
        timeElement.disabled = true;
        timeElement.required = false;
      } else {
        timeElement.disabled = false;
        timeElement.required = true;
      }

      if (timeMobileElement) {
        if (hurryUpTimeButton.checked) {
          timeMobileElement.required = false;
        } else {
          timeMobileElement.required = true;
        }
      }
    }

    document.addEventListener(`DOMContentLoaded`, () => {
      checkHurryUpCheckbox();
    });

    hurryUpTimeButton.addEventListener(`change`, () => {
      checkHurryUpCheckbox();
    });
  }
}


// 
const recipientBlock = document.querySelector(`.recipient`);
if (recipientBlock) {
  const radioRecipientButtons = recipientBlock.querySelectorAll(`.form__radio`);
  const inputList = recipientBlock.querySelector(`.form__wrapper-input-list`);
  const receipientName = recipientBlock.querySelector(`#recipientName`);
  const receipientPhone = recipientBlock.querySelector(`#recipientPhone`);
  const receipientAnonym = recipientBlock.querySelector(`#recipientAnonym`);
  const receipientDoNotCall = recipientBlock.querySelector(`#recipientCall`);
  
  radioRecipientButtons.forEach((radioRecipientButton) => {
    radioRecipientButton.addEventListener(`change`, (evt) => {
      if (evt.target.id === `recipientCustomer`) {
        inputList.classList.add(`form__wrapper-input-list--hide`);
        receipientAnonym.classList.add(`form__wrapper-checkbox--hide`);
        receipientDoNotCall.classList.add(`form__wrapper-checkbox--hide`);
        receipientName.required = false;
        receipientPhone.required = false;
        receipientName.disabled = true;
        receipientPhone.disabled = true;
      } else if (evt.target.id === `recipientOther`) {
        inputList.classList.remove(`form__wrapper-input-list--hide`);
        receipientAnonym.classList.remove(`form__wrapper-checkbox--hide`);
        receipientDoNotCall.classList.remove(`form__wrapper-checkbox--hide`);
        receipientName.required = true;
        receipientPhone.required = true;
        receipientName.disabled = false;
        receipientPhone.disabled = false;
      }
    });
  });
  
  const checkboxAddCart = recipientBlock.querySelector(`#checkboxAddCart`);
  checkboxAddCart.addEventListener(`click`, (evt) => {
    const wrapperPostCard = document.querySelector(`#wrapperPostCard`);

    if (evt.target.checked) {
      wrapperPostCard.classList.remove(`form__wrapper-input-list--hide`);
    } else {
      wrapperPostCard.classList.add(`form__wrapper-input-list--hide`);
    }
  });

}