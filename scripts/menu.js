// МЕНЮ по ховеру

const menu = document.querySelectorAll('.menu__list__to-sub');
const list = document.querySelectorAll('.sub-menu__list');

if(menu) {
    menu.forEach((element, i) => {
        element.addEventListener('mouseenter', function() {
            list[i].classList.toggle('open');
        });
    });
    menu.forEach((element, i) => {
        element.addEventListener('mouseleave', function() {
            list[i].classList.toggle('open');
        });
    });
};

// ПО КЛИКУ

        // if(menu) {
        //     menu.forEach((element, i) => {
        //         element.addEventListener('click', function(event) {
        //             event.stopPropagation();
        //             // list.forEach((el) => {
        //             //     el.classList.remove('open')
        //             // })
        //             if(event.target.classList == 'open') {
        //                 element.classList.remove('open');
        //             } else {
        //                 list.forEach((el) => {
        //                     el.classList.remove('open')
        //                 });
        //                 list[i].classList.toggle('open');
        //             }
        //         });
        //     });
        // };

        // document.body.addEventListener('click', function(event){
        //     if (event.target.className !== 'sub-menu__list') {
        //         list.forEach((el) => {
        //             el.classList.remove('open')
        //         })    
        //     }
        // });
