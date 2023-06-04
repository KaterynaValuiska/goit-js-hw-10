import { fetchBreeds, onSelectCat, breedSelect  } from "./cat-api";
// import SlimSelect from 'slim-select'

// const slimSelect = new SlimSelect({
//     select: '.breed-select',
//     events: { afterChange: onSelectCat},
// });

const loaderMess = document.querySelector('.loader');
const errorMess = document.querySelector('.error');

loaderMess.classList.add('hide');
errorMess.classList.add('hide');


fetchBreeds();

breedSelect.addEventListener('change', onSelectCat)


