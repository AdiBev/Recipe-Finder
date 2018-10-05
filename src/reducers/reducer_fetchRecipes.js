import { FETCH_RECIPES } from "../actions/index";

export default function(state = false, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload;
    default:
      return state;
  }
}
