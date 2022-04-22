import React from "react";
import { SignIn } from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
