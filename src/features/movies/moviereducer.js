import React from 'react';
import { ADD_MOVIES } from './movieActionType';

const initialState = {
    movies: []
}

const moviereducer = (state=initialState,action) => {
        switch (action.type) {
            case ADD_MOVIES:
                return {
                    ...state, movies : action.payload
                }
            default:
                return state;
        }


  return (
  <div>

  </div>
  );
};

export default moviereducer;
