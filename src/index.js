import React from "react";
import ReactDOM from "react-dom";
import Main from "./containers/main";
import Photos from "./containers/photos";
import Code from "./containers/code";
// import Like from "./containers/like";
import Authorization from "./containers/auth";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Authorization />} />
        <Route path="/main" element={<Main />} />
        <Route path="/code" element={<Code />} />
        <Route path="/photos/:id" element={<Photos />} />
        {/* <Route path="/photos/:id/:liked_by_user" element={<Like />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#app")
);
