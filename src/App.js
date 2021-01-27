import React from "react";
import { Switch, Route , Link} from "react-router-dom";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import {StyledHeader} from "./components/header/StyledHeader"
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      
      }
      else {
        this.setState({currentUser: userAuth});
      }

    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return <div>
    <StyledHeader currentUser={this.state.currentUser}/>
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
