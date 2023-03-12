import React from 'react';
import { Typography, Paper } from '@material-ui/core';

import { Tweet } from '../../components/Tweet';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectTweetsIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';

export const Home = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectTweetsIsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Paper variant="outlined" className={classes.tweetsWrapper}>
      <Paper variant="outlined" className={classes.tweetsHeader}>
        <Route path="/home/:any">
          <BackButton></BackButton>
        </Route>
        <Route path={['/home', '/home/search']} exact>
          <Typography variant="h6">Твиты</Typography>
        </Route>
        <Route path="/home/tweet">
          <Typography variant="h6">Твитнуть</Typography>
        </Route>
      </Paper>
      <Route path={['/home', '/home/search']} exact>
        <Paper>
          <div className={classes.addForm}>
            <AddTweetForm classes={classes}></AddTweetForm>
          </div>

          <div className={classes.addFormBottomLine} />
        </Paper>
      </Route>
      <Route path="/home" exact>
        {isLoading ? (
          <div className={classes.tweetsCentred}>
            <CircularProgress></CircularProgress>
          </div>
        ) : (
          tweets.map((tweet) => (
            <Tweet key={tweet._id} classes={classes} images={tweet.images} {...tweet}></Tweet>
          ))
        )}
      </Route>

      <Route path={['/home/tweet/:id']} component={FullTweet} exact></Route>
    </Paper>
  );
};
