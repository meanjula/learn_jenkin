import React from "react";
import Form from "./Form";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Switch, Route } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Form" component={Form} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </main>
  );
};

export default Main;
