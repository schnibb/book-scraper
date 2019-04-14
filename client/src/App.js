import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Books from "./pages/Books";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Jumbotron />
                    <Switch>
                        <Route exact path="/" component={Books} />
                        <Route exact path="/books" component={Books} />
                        <Route exact path="/search" component={Search} />
                        <Route component={NoMatch} />
                    </Switch>
                    
                </div>
            </Router>
        );
    }
}

export default App;