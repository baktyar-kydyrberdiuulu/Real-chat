import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";
import { Context } from "./index";

import "./App.css";

function App() {
  const { auth } = useContext(Context);
  const [user,loading,error ] = useAuthState(auth);
  
  if(loading){
    return <Loader/>
  }
  
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
