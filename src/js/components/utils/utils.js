const toggleElementWithButton = (element, elementClassHide, buttonClassClose, buttonClassContinue) => {
  if (element !== null) {
    const buttonClose = element.querySelector(`.${buttonClassClose}`);
  
    const buttonContinue = element.querySelector(`.${buttonClassContinue}`);
    
    buttonClose.addEventListener(`click`, () => {
      element.classList.add(`${elementClassHide}`);
    });
    
    buttonContinue.addEventListener(`click`, () => {
      element.classList.add(`${elementClassHide}`);
    });
  }
  
  return false;
};

export {toggleElementWithButton};