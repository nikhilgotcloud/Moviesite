import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

function HomeSeries() {
  const [series, setSeries] = useState([]);
  const {search} = useSelector((state) => state.movies);



  const [selectedMovieId, setSelectedMovieId] = useState(null);
  // console.log(search);
  const router = useRouter();
  function handleMovieClick(id) {
    setSelectedMovieId(id);
    router.push(`/detail?id=${id}`);
  }

  const fetchData = async (search= "america") => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=d946fac1&type=series`);
    const data = await response.json();
    setSeries(data.Search);
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  useEffect(() => {
   if(search){fetchData(search);}
  //  else {
  //   fetchData();
  // }
    
  }, [search]);

  return (
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
      {series.map(series => (
        <SplideSlide key={series.imdbID}>
          <div className="movie-card  border border-warning rounded m-2 shadow bg-white p-2 ">
          <img src={series.Poster} alt={`${series.Title} poster - Image not available` } width={200} height={200}  className=" ms-5 mt-2"/>
            <div className="movie-details">
              <h5>{series.Title.slice(0,30)}</h5>
              <p><b>Year :</b> {series.Year}</p>
              <button type="button " className="btn btn-warning ms-5 ps-3 pe-3 "onClick={() => handleMovieClick(series.imdbID)}>View Details</button>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default HomeSeries;
