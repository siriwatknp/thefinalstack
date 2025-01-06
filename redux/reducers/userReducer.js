import { USER_THEME_CHANGE } from "../actions/types";

const initialState = {
  theme: "light",
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case USER_THEME_CHANGE:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
