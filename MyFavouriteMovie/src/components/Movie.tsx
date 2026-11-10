
import React from 'react';
import posterImg from '../assets/poster.jpg';
import './Movie.css';

type MovieProps = {
    title?: string;
    year?: number;
    genre?: string;
    director?: string;
    description?: string;
    poster?: string;
};

export default class Movie extends React.Component<MovieProps> {
    static defaultProps = {
        title: 'Scent of a Woman',
        year: 1992,
        genre: 'Drama',
        director: 'Martin Brest',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        poster: posterImg
    };

    render() {
        const { title, year, genre, director, description, poster } = this.props;

        return (
            <div className="movie-card">
                <img src={poster} alt={title} />

                <div className="movie-content">
                    <h2>{title}</h2>
                    <p>Рік виходу: {year}</p>
                    <p>Жанр: {genre}</p>
                    <p>Режисер: {director}</p>

                    <p className="movie-description">
                        <strong>Короткий опис</strong>
                        <br />
                        {description}
                    </p>
                </div>
            </div>
        );
    }
}
