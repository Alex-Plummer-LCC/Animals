// These are all the necessary imports.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create the root and give React control of it.
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// Render the app.
root.render(<App />);