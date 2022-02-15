import React from "react";
import { useSelector } from "react-redux";

const SingleMovie = () => {
    const movie = useSelector(state=> state.fetchMovies)
    return (
        <div style={{width: "140px", backgroundColor: "#E0E0E0", border: "solid black 0.5px", margin: "5px"}}>
            {movie.movies.length === 0 ? '' :( movie.movies.map(el => {
                return (
                    <div key={el.id}>
                        <h3>{el.value.Title}</h3>
                        <img src={el.value.Poster} style={{height: "100%", width: "100%"}}/>
                        <h5>{el.value.Actors}</h5>
                    </div>
                )
            }))}
        </div>
    )
};

export default SingleMovie;