/* Menu handling for smaller screens. */
var menu = document.getElementsByClassName('nav-right')[0];
var menuBg = document.getElementsByClassName('menu-trigger-bg')[0];

/* Adding current year to the copyright section. */
var date = new Date();
document.getElementsByClassName('current-year')[0].innerHTML = date.getFullYear();

/* Contact Modal */
var modal = document.getElementById('contact-modal');
var visible = document.getElementsByClassName('visible')[0];

window.onclick = function(e) {
  /* Navigation menu toggle. */
  if(e.target.className === 'menu-trigger' && getComputedStyle(menu, null).display === 'none') {
    menu.style.display = 'block';
    menuBg.style.display = 'block';
  } else if(e.target.className === 'menu-trigger' && getComputedStyle(menu, null).display === 'block' || e.target.className === 'menu-trigger-bg' && getComputedStyle(menuBg, null).display === 'block') {
    menu.style.display = 'none';
    menuBg.style.display = 'none';
  }

  /* Contact modal open. */
  if(e.target.id === 'contact-modal-trigger') {
    modal.style.display = 'block';
    visible.classList.add('blur');
  }

  /* Contact modal close. */
  if(e.target.className === 'modal-close' || e.target.id === 'contact-modal') {
    modal.style.display = 'none';
    visible.classList.remove('blur');
  }

  /* Bottom tab contact form */
  var bottomTabForm = document.getElementsByClassName('bottom-tab-contact-form')[0];
  var bottomTabFormHook = document.getElementsByClassName('bottom-tab-contact-form__hook')[0];
  var bottomTabFormContent = document.getElementsByClassName('bottom-tab-contact-form__content')[0];

  if(e.target.className === 'bottom-tab-contact-form' || e.target.className === 'bottom-tab-contact-form__hook' || e.target.parentElement.className === 'bottom-tab-contact-form__hook') {
    bottomTabFormHook.style.display = 'none';
    bottomTabFormContent.style.display = 'initial';
    bottomTabForm.style.backgroundColor = '#efefef';
    bottomTabForm.style.padding = '25px';
    bottomTabForm.style.cursor = 'unset';
  }

  if(e.target.className === 'bottom-tab-contact-form--close') {
    bottomTabFormHook.style.display = 'initial';
    bottomTabFormContent.style.display = 'none';
    bottomTabForm.style.backgroundColor = '#00C479';
    bottomTabForm.style.padding = '10px 15px';
    bottomTabForm.style.cursor = 'pointer';
  }
}