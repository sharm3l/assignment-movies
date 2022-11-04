const moviesList = document.getElementById("moviesList");
const imdbUrl = "https://www.imdb.com/title/";

function search(e) {
  const text = e.target.value;
  filterMovies(text);
}

function createItem(movie) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  image.setAttribute("src", movie.poster);
  link.setAttribute("href", imdbUrl + movie.imdbID);
  link.setAttribute("target", "_new");

  li.appendChild(link).appendChild(image);
  return li;
}

function addMoviesToDom(movies) {
  const items = movies.map(createItem);

  items.forEach((item) => {
    moviesList.appendChild(item);
  });
}

function filterLatestMovies() {
  const latestMovies = movies.filter((item) => {
    return item.year > 2014;
  });
  const latestNames = latestMovies.map(createItem);
  moviesList.innerHTML = "";

  latestNames.forEach((item) => {
    moviesList.appendChild(item);
  });
}

function filterMovies(wordInMovie) {
  const filteredMovies = movies.filter((item) => {
    return item.title.includes(wordInMovie);
  });

  const moviesNames = filteredMovies.map(createItem);
  moviesList.innerHTML = "";

  moviesNames.forEach((item) => {
    moviesList.appendChild(item);
  });
}

function addEventListeners() {
  const filmFilter = document.getElementsByName("film-filter");
  filmFilter.forEach((filt) => {
    filt.addEventListener("change", function handleOnChangeEvent(event) {
      switch (event.target.value) {
        case "latest-movies":
          filterLatestMovies();
          break;
        case "avenger":
          filterMovies("Avengers");
          break;
        case "x-men":
          filterMovies("X-Men");
          break;
        case "princess":
          filterMovies("Princess");
          break;
        case "batman":
          filterMovies("Batman");
      }
    });
  });
  
  const typeFilm = document.getElementById("type-film");
  typeFilm.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      search(e);
    }
  });
}

document.addEventListener("load", addMoviesToDom(movies), addEventListeners());
