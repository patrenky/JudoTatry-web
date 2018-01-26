import { reverse } from "lodash";
import { SET } from "./constants";
import * as storage from "../utils/storage";
import fetch from "../utils/fetch";
import { admin } from "../enums/admin";

/** LOGIN */
export const login = ({ username, password }) => dispatch => {
  if (username === admin.username && password === admin.password) {
    const token = Date.now() + 1000 * 60 * 60;
    storage.set("token", token);
    return true;
  }
  return false;
};

/** NEWS */
export const getNews = () => async dispatch => {
  try {
    const response = await fetch("/api/news/read.php");
    const news = await response.json();

    dispatch({
      type: SET,
      payload: { news: reverse(news) }
    });
  } catch (e) {}
};

export const createNew = data => async dispatch => {
  try {
    const response = await fetch("/api/news/create.php", {
      method: "POST",
      body: JSON.stringify(data)
    });
    const status = await response.json();
    console.log(status);

    dispatch(getNews());
  } catch (e) {}
};

export const deleteNew = id => async dispatch => {
  try {
    const response = await fetch("/api/news/delete.php", {
      method: "POST",
      body: JSON.stringify({ id })
    });
    const status = await response.json();
    console.log(status);

    dispatch(getNews());
  } catch (e) {}
};

export const updateNew = data => async dispatch => {
  try {
    const response = await fetch("/api/news/update.php", {
      method: "POST",
      body: JSON.stringify(data)
    });
    const status = await response.json();
    console.log(status);

    dispatch(getNews());
  } catch (e) {}
};
