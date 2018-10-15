import { combineReducers } from "redux";
import RecipeReducer from "./reducer_recipe";
import ErrorReducer from "./reducer_error";
import NoRecipesReducer from "./reducer_noRecipes";
import FetchRecipes from "./reducer_fetchRecipes";

const rootReducer = combineReducers({
  loadRecipes: FetchRecipes,
  recipes: RecipeReducer,
  error: ErrorReducer,
  noRecipes: NoRecipesReducer
});

export default rootReducer;
