import React from "react";
import { Switch, Route , Link} from "react-router-dom";
import {auth} from "./firebase/firebase.utils"

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import  SignInAndSignnUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";





const TopicDetail = () => {
  return (
    <div>
    return (
      
      <div>
        <Link to="/topics"></Link>
        <h1>HOME PAGE</h1>

      </div>
    )
        <h1>TOP DETAIL PAGE</h1>
    </div>
  )
}


class  App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
       <Route exact path="/shop" component={ShopPage} />
       <Route exact path="/" component={HomePage} />
       <Route exact path="/signin" component={SignInAndSignnUp} />
       <Route exact path="/topics/:topicId" component={TopicDetail} />

    </Switch>
   </div>

  }
 
}

export default App;
