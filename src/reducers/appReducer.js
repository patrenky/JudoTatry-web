import { SET } from "../actions/constants";

const initialState = {
  news: [],
  admin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
