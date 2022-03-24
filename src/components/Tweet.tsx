import { Avatar, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import { useHomeStyles } from "../pages/Home";

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    username: string;
    fullname: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  user,
  text,
}: TweetProps): React.ReactElement => {
  return (
    <Paper
      variant="outlined"
      className={classNames(classes.tweet, classes.tweetsHeader)}
    >
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Avatar
            alt={`${user.username} avatar`}
            src={user.avatarUrl}
            className={classes.tweetAvatar}
          ></Avatar>
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.username}</span>
            &nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon
                  className={classes.tweetFooterIcon}
                  color="primary"
                ></CommentIcon>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon
                  className={classes.tweetFooterIcon}
                  color="primary"
                ></RepostIcon>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <LikeIcon
                  className={classes.tweetFooterIcon}
                  color="primary"
                ></LikeIcon>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <ShareIcon
                  className={classes.tweetFooterIcon}
                  color="primary"
                ></ShareIcon>
              </IconButton>
              <span>1</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
