import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const HomePage = () => {
    const [newArrivals, setNewArrivals] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        axios.get('/api/movies?sort=newest&limit=5')
            .then(res => {
                setNewArrivals(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios.get('/api/movies?sort=rating&limit=5')
            .then(res => {
                setMostPopular(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios.get('/api/movies?sort=year&limit=5')
            .then(res => {
                setRecommended(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="container mt-3">
                <section>
                    <h2>New Arrivals</h2>
                    <MovieList movies={newArrivals} type="newArrivals" />
                </section>

                <section>
                    <h2>Most Popular</h2>
                    <MovieList movies={mostPopular} type="mostPopular" />
                </section>

                <section>
                    <h2>Recommended</h2>
                    <MovieList movies={recommended} type="recommended" />
                </section>
            </div>
        </div>
    );
}

export default HomePage;
