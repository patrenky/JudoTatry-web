import React from "react";
import { connect } from "react-redux";
import { compose, withState } from "recompose";
import { map } from "lodash";

import Auth from './Auth';
import Banner from "../components/Banner";
import Editor from "../components/news/Editor";
import NewItem from "../components/news/NewItem";
import Footer from "../components/Footer";

import { createNew } from "../actions";

const Admin = ({ news, createNew, isEditing, setEditing }) => (
  <div>
    <Auth />
    <Banner />
    <div className="container news">
      <h2>Vitaj späť pani tréner!</h2>
      {isEditing ?
        <Editor action={createNew} closeEditor={() => setEditing(false)} />
        :
        <p className="news-add" onClick={() => setEditing(true)}>
          <i className="fa fa-fw fa-plus" />Pridať šťavnatú aktualitku
        </p>}
      {map(news, (item, i) => <NewItem key={`${i}-${item.timeStamp}`} data={item} />)}
    </div>
    <Footer />
  </div>
);

export default compose(
  connect(({ app: { news } }) => ({ news }), { createNew }),
  withState("isEditing", "setEditing", false)
)(Admin);
