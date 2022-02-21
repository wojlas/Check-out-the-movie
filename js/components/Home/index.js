import React, {useEffect, useState} from "react"
import Search from "./SearchView";
import MoviesList from "./MoviesList";
import { useDispatch } from "react-redux";
import { moviesFetching, moviesFetched, fetchedError } from "../../redux/actions/api_actions";
import api_url from "../../api";

export const linkStyle= {
    fontStyle: "Sans-serif",
    color: "#FFFFFF",
    fontSize: "25px",
    textDecoration: "none",
    margin: "15px",
    position: "relative",
    top: "35%",
    transform: "translate(0, -50%)",
    
}


// landing app page including menu bar on the top witch search movie widget
// and links to pages witch movies to watch and rating movies
// Below we have a list of films
const Landing = () => {
    const [search, setSearch] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(moviesFetching());
        for (let i=1; i<10; i++) {
        fetch(api_url + i)
            .then(resp=> resp.json())
            .then(resp=> dispatch(moviesFetched(resp)))
            .catch(error=> dispatch(fetchedError(error))) 
        }  
    },[])

    return (
    <>
        <div style={{height: "100px", width: "98%", backgroundColor: "#202020", display: "inline-block", paddingInline: "40px"}}> 
            <a href="#" onClick={()=>setSearch(!search)} style={linkStyle}>Search</a>
            <a href="#" style={linkStyle}>To View</a>
            <a href="#" style={linkStyle}>Viewed On</a>
        </div>
        <div onBlur={()=> setSearch(false)}>
            {search ? <Search/> : ''}
        </div>
        <div onClick={()=> setSearch(false)}>
            <MoviesList />
        </div>
    </>
)};

export default Landing;