'use strict';
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
const personalMovieDB = {
    count: numberOfFilms, 
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

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

/*   ЦЫКЛ WHILE
let i = 0; 
while( i < 2) {
    const a = prompt("Последний просмотренный фильм", "");
    const b = +prompt("На сколько оцените его", "");

    if( a != null && b != null && a != '' && b !='' && a.length < 50){
        personalMovieDB.movie[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++;
} */

/*  ЦЫКЛ DO WHILE
let i = 0; 
do {
    const a = prompt("Последний просмотренный фильм", "");
    const b = +prompt("На сколько оцените его", "");

    if( a != null && b != null && a != '' && b !='' && a.length < 50){
        personalMovieDB.movie[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++; 
}while(i < 2); */

if (personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмо");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Вы классичиский зритель");
} else if (personalMovieDB.count >= 30){
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);