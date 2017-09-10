import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { compose, withState } from "recompose";
import Waypoint from "react-waypoint";

import ScrollToTop from "./components/ScrollToTop";
import Menu from "./components/Menu";
import Main from "./containers/Main";
import News from "./containers/News";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Admin from "./containers/Admin";

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
            <Route path="/admin" component={Admin} />
          </div>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default compose(withState("pinnedHeader", "pinHeader", false))(App);
