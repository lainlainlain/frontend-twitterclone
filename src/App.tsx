import React from 'react';
import { SignIn } from './pages/SignIn';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserData, setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';

import { LoadingStatus } from './store/types';

import { useHomeStyles } from './pages/theme';
import TwitterIcon from '@material-ui/icons/Twitter';

function App() {
  const classes = useHomeStyles();
  const loadingStatus = useSelector(selectUserStatus);
  const isAuth = useSelector(selectIsAuth);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  const dispatch = useDispatch();

  const history = useHistory();

  React.useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  React.useEffect(() => {
    if (!isAuth && isReady) {
      history.push('/signin');
    } else {
      history.push('/home');
    }
  }, [isAuth, isReady]);

  React.useEffect(() => {
    const el = document.querySelector('#avatar');

    if (el) {
      el.addEventListener('change', () => {
        const avatar = document.getElementById('avatar');
        if (avatar) {
          // @ts-ignore
          let photo = avatar.files[0];
          let req = new XMLHttpRequest();
          let formData = new FormData();

          formData.append('avatar', photo);
          req.open('POST', 'http://localhost:8888/upload');
          req.send(formData);
        }
      });
    }
  }, []);

  if (!isReady) {
    return (
      <div className={classes.centered}>
        <TwitterIcon color="primary" style={{ width: '80px', height: '80px' }}></TwitterIcon>
      </div>
    );
  }

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
