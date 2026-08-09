const subscribeForm = document.querySelector('.footer__form');

subscribeForm?.addEventListener('submit', event => {
  // Subscription has no backend yet, so keep the email out of the URL.
  event.preventDefault();
});
