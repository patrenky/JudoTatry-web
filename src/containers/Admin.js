import React from "react";
import Parser from 'html-react-parser';
import { compose } from "recompose";
import { map } from "lodash";

import Menu from "../components/Menu";
import Editor from "../components/Editor";

import { fakeNews } from "../enums/fakeData";

const News = () => (
  <div style={{ height: "500vh" }}>
    <Menu pinned={true} />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="container news">
      <h2>Admin</h2>
      {map(fakeNews, (item, i) => (
        <div key={`${i}-${item.timeStamp}`}>
          <p>{item.title}</p>
          <p>{item.timeStamp}</p>
          <div>{Parser(item.text)}</div>
        </div>
      ))}
      <Editor />
    </div>
  </div>
);

export default compose()(News);
