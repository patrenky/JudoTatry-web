import React from "react";
import { withRouter } from "react-router-dom";

const Links = ({ history }) => (
  <div className="container">
    <br />
    <div className="flex-row flex-centered">
      <p className="reg-link bigger" onClick={() => history.push("/letne-sustredenie")}>
        <i className="fa fa-sun-o" />
        Letné sústredenie + inštrukcie
      </p>
    </div>
    <div className="flex-row flex-centered">
      <p className="reg-link" onClick={() => history.push("/podporte-nas")}>
        <i className="fa fa-users" />
        Podporte nás
      </p>
    </div>
  </div>
);

export default withRouter(Links);
