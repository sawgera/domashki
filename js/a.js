'use strict';

let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms, 
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for ( let i = 0; i < 2; i++){
        const a = prompt("Последний просмотренный фильм", "");
        const b = +prompt("На сколько оцените его", "");
    
        if( a != null && b != null && a != '' && b !='' && a.length < 50){
            personalMovieDB.movie[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    } 
}

rememberMyFilms ();


function detectPersonalLevel (){
    if (personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмо");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Вы классичиский зритель");
    } else if (personalMovieDB.count >= 30){
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.privat);

function writeYourGenre () {

    for ( let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимы жанр под номером ${i}`);
        personalMovieDB.genres[ i - 1] = genre;
    }
    
}

writeYourGenre ();


