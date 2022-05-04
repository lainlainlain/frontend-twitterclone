import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tweet } from "../../../components/Tweet";
import {
  fetchTweet,
  setTweet,
} from "../../../store/ducks/tweet/actionCreators";
import { selectTweetData } from "../../../store/ducks/tweet/selectors";
import { useHomeStyles } from "../theme";

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
    return <Tweet classes={classes} {...tweetData}></Tweet>;
  }

  return null;
};
