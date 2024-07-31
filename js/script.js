let numberOfFilms; 

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// способ №1
function rememberMyFilms(){
    for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}  

rememberMyFilms();


//способ №2
// let count = 0;

// while(count < 2){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = +prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         count++
//     } else {
//         console.log('error');
//     }
// } 

//способ №3
// let count = 0;
// do{
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = +prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         count++
//     } else {
//         console.log('error');
//     }
// }while(count < 2);

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert("Вы классический зритель");
    }else if(personalMovieDB.count > 30){
        alert("Вы киноман");
    }else{
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
        
    }
}

writeYourGenres();

