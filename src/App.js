import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobFilter from "../src/components/jobboard/JobFilter";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={JobFilter} />
        <Route>{"404"}</Route>
      </Switch>
    </Router>
  );
};

export default App;
