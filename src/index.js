import { fetchBreeds, fetchPosts } from "./cat-api";
// import Notiflix from 'notiflix';
// import SlimSelect from 'slim-select'

// const slimSelect = new SlimSelect({
//     select: '.breed-select',
//     events: { afterChange: onSelectCat},
// });

const loaderMess = document.querySelector('.loader');
const errorMess = document.querySelector('.error');
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');


loaderMess.classList.add('hide');
errorMess.classList.add('hide');

selectBreeds();

function selectBreeds() {
    fetchBreeds()
        .then((breeds) => {
            console.log(breeds);
            renderBreed(breeds);
            
        }).catch((error) => {
          console.log(error);
          errorShow();
})
      .finally(() => {
    
    });
};

function renderBreed(breeds) {
    const markup = breeds
        .map((breed) => {
            return `
      <option value="${breed.id}">${breed.name}</option>
      `;
        })
        .join("");
    // slimSelect.setData(markup);
    breedSelect.innerHTML = markup;
}


breedSelect.addEventListener('change', onSelectCat)

function onSelectCat(evt) {
  loaderMess.classList.remove('hide');
  catInfo.classList.add('hide');
    catInfo.innerHTML = '';

    // хочу тут присвоїти breedId індетифікатор вибраного кота, але як?
    let breedId = evt.target.value;
    console.log(evt.target.value);
  
  fetchPosts(breedId)
    .then((breedId) => {
        console.log(breedId);
      fetchCatByBreed(breedId);
        })
      .catch((error) => {
        console.log(error);
        errorShow();
      })
    .finally(() => {
      catInfo.classList.remove('hide');
      loaderMess.classList.add('hide');
      
    }) 
}

function fetchCatByBreed(breedId) {
  const markup = breedId
      .map(({ url, breeds }) => {
          for (const breed of breeds) {
              const cat = `
      <img src="${url}" alt="${breed.name}" width="300"/>
      <div> <b>${breed.name}</b>
      <p>${breed.description} </p>
      <p> <b>Temperament:</b> ${breed.temperament}   </p>
      </div>`;
              return cat;
        }
    })
    .join("");
    
    catInfo.innerHTML = markup;

}



function errorShow() {
  Notify.failure('Oops! Something went wrong! Try reloading the page!');
}