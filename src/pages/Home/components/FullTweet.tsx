import { Avatar, CircularProgress, Paper, Typography } from "@material-ui/core";
import classNames from "classnames";
import React, { useEffect } from "react";

import {
  fetchTweet,
  setTweet,
} from "../../../store/ducks/tweet/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { selectTweetData } from "../../../store/ducks/tweet/selectors";
import { useParams } from "react-router-dom";
import { useHomeStyles } from "../../theme";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const params: { id?: string } = useParams();
  const id = params.id;
  const tweetData = useSelector(selectTweetData);

  useEffect(() => {
    if (id) {
      dispatch(fetchTweet(id));
    }

    return () => {
      dispatch(setTweet(undefined));
    };
  }, [dispatch, id]);

  if (!tweetData) {
    return (
      <div className={classes.tweetsCentred}>
        <CircularProgress></CircularProgress>
      </div>
    );
  }

  if (tweetData) {
    return (
      <Paper className={classes.fullTweet}>
        <div className={classNames(classes.tweetsHeaderUser)}>
          <Avatar
            alt={`${tweetData.user.username} avatar`}
            src={tweetData.user.avatarUrl}
            className={classes.tweetAvatar}
          ></Avatar>
          <Typography>
            <b>{tweetData.user.fullname}</b>&nbsp;
            <div>
              <span className={classes.tweetUserName}>
                @{tweetData.user.username}
              </span>
              &nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>1 ч</span>
            </div>
          </Typography>
        </div>{" "}
        <Typography
          variant="body1"
          gutterBottom
          className={classes.fullTweetText}
        >
          {tweetData.text}
        </Typography>
      </Paper>
    );
  }

  return null;
};
