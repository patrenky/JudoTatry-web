import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import ScrollToTop from "./components/ScrollToTop";
import Main from "./containers/Main";
import News from "./containers/News";
import Admin from "./containers/Admin";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router onUpdate={() => console.log("update")}>
        <ScrollToTop>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/aktuality" component={News} />
            <Route path="/o-jude" component={null} />
            <Route path="/kontakt" component={null} />
            <Route path="/admin" component={Admin} />
          </div>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default App;
