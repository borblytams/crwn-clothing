import React from "react";
import { Switch, Route , Link} from "react-router-dom";

import './App.css';
import HomePage from "./pages/homepage/homepage.component";



const HatsPage = () => (
  <div>

    <h1>HATS PAGE</h1>
  </div>
)

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
         <Route exact path="/" component={HomePage} />
         <Route exact path="/hats" component={HatsPage} />
         <Route exact path="/topics/:topicId" component={TopicDetail} />
      </Switch>
     </div>
}

export default App;
