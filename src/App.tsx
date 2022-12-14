import React from 'react';
import { SignIn } from './pages/Home/SignIn';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';

function App() {
  const dispatch = useDispatch();

  const history = useHistory();

  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
