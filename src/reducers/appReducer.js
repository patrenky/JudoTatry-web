import { NEWS } from "../actions/constants";

const initialState = {
  news: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
