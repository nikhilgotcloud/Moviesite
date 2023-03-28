import { fetchSeries } from '@/redux/seriesSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch, fetchMovies } from '../../redux/moviesSlice';
import styles from "./SearchForm.module.css";


const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(searchTerm));
    dispatch(fetchMovies(searchTerm));
    dispatch(fetchSeries(searchTerm));
    // console.log("aa gya");
  };

  return (
    <>
    
    <form onSubmit={handleSubmit} className="d-flex" role="search">
      <input className={`${styles.search} form-control me-lg-2`}  type="text" value={searchTerm} placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
      <button className="btn btn-outline-success text-light me-lg-5 ms-2"type="submit"><i className="bi bi-search"></i></button>
    </form>
  


  </>
  );
};

export default SearchForm;
