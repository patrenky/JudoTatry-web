import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./containers/Main";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/aktuality" component={null} />
          <Route exact path="/o-jude" component={null} />
          <Route exact path="/kontakt" component={null} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
