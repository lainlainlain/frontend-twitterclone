import React from "react";
import { SignIn } from "./pages/SignIn";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/" component={Home}></Route>
      </div>
    </Provider>
  );
}

export default App;
