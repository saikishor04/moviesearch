import { ADD_MOVIES } from "./movieActionType"

export const MovieAction = (movies) =>{
    return {
        type: ADD_MOVIES,
        payload: movies.results
    }
}