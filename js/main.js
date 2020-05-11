const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
const personalMovieDB = {
    count: numberOfFilms, 
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Последний просмотренный фильм", "");
const b = prompt("На сколько оцените его", "");
const c = prompt("Сколько фильмов вы уже посмотрели", "");
const d = prompt("На сколько оцените его", "");

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);