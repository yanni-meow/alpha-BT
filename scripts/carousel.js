// // // АНИМАЦИЯ карусели

$(document).ready(function() { 
  $('.slider__content').slick({
      arrows: false,
      asNavFor: '.slider__contorls',
      infinite: true,
  });

  $('.slider__contorls').slick({
      arrows: false,
      asNavFor: '.slider__content',
      focusOnSelect: true,
      slidesToShow: 3,
      infinite: true,
  });
});

// // const carousel = document.querySelector('.carousel__list');
// // let hide = document.querySelector('.hide');
// // let prev = document.querySelector('.prev');
// // let act = document.querySelector('.act');
// // let next = document.querySelector('.next');
// // let newNext = document.querySelector('.new-next');


// // function nextSlide() {
// //   hide.remove();

// //   prev.classList.add("hide");
// //   prev.classList.remove("prev");

// //   act.classList.add("prev");
// //   act.classList.remove("act");

// //   next.classList.add("act");
// //   next.classList.remove("next");

// //   newNext.classList.remove('new-next');
// //   const addEl = document.createElement('li');
// //   carousel.appendChild(addEl);
// //   addEl.classList.add('next', 'new-next');
// // }

// // function prevSlide() {
// //   newNext.remove();
// //   next.classList.add('new-next');

// //   act.classList.add("next");
// //   act.classList.remove("act");

// //   prev.classList.add("act");
// //   prev.classList.remove("prev");

// //   hide.classList.add("prev");
// //   hide.classList.remove("hide");

// //   const addEl = document.createElement('li');
// //   carousel.insertBefore(addEl, carousel.firstChild);
// //   addEl.classList.add('hide');
// // }

// // let elementOnClick = '';

// // const slide = function() {
// //   if(elementOnClick.classList.contains('next')) {
// //     console.log('slide === ', elementOnClick);
// //     nextSlide();
// //   } else if (elementOnClick.classList.contains('prev')) {
// //     prevSlide()
// //   }
// // }

// // carousel.onclick = function(event) {
// //   elementOnClick = event.target;
// //   console.log('slide === ', elementOnClick);
// // };
// // // {
// // //   // console.log('carousel === ', event.currentTarget);
// // //   slide = event.currentTarget;
// // // }


// const $ = selector => {
//   return document.querySelector(selector);
// };

// function next() {
//   if ($(".hide")) {
//     $(".hide").remove(); 
//   }

//   /* Step */

//   if ($(".prev")) {
//     $(".prev").classList.add("hide");
//     $(".prev").classList.remove("prev");
//   }

//   $(".act").classList.add("prev");
//   $(".act").classList.remove("act");

//   $(".next").classList.add("act");
//   $(".next").classList.remove("next");

//   /* New Next */

//   $(".new-next").classList.remove("new-next");

//   const addedEl = document.createElement('li');
//   addedEl.appendChild($(".act").firstChild);

//   $(".carousel__list").appendChild(addedEl);
//   addedEl.classList.add("next","new-next");
// }

// function prev() {
//   $(".new-next").remove();
    
//   /* Step */

//   $(".next").classList.add("new-next");

//   $(".act").classList.add("next");
//   $(".act").classList.remove("act");

//   $(".prev").classList.add("act");
//   $(".prev").classList.remove("prev");

//   /* New Prev */

//   $(".hide").classList.add("prev");
//   $(".hide").classList.remove("hide");

//   const addedEl = document.createElement('li');
//   addedEl.appendChild($(".act").firstChild);

//   $(".carousel__list").insertBefore(addedEl, $(".list").firstChild);
//   addedEl.classList.add("hide");
// }

// slide = element => {
//   /* Next slide */
  
//   if (element.classList.contains('next')) {
//     next();
    
//   /* Previous slide */
    
//   } else if (element.classList.contains('prev')) {
//     prev();
//   }
// }


// $(".carousel__list").onclick = event => {
//   slide(event.target);
// }
