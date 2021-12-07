import React from "react";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth ,createUserProfileDocument} from './firebase/firebase.utils'


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

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  
      // this.setState({currentUser: null})
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          // document snapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean
          console.log(snapShot.data());

          this.setState({
            currentUser: {
              id: snapShot.id,
                  ...snapShot.data()
            }// end current user

          })// end this.setState
        
        });

        console.log("STATE" , this.state);
      }// end if
      else{
        this.setState({currentUser: userAuth});
      }
      createUserProfileDocument(userAuth);
      // console.log(user);
    }) // method from the auth library
  }// end component did mount


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
