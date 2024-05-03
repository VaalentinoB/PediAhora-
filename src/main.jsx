import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NotFound from "./notFound.jsx";
import support from "./support.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/soporte" element={<support />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
