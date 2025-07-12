let burger = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger__menu'),
    burgerLinks = document.querySelectorAll('.burger__link'),
    body = document.querySelector('body')
    dividers = document.querySelectorAll('.stages__num');

/*swiper*/
const swiper = new Swiper(".swiper", {

    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
/*swiper*/

/*burger*/
burgerLinks.forEach(item=>{
  item.addEventListener('click', ()=>{
    body.classList.remove('hide'); 
    burger.classList.toggle('active');
    burgerMenu.style.display = 'none';
  })
})

burger.addEventListener('click', ()=>{
  body.classList.add('hide')
  burger.classList.toggle('active');
  // burgerMenu.style.display = burgerMenu.style.display === 'none' || burgerMenu.style.display === '' ? 'block' : 'none' ;
  if (burgerMenu.style.display === 'none' || burgerMenu.style.display === '') {
    burgerMenu.style.display = 'block';
    body.classList.add('hide'); 
  } else {
    burgerMenu.style.display = 'none';
    body.classList.remove('hide'); 
  }
})
/*burger*/

/*dotted lines*/
dividers.forEach((divider, index) => {
  if (index < dividers.length - 1) { 
      const nextDivider = dividers[index + 1];
      const lineHeight = nextDivider.getBoundingClientRect().top - divider.getBoundingClientRect().bottom;
      divider.style.setProperty('--line-height', lineHeight + 'px');
  } else {
      divider.style.setProperty('--line-height', '0px');
  }
});

window.addEventListener('resize', function() {
  dividers.forEach((divider, index) => {
    if (index < dividers.length - 1) {
        const nextDivider = dividers[index + 1];
        const lineHeight = nextDivider.getBoundingClientRect().top - divider.getBoundingClientRect().bottom;
        divider.style.setProperty('--line-height', lineHeight + 'px');
    } else {
        divider.style.setProperty('--line-height', '0px');
    }
  });
});
/*dotted lines*/