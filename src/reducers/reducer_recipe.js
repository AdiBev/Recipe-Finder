import { RECIEVE_RECIPES } from "../actions/index";
export default function(state = false, action) {
  switch (action.type) {
    case RECIEVE_RECIPES:
      return [action.payload.data];
    default:
      return state;
  }
}
