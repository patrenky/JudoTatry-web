import React from "react";
import { withRouter } from "react-router-dom";

const SupportUsLink = ({ history }) => (
  <div className="container">
    <div className="flex-row flex-centered">
      <p className="reg-link" onClick={() => history.push("/podporte-nas")}>
        <i className="fa fa-users" />
        Podporte nás
      </p>
    </div>
  </div>
);

export default withRouter(SupportUsLink);
