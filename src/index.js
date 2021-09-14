import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyC_2H8dDf8eNJvLIOkoZtmrlxQaKrquNag",
  authDomain: "chat-react-cb1e0.firebaseapp.com",
  projectId: "chat-react-cb1e0",
  storageBucket: "chat-react-cb1e0.appspot.com",
  messagingSenderId: "938879837972",
  appId: "1:938879837972:web:a7162aaf6f9dfdc7bf4401",
  measurementId: "G-F1CPKCGNJZ",
});
export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value ={{
      firebase,auth,firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
