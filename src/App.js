import React from "react";
import Store from "./Store/Store";
import Profile from "./Profile/Profile"
import LogIn from "./Profile/Log In/LogIn";
import Registration from "./Profile/Registration/Registration"
import styles from "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Store/> }/>
          <Route path="/profile" element={ <Profile/> }/>
          <Route path="/logIn" element={ <LogIn/> }/>
          <Route path="/registration" element={ <Registration/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
