import React, {useEffect, useState} from 'react';
import './App.css';
import Movies from './components/Movies';
//these are constants
const Featured_Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=096f57d1b2175edc0c928a458b9058f8";
const Search_API = "https://api.themoviedb.org/3/search/movie?&api_key=096f57d1b2175edc0c928a458b9058f8&query="; 

function App() {
  //use the hook below to define state
  const [ movies, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

//use effect is used to get the data and set it into state
  useEffect(()=> {
    fetch(Featured_Api)
    .then((res)=> res.json())
    .then((data) => {
      setMovies(data.results);
    })
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();

      if(searchTerm) {
    fetch(Search_API + searchTerm)
    .then((res)=> res.json())
    .then((data) => {
      setMovies(data.results);
    });

    setSearchTerm('');
    }
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);

  }
  
  return (
    <>
     <header>
     <div><h2>Movie Nights</h2></div>
       <form onSubmit={handleOnSubmit}>
        <input className='search' type="text" placeholder='Search...' value={searchTerm} onChange={handleOnChange}/>
       </form>
      </header>
    <div className="movie_container">
      {movies.length > 0 
        && movies.map((movie) =>
        <Movies key={movie.id} {...movie}/>
      )} 
    </div>
    </>
  );
}

export default App;
