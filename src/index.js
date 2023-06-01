import { fetchBreeds, onSelectCat, catInfo, breedSelect  } from "./cat-api";

fetchBreeds();

breedSelect.addEventListener('change', onSelectCat)

