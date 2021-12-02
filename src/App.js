import React from "react";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils'


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      constructor: null
    }
  }


  unsubscribeFromAuth = null; 

  componentDidMount() {
    // when we call fetch it won't call it again unless the page is refreshed
    //or signed up again cause thats the only way this function will go gain

    auth.onAuthStateChanged(user => {  
      this.setState({currentUser: null})
      console.log(user);
    }) // method from the auth library
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Routes Acts As Switch */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
  
        {/* <HomePage /> */}
      </div>
    );
  } // end render

}// end class

export default App;
