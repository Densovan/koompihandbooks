import React, { lazy, Suspense } from "react";
import { BackTop } from "antd";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Chapter1 from "./components/chapters/chapter1";
import Chapter2 from "./components/chapters/chapter2";
import Loader from "./components/loader/loader";

function App() {
  return (
    <React.Fragment>
      <BackTop>
        <div className="ant-back-top-inner">
          <img src="/images/favicon.svg" />
        </div>
      </BackTop>
      <Router>
        <Switch>
          <Route exact path="/" component={Chapter1}></Route>
          <Route exact path="/chapter2" component={Chapter2}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
