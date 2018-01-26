import React from "react";
import Parser from "html-react-parser";
import { connect } from "react-redux";
import { map } from "lodash";

import Banner from "../components/Banner";
import Footer from "../components/Footer";

import { formatDate } from "../utils";

const News = ({ news }) => (
  <div>
    <Banner />
    <div className="container news">
      <h2>Aktuality</h2>
      {news.length ? (
        map(news, (item, i) => (
          <div className="news-row" key={`${i}-${item.time}`}>
            <p className="news-title">{item.title}</p>
            <p className="news-time">{formatDate(item.time)}</p>
            <div className="news-text">{Parser(item.text)}</div>
          </div>
        ))
      ) : (
          <div className="flex-row flex-centered news-empty">
            <p>
              Žiadne aktuality...
            <i className="fa fa-frown-o" />
            </p>
          </div>
        )}
    </div>
    <Footer />
  </div>
);

export default connect(({ app: { news } }) => ({ news }), null)(News);
