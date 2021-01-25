import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageMain from "../page-main/page-main";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/`} render={() => <PageMain />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
