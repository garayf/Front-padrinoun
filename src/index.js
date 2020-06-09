import React from "react";
import ReactDOM from "react-dom";
import UnalCanvas from "./Components/UnalTemplate/UnalCanvas";
import LoginForm from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./css/index.css";

ReactDOM.render(
  <BrowserRouter basename="/padrinoUN">
    <UnalCanvas>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/home" component={Home} />       
      </Switch>
    </UnalCanvas>
  </BrowserRouter>,
  document.getElementById("root")
);
