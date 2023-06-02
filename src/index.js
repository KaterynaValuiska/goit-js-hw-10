import { fetchBreeds, onSelectCat, catInfo, breedSelect  } from "./cat-api";

const loaderMess = document.querySelector('.loader');
const errorMess = document.querySelector('.error');

loaderMess.classList.add('hide');
errorMess.classList.add('hide');
fetchBreeds();

breedSelect.addEventListener('change', onSelectCat)


