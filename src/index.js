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

let subOpen = false;
const buttonSub = document.querySelector('.button-sub');
let subMenu;

buttonSub.onclick = () => {
  subOpen = !subOpen;

  if (subOpen) {
    subMenu = document.createElement('ul');
    subMenu.classList.add('submenu');
    buttonSub.append(subMenu);

    const butCompany = document.createElement('li');
    butCompany.classList.add('header__button');
    subMenu.append(butCompany);
    const linkCompany = document.createElement('a');
    linkCompany.href = '#company';
    butCompany.append(linkCompany);
    linkCompany.textContent = 'О КОМПАНИИ';

    const butProjects = document.createElement('li');
    butProjects.classList.add('header__button');
    subMenu.append(butProjects);
    const linkProjects = document.createElement('a');
    linkProjects.href = '#projects';
    butProjects.append(linkProjects);
    linkProjects.textContent = 'ПРОЕКТЫ';

    const butContacts = document.createElement('li');
    butContacts.classList.add('header__button');
    subMenu.append(butContacts);
    const linkContacts = document.createElement('a');
    linkContacts.href = '#contacts';
    butContacts.append(linkContacts);
    linkContacts.textContent = 'КОНТАКТЫ';
  } else {
    subMenu.parentNode.removeChild(subMenu);
  }
  // const subMenu = document.createElement('ul');
  // subMenu.classList.add('submenu');
  // buttonSub.append(subMenu);

  // const butCompany = document.createElement('li');
  // butCompany.classList.add('header__button');
  // subMenu.append(butCompany);
  // const linkCompany = document.createElement('a');
  // linkCompany.href = '#';
  // butCompany.append(linkCompany);
  // linkCompany.textContent = 'О КОМПАНИИ';

  // const butProjects = document.createElement('li');
  // butProjects.classList.add('header__button');
  // subMenu.append(butProjects);
  // const linkProjects = document.createElement('a');
  // linkProjects.href = '#';
  // butProjects.append(linkProjects);
  // linkProjects.textContent = 'ПРОЕКТЫ';

  // const butContacts = document.createElement('li');
  // butContacts.classList.add('header__button');
  // subMenu.append(butContacts);
  // const linkContacts = document.createElement('a');
  // linkContacts.href = '#';
  // butContacts.append(linkContacts);
  // linkContacts.textContent = 'ПРОЕКТЫ';
};
