import React from "react";

import { openLink } from "../utils";
import RegDocument from "../assets/doc/regDoc.pdf";

const RegDoc = () => (
  <div className="container">
    <div className="flex-row flex-centered">
      <p className="reg-link" onClick={() => openLink(RegDocument)}>
        <i className="fa fa-file-text" />
        Prihláška do klubu
      </p>
    </div>
  </div>
);

export default RegDoc;
