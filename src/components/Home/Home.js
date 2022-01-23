
import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import MovieApi from '../../common/apis/MovieApi';
import {APIKEY} from "../../common/apis/MovieApiKey"
import { useDispatch , useSelector } from 'react-redux';
import { MovieAction } from '../../features/movies/movieActions';

const Home = () => {
  
  const dispatch = useDispatch()
  useEffect(()=>{ 
    const fetchMovies = async ()=>{
        const response = await MovieApi.get(`/movie/popular/?api_key=${APIKEY}`)
        .catch(err =>{
          console.log("Err :" ,err)
        })
         dispatch(MovieAction(response.data))
       //console.log(response.data)
    }
    fetchMovies()
  },[])

  return (
    <div>
  <div className='banner-img'></div>
      <MovieListing />
  </div>
  );
};

export default Home;
