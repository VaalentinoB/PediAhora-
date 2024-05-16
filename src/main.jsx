"react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDm7LS0OXyS6l1qIomqeEzNOjgx7eOYBOY",
  authDomain: "pediahora-2b5a7.firebaseapp.com",
  projectId: "pediahora-2b5a7",
  storageBucket: "pediahora-2b5a7.appspot.com",
  messagingSenderId: "788310938650",
  appId: "1:788310938650:web:361d601d549275ee2b2da3",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
