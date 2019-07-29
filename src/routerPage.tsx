import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Main/Homepage/Homepage";

const RouterPage = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </main>
  );
};

export default RouterPage;
