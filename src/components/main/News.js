import React from "react";
import Parser from "html-react-parser";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { map } from "lodash";

import { formatDate } from "../../utils";

const News = ({ news, history }) => {
  if (news) {
    return (
      <div className="container">
        {/* <h2>Aktuality</h2> */}
        {map(news, (item, i) => {
          if (i < 3) {
            return (
              <div className="news-row" key={`${i}-${item.timeStamp}`}>
                <p className="news-title">{item.title}</p>
                <p className="news-time">{formatDate(item.time)}</p>
                <div className="news-text">{Parser(item.text)}</div>
              </div>
            );
          }
        })}
        <p className="news-more" onClick={() => history.push("/aktuality")}>
          Všetky aktuality
          <i className="fa fa-angle-right" />
        </p>
      </div>
    );
  }
  return null;
};

export default withRouter(connect(({ app: { news } }) => ({ news }), null)(News));
