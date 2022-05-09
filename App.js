import './App.css';
import MovieList from './Component/MovieList';
import Search from './Component/Search';
import FilmsData from './Data/Data';
import {useState} from 'react';
import AddMovie from './Component/AddMovie';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  //Data to grab
  const [movieData, setMovieData] = useState(FilmsData);
  
  //Handle the Search process
  const [search, setSearch] = useState('');
  const handleSearch = (el) => setSearch(el.target.value);

  //Handle the Rating process
  const [searchRating, setSearchRating] = useState(1);
  const handleRating = (rating) => setSearchRating(rating);

  //ADD Movie
  const handleAdd=(newMovieData)=>setMovieData([...movieData, newMovieData])

  return (
    <Routes>
      <Route path="/" element={ <div className="App">
    <Search search={search} handleSearch={handleSearch} handleRating={handleRating} searchRating={searchRating}/>
    <MovieList
    movies={movieData.filter((el)=>el.name
      .toLowerCase()
      .includes(search.toLocaleLowerCase().trim())
      && el.rating>=searchRating)}
    />
    <AddMovie handleAdd={handleAdd}/>
    </div>}/>
    <Rout path="/:id" element={<Description/>}/>
    <Route path='*' element={<ErrorPage/>}/>    
    </Routes>


  );
}

export default App;
