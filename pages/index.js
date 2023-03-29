import { Provider } from "react-redux";
import store from "../redux/store";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import MovieList from "../components/MovieList/MovieList";

// import SeriesList from "../components/SeriesList/SeriesList";
import HomeMovie from "@/components/Home/HomeMovie";
import HomeSeries from "@/components/Home/HomeSeries";
import styles from "./index.module.css"
import Detail from "@/components/Detail/Detail";




const index = () => {
  return (
    <div>
    <Provider store={store}>
 <Header/>
  <div className="mt-3">
  <h3 className={`${styles.movie} text-center mt-lg-5 pt-lg-3 `}>Movies</h3>
  
    {/* <MovieList/> */}
    <HomeMovie/>
    <h3 className="text-center" >Series</h3>
    {/* <SeriesList/> */}
    <HomeSeries/>
    <div className={`${styles.bottom} mb-lg-3 pb-lg-2 `}></div>
    
    </div>
   
  <Footer/>
</Provider>
</div>
  )
}

export default index