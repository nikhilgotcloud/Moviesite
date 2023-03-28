import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";


function Home() {
  const [movies, setMovies] = useState([]);
  const { search } = useSelector((state) => state.movies);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  // console.log(search);
  const router = useRouter();
  function handleMovieClick(id) {
    setSelectedMovieId(id);
    router.push(`/detail?id=${id}`);
  }

  const fetchData = async (search = "food") => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=d946fac1&type=movie`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {

    fetchData();
  }, []);


  useEffect(() => {
    if (search) { fetchData(search); }


  }, [search]);

  return (
    //     <div className="container mb-4" >
    //   <div className="row mt-4 mb-5"style={{"backgroundColor":"blue"}}>
    //   {movies.map((movies) => (
    //       <div className="col-md-4 ">
    //         <div key={movies.imdbID}>
    //         <div className="card mt-4 mb-3"  style={{"borderRadius":"10% 20%"}}>
    //         <img src={movies.Poster} alt={`${movies.Title} poster - Image not available` } width={200} height={200}  className="ms-3 mt-2"/>
    //           <div className="card-body">
    //           <h5>{movies.Title}</h5>
    //           <p><b>Year : </b>{movies.Year}</p>
    //           <button type="button " className="btn btn-primary ms-3 "onClick={() => handleMovieClick(movies.imdbID)}>View Details</button>


    //           </div></div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <Splide options={{
      type: 'slide',
      perPage: 4,
      perMove: 1,
      gap: '0.5rem',
      rewind: true,
      pagination: false,
      cover: true,
      height: '25rem',
      breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
        1024: {
          perPage: 4,
        },
      },
    }}>
      {movies.map(movies => (
        <SplideSlide key={movies.imdbID}>
          <div className="movie-card  border border-primary rounded m-2 mt-md-3 shadow bg-white p-2 ">
          <img src={movies.Poster} alt={`${movies.Title} poster - Image not available` } width={200} height={200}  className=" ms-5 mt-2"/>
            <div className="movie-details">
              <h5>{movies.Title}</h5>
              <p><b>Year :</b>  {movies.Year}</p>
              <button type="button " className="btn btn-primary ms-5 ps-3 pe-3 "onClick={() => handleMovieClick(movies.imdbID)}>View Details</button>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Home;
