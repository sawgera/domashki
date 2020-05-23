' use strict';
const personalMovieDB = {
    count: 0, 
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмо");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert("Вы классичиский зритель");
        } else if (personalMovieDB.count >= 30){
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if ( personalMovieDB.privat){
            personalMovieDB.privat == false;
        } else {
            personalMovieDB.privat == true;
        }
    },
    writeYourGenre: function () {
        for ( let i = 1; i <= 3; i++){
             let genre = prompt( `Ваш любимы жанр под номером ${i}`).toLowerCase();

            if ( genre === '' || genre == null){
                console.log("Вы велли некоректне данные или не ввели их вообще");
                i--;
            } else {
                personalMovieDB.genres[ i - 1] = genre;
            } 

            /* let genre = prompt(`Введите вашы любимы жанры через запятую`).toLowerCase();

            if ( genre === '' || genre == null){
                console.log("Вы велли некоректне данные или не ввели их вообще");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }   */
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимые жанры ${i + 1} - это ${item}`);
        });
    }

};



