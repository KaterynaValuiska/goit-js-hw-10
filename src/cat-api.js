


function fetchBreeds() {
  return fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}



function fetchPosts(breedId) {
  const searchParams = new URLSearchParams({
  breed_ids: breedId,
  api_key: "live_R01pkXHrQNXKQvYeJccUarYSnPmiUXkBylskayNCHe0VBB6reFt08aZBMVBfbdKf",
  });
  const urlCat = `https://api.thecatapi.com/v1/images/search?${searchParams}`;

    return fetch(urlCat)
        .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
          }
      return response.json();
    }
    )
}


export { fetchBreeds, fetchPosts }

