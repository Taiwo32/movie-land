import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCrad from "./MovieCrad";

//6c86ccd4

const API_URL = 'http://www.omdbapi.com?apikey=6c86ccd4';

// const movie1 = {
//     Title: "Amazing Spiderman Syndrome",
//     Year: "2012",
//     imdbID: "tt2586634",
//     Type: "movie",
//     Poster: "N/A"
// }
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm ,setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title} `);
        const data = await response.json()

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}

                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            
            { movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie)=>(
                                <MovieCrad movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                       <div className="empty"> 
                         <h2>No movies found</h2>
                       </div>
                    )}
            


        </div>
    );
}

export default App;