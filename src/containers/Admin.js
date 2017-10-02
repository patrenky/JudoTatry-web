import React from "react";
import Parser from "html-react-parser";
import { connect } from "react-redux";
import { compose } from "recompose";
import { map } from "lodash";

import Banner from "../components/Banner";
import Editor from "../components/news/Editor";
import Footer from "../components/Footer";

import { formatDate } from "../utils";
import { addNew } from "../actions";

const Admin = ({ news, addNew }) => (
  <div>
    <Banner />
    <div className="container news">
      <p className="news-title">Nová aktualita</p>
      <Editor addNew={addNew} />
      {map(news, (item, i) => (
        <div className="news-row" key={`${i}-${item.timeStamp}`}>
          <p className="news-title">{item.title}</p>
          <p className="news-time">{formatDate(item.time)}</p>
          <div className="news-text">{Parser(item.text)}</div>
        </div>
      ))}
    </div>
    <Footer />
  </div>
);

export default compose(connect(({ app: { news } }) => ({ news }), { addNew }))(Admin);
