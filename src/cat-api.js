// import SlimSelect from 'slim-select'

// const slimSelect = new SlimSelect({
//     select: '.breed-select',
//     // settings: { placeholder: true, text: 'placeholder text' },
//     events: { afterChange: onSelectCat},
// });



const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loaderMess = document.querySelector('.loader');
const errorMess = document.querySelector('.error');

function fetchBreeds() {
    fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
        ).then(breeds => {
            renderBreed(breeds);
        }).catch((error) => console.log(error));
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

   
function onSelectCat() {
  loaderMess.classList.remove('hide');
  catInfo.classList.add('hide');
  setTimeout(() => {
  fetchPosts()
    .then((breedId) => {
      catInfo.classList.remove('hide');
      fetchCatByBreed(breedId);
        })
      .catch((error) => {
        console.log(error);
        errorMess.classList.remove('hide');
      })
    .finally(() => {
      loaderMess.classList.add('hide');
      
    })
    
}, 500) 
}


function fetchPosts() {
    return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=live_R01pkXHrQNXKQvYeJccUarYSnPmiUXkBylskayNCHe0VBB6reFt08aZBMVBfbdKf")
        .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
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


export { fetchBreeds, onSelectCat, catInfo, breedSelect }