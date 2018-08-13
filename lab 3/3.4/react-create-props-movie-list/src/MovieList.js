import React, { Component } from 'react';

class MovieList extends Component {

    render() {

        return (
            <div>
                {this.props.movieArr.map(function (movie, i) {
                    return (
                        <ul><h3>
                            <li><img src={movie.image} tilte={movie.name} height="300" width="400" alt={movie.name}/></li>
                            <li>{movie.name}</li>
                            <li>${movie.price}</li><br/></h3>
                        </ul>
                    )
                })}
            </div>
        );
    }
}

export default MovieList;