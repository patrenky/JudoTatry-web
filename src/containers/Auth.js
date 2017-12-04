import React from "react";
import { compose, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";
import * as storage from "../utils/storage";

const Authentication = () => <div />;

export default compose(
  withRouter,
  lifecycle({
    componentWillMount() {
      const { history } = this.props;

      let signed = false;
      const token = storage.get("token");

      if (!token || token === null) {
        signed = false;
      } else {
        if (token > Date.now()) signed = true;
        else signed = false;
      }
      if (!signed) {
        storage.remove("token");
        history.replace("/login");
      }
    }
  })
)(Authentication);
