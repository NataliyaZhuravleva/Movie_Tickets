//Business Logic
//Movie list business logic
function MovieList() {
  this.movies = [];
  this.movieID = 0;
}
MovieList.prototype.addMovie = function (movie) {
  movie.id = this.AssignID();
  this.movies.push(movie);
}

MovieList.prototype.AssignID = function () {
  this.movieID += 1;
  return this.movieID;
}

//Movie business logic
//constructor for movie instances
function Movie(movieName, moviePrice, movieRelease) {
  this.movieName = movieName;
  this.moviePrice = moviePrice;
  this.movieRelease = movieRelease;
}

//Main Business logic
let movieList = new MovieList();

//movie instances keep movie name, price and release flag (0 for old movie and 1 for the new one)
let movie1 = new Movie("Braveheart", 5, 0);
let movie2 = new Movie("Tenet", 10, 1);
let movie3 = new Movie("The Mandalorian", 10, 1);
let movie4 = new Movie("Joker", 5, 0);

movieList.addMovie(movie1);
movieList.addMovie(movie2);
movieList.addMovie(movie3);
movieList.addMovie(movie4);

//UI Logic
function showMovieListCheckbox(movieListToShow) {
  let moviesList = $("select#movies");
  let htmlForMovieChoosing = "";
  movieListToShow.movies.forEach(function (movie) {
    htmlForMovieChoosing += "<option value=" + movie.id + ">" + movie.movieName + "</option>";
  });
  moviesList.html(htmlForMovieChoosing);
}

$(document).ready(function () {
  showMovieListCheckbox(movieList);
})