import React from "react";

import { openLink } from "../../utils";

const InfoBar = () => (
  <div className="infobar">
    <div className="infobar-content">
      <p>
        <i className="fa fa-phone" />
        0905 977 765
      </p>
      <p>
        <i className="fa fa-envelope-o" />
        ssedlackova.silvia@gmail.com
      </p>
      <p onClick={() => openLink("http://www.facebook.com/judotatry/")}>
        <i className="fa fa-facebook" />
        Facebook
      </p>
    </div>
  </div>
);

export default InfoBar;
