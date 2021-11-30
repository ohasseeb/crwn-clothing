import React from "react";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
);

function App() {
  return (
    <div>
      {/* Routes Acts As Switch */}
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
