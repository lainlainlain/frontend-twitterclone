import React from 'react';
import { Grid, Typography, Container, Paper } from '@material-ui/core';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectTweetsIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { Tags } from '../../components/Tags';
import { Route } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';
import { Users } from '../../components/Users';

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
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
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
              </Route>{' '}
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
                tweets.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet}></Tweet>)
              )}
            </Route>

            <Route path={['/home/tweet/:id']} component={FullTweet} exact></Route>
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            {/* <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            /> */}
            <Tags classes={classes}></Tags>
            <Users />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
