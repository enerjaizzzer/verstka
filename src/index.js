import carouselCarousel from 'embla-carousel';

const setupDotBtns = (dotsArray, carousel) => {
  dotsArray.forEach((dotNode, i) => {
    dotNode.classList.add('carousel__dot');
    dotNode.addEventListener('click', () => carousel.scrollTo(i), false);
  });
};

const generateDotBtns = (dots, carousel) => {
  const scrollSnaps = carousel.scrollSnapList();
  const dotsFrag = document.createDocumentFragment();
  const dotsArray = scrollSnaps.map(() => document.createElement('button'));
  dotsArray.forEach(dotNode => dotsFrag.appendChild(dotNode));
  dots.appendChild(dotsFrag);
  return dotsArray;
};

const selectDotBtn = (dotsArray, carousel) => () => {
  const previous = carousel.previousScrollSnap();
  const selected = carousel.selectedScrollSnap();
  dotsArray[previous].classList.remove('is-selected');
  dotsArray[selected].classList.add('is-selected');
};

const wrap = document.querySelector('.carousel');
const viewPort = wrap.querySelector('.carousel__viewport');
const dots = wrap.querySelector('.carousel__dots');
const carousel = carouselCarousel(viewPort, { dragFree: false });
const dotsArray = generateDotBtns(dots, carousel);
const setSelectedDotBtn = selectDotBtn(dotsArray, carousel);

setupDotBtns(dotsArray, carousel);

carousel.on('select', setSelectedDotBtn);
carousel.on('init', setSelectedDotBtn);