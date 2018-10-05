import { NO_RECIPES } from "../actions/index";
import { FOUND_RECIPES } from "../actions/index";

export default function(state=false, action) {
  switch(action.type) {
    case NO_RECIPES:
      return action.payload;
    case FOUND_RECIPES:
      return action.payload;
    default:
      return state;
  }
}
