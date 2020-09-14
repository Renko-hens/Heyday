export default (function () {
  const localColor = localStorage.getItem('--main-theme-color');
  const localGradient = localStorage.getItem('--main-theme-gradient');

  document.documentElement.style.setProperty('--main-theme-color', localColor);
  document.documentElement.style.setProperty('--main-theme-gradient', localGradient);
}());