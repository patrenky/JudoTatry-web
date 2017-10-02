import { NEWS } from "./constants";

// http://debugme.6f.sk

const writeFile = news => async dispatch => {
  try {
    const data = encodeURIComponent(JSON.stringify(news));
    await fetch(`/api?write=${data}`);
    dispatch({
      type: NEWS,
      payload: { news }
    });
  } catch (e) {}
};

export const readFile = () => async dispatch => {
  try {
    const response = await fetch("/api?read=true");
    const body = await response.json();
    dispatch({
      type: NEWS,
      payload: { news: JSON.parse(body) }
    });
  } catch (e) {}
};

export const addNew = data => (dispatch, getState) => {
  const news = getState().app.news;
  dispatch(writeFile([data, ...news]));
};
