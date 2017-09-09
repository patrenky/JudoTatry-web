import React from "react";
import { compose } from "recompose";
import { map } from "lodash";

import Menu from "../components/Menu";
import Banner from "../components/Banner";

import { fakeNews } from "../enums/fakeData";

const News = () => (
  <div style={{ height: "500vh" }}>
    <Menu pinned={false} />
    <Banner />
    <div className="container news">
      {map(fakeNews, (item, i) => (
        <div key={`${i}-${item.timeStamp}`}>
          <p>{item.title}</p>
          <p>{item.timeStamp}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default compose()(News);
