import React from "react";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
);

function App() {
  return (
    <div>
      {/* Routes Acts As Switch */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />

      </Switch>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
