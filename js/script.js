const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// способ № 1
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = +prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }  


//способ № 2
let count = 0;

while(count < 2){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = +prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        count++
    } else {
        console.log('error');
    }
} 



console.log(personalMovieDB);




// if(personalMovieDB.count < 10){
//     alert("Просмотрено довольно мало фильмов");
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//     alert("Вы классический зритель");
// }else if(personalMovieDB.count > 30){
//     alert("Вы киноман");
// }else{
//     alert("Произошла ошибка");
// }