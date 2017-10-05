import React from "react";
import Parser from "html-react-parser";
import { connect } from "react-redux";
import { compose } from "recompose";
import { map } from "lodash";

import Banner from "../components/Banner";
import Editor from "../components/news/Editor";
import Footer from "../components/Footer";
import Login from "./Login";

import { formatDate } from "../utils";
import { addNew } from "../actions";

const Admin = ({ admin, news, addNew }) => {
  if (admin)
    return (
      <div>
        <Banner />
        <div className="container news">
          <h2>Vitaj späť Silvinka!</h2>
          <Editor addNew={addNew} />
          {map(news, (item, i) => (
            <div className="news-row news-admin" key={`${i}-${item.timeStamp}`}>
              <p className="news-title">
                {item.title}
                <i className="fa fa-pencil" />
                <i className="fa fa-trash-o" />
                {/* <i className="fa fa-check" /> */}
              </p>
              <p className="news-time">{formatDate(item.time)}</p>
              <div className="news-text">{Parser(item.text)}</div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  return <Login />;
};

export default compose(connect(({ app: { admin, news } }) => ({ admin, news }), { addNew }))(Admin);
