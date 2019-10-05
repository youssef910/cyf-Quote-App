import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import GetQuotes from "./components/GetQuote"
import SearchQuotes from "./components/SearchQuotes"

import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/GetQuotes"  component={GetQuotes}/>
            <Route  Path="/SearchQuotes" component={SearchQuotes}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
