
const breedSelect = document.querySelector('.breed-select');


function fetchBreeds() {
    return
    fetch("https://api.thecatapi.com/v1/breeds")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
        ).then(breeds => {
            console.log(breeds);
            return breeds;
        }).then(breeds => {
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
  breedSelect.innerHTML = markup;
}
