import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';

var movies = [
    {
        "name":"Harry Potter",
        "price": 199.00,
        "image":"http://www.exhibitionworld.co.uk/wp-content/uploads/2018/02/EW_Harry-Potter_Featured.jpg"
    },
    {
        "name":"Avenger",
        "price": 250.00,
        "image":"http://www.techxiler.com/wp-content/uploads/2018/05/The-Avengers-Movies-1.jpg"
    }
]

ReactDOM.render(
    <div><br/><h3>MOVIE LIST</h3>
        <MovieList movieArr={movies}/>
    </div>
    , document.getElementById('root'));
