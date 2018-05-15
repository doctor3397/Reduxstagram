import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// Import css
import css from "./styles/style.styl";
//Import Components
import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";
// Import React router
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import store, { history } from "./store";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/posts/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById("root"));
