// прокрутка целой секции странцы

// let container = document.querySelector('.container');
// const scrolling = () => {
//     const height = window.innerHeight;
//     container.style.transform = `translateY${height}`;
// }
// document.body.addEventListener('scroll', scrolling);

// всплывающие объекты при прокрутке

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                // if (animItem.classList.contains('_anim-show')) {
                    animItem.classList.add('_active');
                // } 
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setInterval(() => {
        animOnScroll()
    }, 300);
}

// поворот экрана gendarme по input range

const toRotate = document.getElementById('toRotate');
const rotatePoint = document.getElementById('rotatePoint');

function setRotate(e) {
    console.log('toRotate === ', toRotate);
    toRotate.style.transform = `rotate(${e.target.value}deg`;
} 
rotatePoint.addEventListener('mousemove', setRotate);
rotatePoint.addEventListener('touchmove', setRotate)
