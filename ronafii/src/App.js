import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM styling convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>CHCKOUT PAGE</h1>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
