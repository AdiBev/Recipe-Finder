import { ERROR_FETCHING } from "../actions/index";

export default function(state = false, action) {
  switch (action.type) {
    case ERROR_FETCHING:
      return action.payload;
    default:
      return state;
  }
}
