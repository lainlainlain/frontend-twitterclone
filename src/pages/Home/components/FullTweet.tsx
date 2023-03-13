import { Avatar, CircularProgress, Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React, { useEffect } from 'react';

import { fetchTweet, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetData, selectTweetIsLoading } from '../../../store/ducks/tweet/selectors';
import { Link, useParams } from 'react-router-dom';
import { useHomeStyles } from '../../theme';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { Divider, IconButton } from '@material-ui/core';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';
import { Tweet } from '../../../components/Tweet';
import { ImageList } from '../../../components/ImageList';
import mediumZoom from 'medium-zoom';

export const FullTweet: React.FC = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectTweetIsLoading);
  const params: { id?: string } = useParams();
  const id = params.id;
  const tweetData = useSelector(selectTweetData);

  useEffect(() => {
    if (id) {
      dispatch(fetchTweet(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (!isLoading) {
      mediumZoom('.tweet-images img');
    }
  }, [isLoading]);

  if (!tweetData) {
    return (
      <div className={classes.tweetsCentred}>
        <CircularProgress></CircularProgress>
      </div>
    );
  }

  if (tweetData) {
    return (
      <>
        <Paper className={classes.fullTweet}>
          <div className={classNames(classes.tweetsHeaderUser)}>
            <Avatar
              alt={`${tweetData.user.username} avatar`}
              className={classes.tweetAvatar}></Avatar>
            <Typography>
              <Link to={`/user/${tweetData.user._id}`}>
                <b>{tweetData.user.fullname}</b>
              </Link>
              &nbsp;
              <div>
                <span className={classes.tweetUserName}>@{tweetData.user.username}</span>
                &nbsp;
              </div>
            </Typography>
          </div>
          <Typography variant="body1" gutterBottom className={classes.fullTweetText}>
            {tweetData.text}
            <div className="tweet-images">
              {tweetData.images && <ImageList images={tweetData.images}></ImageList>}
            </div>
          </Typography>
          <Typography>
            <span className={classes.tweetUserName}>
              {format(new Date(tweetData.createdAt), 'H:mm', {
                locale: ruLang,
              })}
              ·
            </span>
            <span className={classes.tweetUserName}>
              {format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', {
                locale: ruLang,
              })}
            </span>
          </Typography>
          <div className={classNames(classes.tweetFooter, classes.fullTweetFooter)}>
            <IconButton>
              <CommentIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <RepostIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <LikeIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <ShareIcon style={{ fontSize: 25 }} />
            </IconButton>
          </div>
        </Paper>{' '}
        <Divider />
        <Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
          }}
          classes={classes}
        />
        <Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
          }}
          classes={classes}
        />
        <Tweet
          _id="1"
          text="Any more to move? You might need to adjust your stretching routines!"
          createdAt={new Date().toString()}
          user={{
            fullname: 'Arlene Andrews',
            username: 'ArleneAndrews_1',
          }}
          classes={classes}
        />
      </>
    );
  }

  return null;
};
