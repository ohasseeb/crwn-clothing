import React from "react";
import { BrowserRouter, Switch, Routes, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {connect} from 'react-redux';
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth ,createUserProfileDocument} from './firebase/firebase.utils';
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null; 

  componentDidMount() {

    const {setCurrentUser} = this.props; 
    // when we call fetch it won't call it again unless the page is refreshed
    //or signed up again cause thats the only way this function will go gain

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  
      // this.setState({currentUser: null})
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          // document snapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean
          // console.log("Current User",snapShot.data());


          setCurrentUser({
            currentUser: {
              id: snapShot.id,
                  ...snapShot.data()
            }// end current user

          })// end this.setState
        
        });

        // console.log("Current User" , this.state);
      }// end if
      else{
        // this.setState({currentUser: userAuth});
        setCurrentUser(userAuth);
      }
      createUserProfileDocument(userAuth);
      // console.log(user);
    }); // method from the auth library
  }// end component did mount


  componentWillUnmount() {
    // Look up this Life Cycl eMethod again
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Routes Acts As Switch */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route exact path="/signin" render= {() => this.props.currentUser ? (<Redirect to='/' /> ) :  (<SignInAndSignUp/>)} />
        </Switch>
  
        {/* <HomePage /> */}
      </div>
    );
  } // end render

}// end class

// MapDispatchToProps

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser 
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(null, mapDispatchToProps)(App);
