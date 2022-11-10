import React from 'react';
import { SignIn } from './pages/Home/SignIn';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
