// подсветка по наведению на список

let viewList = document.querySelectorAll('.view-list');
let boxs = document.querySelectorAll('.view-box');

let ChangeClass = (event) => {
    console.log('event.target === ', event.target.id);
    const el = document.getElementById(`${event.target.id}-box`);
    el.classList.toggle('view');
}

viewList.forEach(element => {
    element.addEventListener('mouseenter', ChangeClass);
    element.addEventListener('mouseout', ChangeClass);
})


// анимация вертикалки при прокрутке

const image = document.getElementById("letScroll");
let progress;

const getCoords = () => {
  const img = image.getBoundingClientRect();
  const progressPX = img.top - 800 < window.pageYOffset - window.innerHeight / 2
  progress = progressPX ? window.pageYOffset - window.innerHeight - 50 : progress
  const p = progress / 800

  return { p };
}

const onScroll = () => {
    const view = getCoords(image.current)
    const p = view.p > 1 ? 1 : view.p < 0 ? 0 : view.p

    image.style.transform = `translateY(${window.innerHeight * p}px) translateX(${150*p}px) scale(${1 + .5*p})`
}

window.addEventListener('scroll', onScroll);
