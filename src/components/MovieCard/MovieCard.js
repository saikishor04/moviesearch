import React from 'react';

const MovieCard = (props) => {
  const {data} = props
  console.log(data)
  return (
  <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={data.poster} alt={data.original_title} />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{data.original_title}</h4>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
  </div>
  );
};

export default MovieCard;
