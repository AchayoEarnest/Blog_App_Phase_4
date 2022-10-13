import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Comments from "./components/Comments"
import Update from "./components/Update"

function App() {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        { user ? (
          <>
            <Switch>
              <Route strict path="/">
                <Home exact user={user}/>
              </Route>                          
            </Switch>
            
            <Switch>
              <Route strict path="/update">
                <Update />
              </Route>              
            </Switch>

            <Switch>
              <Route path="/comments">
                  <Comments />
              </Route>  
            </Switch>
          </>          
          
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route strict path="/">
                <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
