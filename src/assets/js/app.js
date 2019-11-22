/* Menu handling for smaller screens. */
var menu = document.getElementsByClassName('nav-right')[0];
var menuBg = document.getElementsByClassName('menu-trigger-bg')[0];

/* Adding current year to the copyright section. */
var date = new Date();
document.getElementsByClassName('current-year')[0].innerHTML = date.getFullYear();

/* Smooth scroll. */
if(typeof SmoothScroll !== 'undefined') {
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 50,
    updateURL: true,
  });
}

/* Contact Modal */
var modal = document.getElementById('contact-modal');

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
    modal.className = 'show';
    document.body.style.overflow = 'hidden';
  }
  
  /* Contact modal close. */
  if(e.target.className === 'button-unstyled modal-close' || e.target.id === 'contact-modal') {
    modal.className = '';
    document.body.style.overflow = 'auto';
  }

  /* Bottom tab contact form */
  var bottomTabForm = document.getElementsByClassName('bottom-tab-contact-form')[0];
  var bottomTabFormHook = document.getElementsByClassName('bottom-tab-contact-form__hook')[0];
  var bottomTabFormContent = document.getElementsByClassName('bottom-tab-contact-form__content')[0];

  if(e.target.className === 'bottom-tab-contact-form' || e.target.className === 'bottom-tab-contact-form__hook' || e.target.parentElement.className === 'bottom-tab-contact-form__hook' || e.target.parentElement.parentElement.className === 'bottom-tab-contact-form__hook' || e.target.className === 'bottom-tab-contact-form bottom-tab-contact-form__closed') {
    var intervals = setInterval(ann, 5);
    var pos = 0;
    function ann() {
      if(pos > 50) {
        clearInterval(intervals);
        bottomTabFormHook.style.display = 'none';
        bottomTabFormContent.style.display = 'initial';
        bottomTabForm.className = 'bottom-tab-contact-form bottom-tab-contact-form__opened';
        bottomTabForm.style.transform = "translateY(50px)";
        bottomTabForm.style.msTransform = "translateY(50px)";
        bottomTabForm.style.WebkitTransform = "translateY(50px)";
        var intervals2 = setInterval(ann2, 5);
        pos = 500;
        function ann2() {
          if(pos < 0) {
            clearInterval(intervals2);
            bottomTabForm.style.transform = "translateY(0px)";
            bottomTabForm.style.msTransform = "translateY(0px)";
            bottomTabForm.style.WebkitTransform = "translateY(0px)";
          } else {
            bottomTabForm.style.transform = "translateY(" + pos + "px)";
            bottomTabForm.style.msTransform = "translateY(" + pos + "px)";
            bottomTabForm.style.WebkitTransform = "translateY(" + pos + "px)";
            pos -= 50;
          }
        }
      } else {
        bottomTabForm.style.transform = "translateY(" + pos + "px)";
        bottomTabForm.style.msTransform = "translateY(" + pos + "px)";
        bottomTabForm.style.WebkitTransform = "translateY(" + pos + "px)";
        pos += 5;
      }
    }
  }

  if(e.target.className === 'bottom-tab-contact-form--close' || e.target.parentElement.className === 'bottom-tab-contact-form--close') {
    bottomTabFormHook.style.display = 'initial';
    bottomTabFormContent.style.display = 'none';
    bottomTabForm.className = 'bottom-tab-contact-form bottom-tab-contact-form__closed';
  }
}

/* Carousel */

function Carousel(targetElement) {
  this.targetElement = targetElement;
  this.childrenElements = targetElement.children;
  this.state = 0;
  this.length = targetElement.children.length;
};

Carousel.prototype.move = function() {
  for (var i = 0; i < this.length; i++) {
    this.childrenElements[i].style.transform = 'translateX(' + (this.state * -100) +  '%)';
  }
}

Carousel.prototype.next = function() {
  if (this.state < this.length - 1) {
    this.state += 1;
  } else {
    this.state = 0;
  }
  this.move();
}

Carousel.prototype.previous = function() {
  if (this.state > 0) {
    this.state -= 1;
  } else {
    this.state = this.length - 1;
  }
  this.move();
}

var workCarousels = document.getElementsByClassName('work-carousel');
var carousels = [];

for (var i = 0; i < workCarousels.length; i++) {
  carousels.push(new Carousel(workCarousels[i]));
  carousels[i].targetElement.parentElement.getElementsByClassName('work-carousel--previous')[0].onclick = function() {
    findAndCallCarouselAction(this, 'previous');
  } 
  carousels[i].targetElement.parentElement.getElementsByClassName('work-carousel--next')[0].onclick = function() {
    findAndCallCarouselAction(this, 'next');
  }
}

function findAndCallCarouselAction(self, action) {
  var target = self.parentElement.getElementsByClassName('work-carousel')[0];

  for (var i = 0; i < carousels.length; i++) {
    if (target === carousels[i].targetElement) {
      if (action === 'previous') {
        carousels[i].previous();
      }
      if (action === 'next') {
        carousels[i].next();
      }
    }
  }
}
