import React from "react";
// import Parser from "html-react-parser";
import { compose } from "recompose";
// import { map } from "lodash";

import Banner from "../components/Banner";
import Editor from "../components/news/Editor";

// import { data } from "../enums/news";

const Admin = () => (
  <div>
    <Banner />
    <div className="container news">
      {/* {map(data, (item, i) => (
        <div key={`${i}-${item.timeStamp}`}>
          <p>{item.title}</p>
          <p>{item.timeStamp}</p>
          <div>{Parser(item.text)}</div>
        </div>
      ))} */}
      <Editor />
    </div>
  </div>
);

export default compose()(Admin);
