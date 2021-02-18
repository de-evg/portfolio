import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Page from "../page/page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/`} render={() => <Page />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
