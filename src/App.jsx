import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Business from "./Pages/Business";
import Filter from "./Pages/Filter";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import Home from "./Pages/Home";

/*
/ - home Home.jsx
/create - create business screen Create.jsx
/update - update business screen Update.jsx
/business/:id - get business by id Business.jsx
*/

/*
  JSON Data / Functionality - Hayden
  - Pull JSON dat from Yelp and make hook for creating/updating/searching businesses
  Header Component - Eric
   - npm install react-bootstrap-4
   - In this component where comment is
  Create / Update Business - Markell
  - Make form for creating/updating business
  - In ./Pages/Create
  Business Component - Cucci
  - Take in JSON object
  - { name: "Hello", indoor: False, description... }
  - In ./Pages/Business
  Filters - Miriam
  - Create static filters component
  - In ./Pages/Filter
*/

function App() {
  return (
    <div className="App">
      {/* 
        Can use React-Bootstrap-4 to create header component with search bar
      */}
      <header>
        <p>
          Open?
        </p>
      </header>
      <Router>
        <Switch>
          <Route path="/business/:id">
            <Business />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/filter">
            <Filter />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
