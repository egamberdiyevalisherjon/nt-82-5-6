import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

// styles
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

axios.defaults.baseURL = "https://fakestoreapi.com";
axios.defaults.headers.access_token = localStorage.getItem("token");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </Router>
);
