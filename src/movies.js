//The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const directorsArr = movies.map((x) => x.director);
//console.log(directorsArr)

function getAllDirectors(arr) {
  const cleanDirectorsArr = directorsArr.filter(
    (el, i) => directorsArr.indexOf(el) !== i
  );

  return cleanDirectorsArr;
}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  const dramaArr = arr.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });

  return dramaArr.length;
}

//console.log(howManyMovies(movies)) // 4

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr) {
  if (!arr.length) return 0;

  const sumScores = arr.reduce((acc, val) => {
    if (val.score) {
      return acc + val.score;
    } else {
      return acc;
    }
  }, 0);

  let avg = (sumScores / arr.length).toFixed(2);

  return avg.toString();
}

//console.log(scoresAverage(movies))// 8.31

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length === 0) return 0;

  const dramas = arr.filter((movie) => {
    if (movie.genre.includes('Drama')) {
      return true;
    } else {
      return false;
    }
  }, 0);

  const dramaAvg = scoresAverage(dramas);

  return dramaAvg;
}

//console.log(dramaMoviesScore(movies))// 8.32

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let newArr = movies.slice();

  let moviesByYear = newArr.sort((a, b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return (a.title.localeCompare(b.title))
  }, 0);

  return moviesByYear
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  let newArr = movies.slice();

  return newArr.map((movie) => movie.title).sort().slice(0,20)
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
