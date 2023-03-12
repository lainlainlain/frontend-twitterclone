import { Avatar, CircularProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { BackButton } from '../../components/BackButton';
import { useHomeStyles } from '../theme';
import './index.scss';
import classNames from 'classnames';

import { selectTweetsIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { Tweet } from '../../components/Tweet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';

export const UserPage = () => {
  const classes = useHomeStyles();
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectTweetsIsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Paper className={classNames(classes.tweetsWrapper, 'user')} variant="outlined">
      <Paper className={classes.tweetsHeader} variant="outlined">
        <BackButton />
        <div>
          <Typography variant="h6">asdqwe</Typography>
          <Typography variant="caption" display="block" gutterBottom>
            65 твита
          </Typography>
        </div>
      </Paper>
      <div className="user__header"></div>
      <div className="user__info">
        <Avatar></Avatar>
        <h2 className="user__info-fullname">Aasd qwe</h2>
        <span className="user__info-username">@asdqwe</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, velit! Eveniet ad ullam
          dolores architecto quis aliquid? Blanditiis quisquam molestias magnam, dignissimos quasi
          modi libero enim, praesentium sapiente possimus maiores.
        </p>
        <ul className="user__info-details">
          <li>asd, asd</li>
          <li>
            <a className="link" href="#">
              asd.com
            </a>
          </li>
          <li>Дата рождения: 1 сентября 1999</li>
          <li>Ренгистрация: 1 сентября 2001</li>
        </ul>
      </div>
      <Tabs value={activeTab} indicatorColor="primary" textColor="primary" onChange={handleChange}>
        <Tab label="Твиты" />
        <Tab label="Твиты и ответы" />
        <Tab label="Медиа" />
        <Tab label="Нравится" />
      </Tabs>
      {isLoading ? (
        <div className={classes.tweetsCentred}>
          <CircularProgress></CircularProgress>
        </div>
      ) : (
        tweets.map((tweet) => (
          <Tweet key={tweet._id} classes={classes} images={tweet.images} {...tweet}></Tweet>
        ))
      )}
    </Paper>
  );
};
