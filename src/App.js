import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { compose, withState, lifecycle } from "recompose";
import Waypoint from "react-waypoint";

import ScrollToTop from "./components/ScrollToTop";
import Menu from "./components/Menu";
import Main from "./containers/Main";
import News from "./containers/News";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Login from './containers/Login';
import Admin from "./containers/Admin";
import SupportUs from "./containers/SupportUs";

import { getNews } from "./actions";

const App = ({ store, pinnedHeader, pinHeader }) => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <div>
            <Menu pinned={pinnedHeader} />
            <Waypoint
              scrollableAncestor={window}
              onPositionChange={e => pinHeader(e.currentPosition === "above")}
              topOffset={-100}
            />
            <Route exact path="/" component={Main} />
            <Route path="/aktuality" component={News} />
            <Route path="/judo" component={About} />
            <Route path="/kontakt" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/podporte-nas" component={SupportUs} />
          </div>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default compose(
  withState("pinnedHeader", "pinHeader", false),
  connect(null, { getNews }),
  lifecycle({
    componentDidMount() {
      this.props.getNews();
    }
  })
)(App);
