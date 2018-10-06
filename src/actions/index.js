import axios from "axios";

const API_KEY = "5d891a470c87b2ce4735978e2787fc7e";
const API_KEY1 = "bd42de895b1050e562a19d4b6dd92534";
const API_KEY2 = "0882376145a8bcae390107c5946c3cee";

const ROOT_URL = `https://food2fork.com/api/search?key=${API_KEY2}`;

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
export function getRecipe(ingredient) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `${proxy}${ROOT_URL}&q=${ingredient}&count=50`;
  return dispatch => {
    dispatch(fetchRecipes());
    console.log("Fetching true");
    return axios
      .get(url)
      .then(response => {
        if (response.data.count === 0) {
          //Flag when no recipes found
          dispatch(noRecipes());
        } else {
          //Flag when call is success
          dispatch(recieveRecipes(response));
          //flag when recipes is found
          dispatch(foundRecipes());
        }
      })
      .catch(error => {
        //Flag for error while fetching
        dispatch(errorFetching(error));
      });
  };
}
