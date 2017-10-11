import React from "react";
import Parser from "html-react-parser";
import { connect } from "react-redux";
import { compose, withState } from "recompose";
import { map } from "lodash";

import Banner from "../components/Banner";
import Editor from "../components/news/Editor";
import Footer from "../components/Footer";
import Login from "./Login";

import { formatDate } from "../utils";
import { addNew, removeNew } from "../actions";

const NewItem = compose(
  connect(null, { removeNew }),
  withState("isDelete", "setDelete", false)
)(({ item, idx, removeNew, isDelete, setDelete }) => (
  <div className="news-row news-admin">
    <p className="news-title">
      {item.title}
      {/* <i className="fa fa-pencil" /> */}
      {isDelete ? (
        <span>
          <i
            className="fa fa-check"
            onClick={() => {
              removeNew(idx);
              setDelete(false);
            }}
          />
          <i className="fa fa-times" onClick={() => setDelete(false)} />
        </span>
      ) : (
        <i className="fa fa-trash-o" onClick={() => setDelete(true)} />
      )}
    </p>
    <p className="news-time">{formatDate(item.time)}</p>
    <div className="news-text">{Parser(item.text)}</div>
  </div>
));

const Admin = ({ admin, news, addNew }) => {
  if (admin)
    return (
      <div>
        <Banner />
        <div className="container news">
          <h2>Vitaj späť Silvinka!</h2>
          <h5>Novinka: už dokážeš vymazať príspevok pomocou ikonky koša</h5>
          <Editor addNew={addNew} />
          {map(news, (item, i) => <NewItem key={`${i}-${item.timeStamp}`} item={item} idx={i} />)}
        </div>
        <Footer />
      </div>
    );
  return <Login />;
};

export default compose(connect(({ app: { admin, news } }) => ({ admin, news }), { addNew }))(Admin);
