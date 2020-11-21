import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const vrule = {
  border: '1px solid white',
  height: '30px',
  marginLeft: 15,
  marginRight: 5
};
const text = {
  color: 'white',
  fontSize: 20
};

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
      <header>
        <Navbar fixed="top" bg="primary" variant="dark">
          <Navbar.Brand href="#home">Open?</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <div style={vrule}></div>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Upload Your Business</Nav.Link>
          </Nav>
          <text style={text}>"Is It Open?"</text>
        </Navbar>
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
