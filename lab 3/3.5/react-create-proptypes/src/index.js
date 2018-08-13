import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';

var name = "Avengers";
var price = 250;

ReactDOM.render(
    <div><br/><h3>MOVIE LIST</h3>
        <MovieList movieName={name} moviePrice={price}/>
    </div>
    , document.getElementById('root'));
