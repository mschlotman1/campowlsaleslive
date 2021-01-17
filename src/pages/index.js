import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
//import Components from "./Components/Components.jsx";
//import LandingPage from "./LandingPage/LandingPage.jsx";
//import ProfilePage from "./ProfilePage/ProfilePage.jsx";
//import LoginPage from "./LoginPage/LoginPage.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import ServicesPage from "./ServicesPage/ServicesPage.jsx";
import BetaPage from "./BetaPage/BetaPage.jsx";
import AboutPage from "./AboutPage/About.jsx";
import PricingPage from "./PricingPage/PricingPage.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/error404" component={ErrorPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/software-beta" component={BetaPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
);
