import React from "react";
import Parser from "html-react-parser";
import { compose } from "recompose";
import { map } from "lodash";

import Banner from "../components/Banner";
import Footer from "../components/Footer";

import { data } from "../enums/news";
import { formatDate } from '../utils';

const News = () => (
  <div>
    <Banner />
    <div className="container news">
      {map(data, (item, i) => (
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

export default compose()(News);
