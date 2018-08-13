import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {

    render() {
        return (
            <div>
                <ul><h3>
                    <li>{this.props.movieName}</li>
                    <li>{this.props.moviePrice}</li>
                </h3></ul>
            </div>
        );
    }
}

MovieList.propTypes = {
    moviePrice: PropTypes.number.isRequired,
};

MovieList.defaultProps = {
    movieName: 'DEFAULT PRODUCT'
};

export default MovieList;