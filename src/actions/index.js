import axios from "axios";

import { app_id, app_key } from "../config/config";
import history from "../history";

export const FETCH_RECIPES = "FETCH_RECIPES";
export const RECIEVE_RECIPES = "RECIEVE_RECIPES";
export const ERROR_FETCHING = "ERROR_FETCHING";
export const NO_RECIPES = "NO_RECIPES";
export const FOUND_RECIPES = "FOUND_RECIPES";

export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
    payload: true
  };
}

export function recieveRecipes(response) {
  return {
    type: RECIEVE_RECIPES,
    payload: response
  };
}

export function errorFetching(error) {
  return {
    type: ERROR_FETCHING,
    payload: error
  };
}

export function noRecipes() {
  return {
    type: NO_RECIPES,
    payload: true
  };
}

export function foundRecipes() {
  return {
    type: FOUND_RECIPES,
    payload: false
  };
}

//this is a redux-thunk
const ROOT_URL = `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}`;

export function getRecipes(ingredient) {
  const url = `${ROOT_URL}&q=${ingredient}&from=0&to=50`;
  return dispatch => {
    dispatch(fetchRecipes());
    return axios
      .get(url)
      .then(response => {
        if (response.data.count === 0) {
          //dispatch when no recipes found
          dispatch(noRecipes());
          history.push("error");
        } else {
          //dispatch when api req is success
          dispatch(recieveRecipes(response));
          //dispatch when recipes is found
          dispatch(foundRecipes());
          history.push("/recipes");
        }
      })
      .catch(error => {
        //dispatch while error fetching
        dispatch(errorFetching(error));
        history.push("/error");
      });
  };
}
