let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let input = document.getElementById("input-area")

//function to fetch data by api

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  //if input field is empty

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please enter a movie name</h3>`;
  }

  //if input isn't empty

  else{
    fetch(url).then((resp) => resp.json()).then((data) =>{
      //if movie exist in database
      if(data.Response == "True"){
        result.innerHTML = `
          <div class="info">
            <div class="poster">
              <img src=${data.Poster} class="poster-img">
            </div>
            <div>
              <h2>${data.Title}</h2>
              <div class="rating">
                <img src="https://img.icons8.com/color/48/null/filled-star--v1.png">
                <h4>${data.imdbRating}</h4>
              </div>
              <div class="details">
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
              </div>
              <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
              </div>
            </div>
          </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
    
        `;
      }

      //if movie doesn't exist in database
      else {
        result.innerHTML =`<h3 class="msg">${data.Error}</h3>`;
      }
    })

    //if error occur
    .catch(() => {
      result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
    });
  }
};

searchBtn.addEventListener("click", getMovie);
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
window.addEventListener("load", getMovie);
