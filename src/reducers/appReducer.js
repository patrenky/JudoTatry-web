import { NEWS, ADMIN } from "../actions/constants";

const initialState = {
  news: [],
  admin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS:
      return { ...state, ...action.payload };
    case ADMIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
