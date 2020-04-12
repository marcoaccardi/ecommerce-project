import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Signup } from "./user/Signup";
import { Signin } from "./user/Signin";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/signup" exact component={Signup}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
