import React from "react";
import { Switch, Route , Link} from "react-router-dom";

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"





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


function App() {
  return <div>
      <Switch>
         <Route exact path="/shop" component={ShopPage} />
       
         <Route exact path="/topics/:topicId" component={TopicDetail} />

      </Switch>
     </div>
}

export default App;
