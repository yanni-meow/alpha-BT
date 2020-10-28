// // АНИМАЦИЯ карусели

// const carousel = document.querySelector('.carousel__list');
// const hide = document.querySelector('.hide');
// const prev = document.querySelector('.prev');
// const act = document.querySelector('.act');
// const next = document.querySelector('.next');
// const newNext = document.querySelector('.new-next');


// function nextSlide() {
//   hide.remove();

//   prev.classList.add("hide");
//   prev.classList.remove("prev");

//   act.classList.add("prev");
//   act.classList.remove("act");

//   next.classList.add("act");
//   next.classList.remove("next");

//   newNext.classList.remove('new-next');
//   const addEl = document.createElement('li');
//   carousel.appendChild(addEl);
//   addEl.classList.add('next', 'new-next');
// }

// function prevSlide() {
//   newNext.remove();
//   next.classList.add('new-next');

//   act.classList.add("next");
//   act.classList.remove("act");

//   prev.classList.add("act");
//   prev.classList.remove("prev");

//   next.classList.add("prev");
//   next.classList.remove("hide");

//   const addEl = document.createElement('li');
//   carousel.insertBefore(addEl, carousel.firstChild);
//   addEl.classList.add('hide');
// }

// let elementOnClick = '';

// const slide = function() {
//   if(elementOnClick.classList.contains('next')) {
//     console.log('slide === ', elementOnClick);
//     nextSlide();
//   } else if (elementOnClick.classList.contains('prev')) {
//     prevSlide()
//   }
// }

// carousel.onclick = function(event) {
//   elementOnClick = event.target;
//   console.log('slide === ', elementOnClick);
// };
// // {
// //   // console.log('carousel === ', event.currentTarget);
// //   slide = event.currentTarget;
// // }