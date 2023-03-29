
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react'
import { Provider } from "react-redux";
import store from "../../redux/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";



const Detail = () => {
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchMovie() {
      const { id } = router.query;
      const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d946fac1`);
      const data = await res.json();
      setMovie(data);
    }

    if (router.query.id) {
      fetchMovie();
    }
  }, [router.query.id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Provider store={store}>

        <Header />
        <Footer />
        <div className="row">
          <div className="col-8">
        <div className={`${styles.left} ms-4 `}>
        <h2 className={`${styles.title} text-left`} >{movie.Title}</h2>

        
        <div className={`${styles.topic} d-flex flex-row  `}>
          <div className="py-lg-2 "><p><b className={`${styles.parameter} ms-4`}>IMDB Rating : </b><i className="bi bi-star-fill text-dark"> {movie.imdbRating}</i></p></div>
          <div className="p-lg-2 px-4"><p><b className={`${styles.parameter} `}>Runtime : </b><i className="bi bi-camera-reels text-dark"> {movie.Runtime}</i></p></div>
          <div className="p-lg-2 px-lg-4 "><p><b className={`${styles.parameter} `}>Year : </b><i className="bi bi-calendar2-week text-dark"> {movie.Year}</i></p></div>
        </div>
        
       
        <p className={`styles.plot`}>{movie.Plot}</p>
        <p><b>Director :</b> {movie.Director}</p>
        <p><b>Actors :</b> {movie.Actors}</p>
        <p><b>Released :</b> {movie.Released}</p>
        <p><b>Genre :</b> {movie.Genre}  </p>
        <p><b>Awards Won :</b> {movie.Awards}  </p>
        </div></div>
        <div className="col-4">

        <div className={`${styles.right} `}><img src={movie.Poster} alt={`${movie.Title} poster -Image not available`}  /></div>
        </div></div>
      </Provider>


    </div>
  )
}

export default Detail