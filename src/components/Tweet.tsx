import { Avatar, IconButton, Paper, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import { useHomeStyles } from "../pages/theme";
import { Link } from "react-router-dom";

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  _id: string;
  user: {
    username: string;
    fullname: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  classes,
  user,
  text,
}: TweetProps): React.ReactElement => {
  return (
    <Link to={`/home/tweet/${_id}`} className={classes.tweetWrapper}>
      <Paper
        variant="outlined"
        className={classNames(classes.tweet, classes.tweetsHeader)}
      >
        <Avatar
          alt={`${user.username} avatar`}
          src={user.avatarUrl}
          className={classes.tweetAvatar}
        ></Avatar>

        <div>
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
                <CommentIcon style={{ fontSize: 20 }}></CommentIcon>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 20 }}></RepostIcon>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }}></LikeIcon>
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 20 }}></ShareIcon>
              </IconButton>
              <span>1</span>
            </div>
          </div>
        </div>
      </Paper>{" "}
    </Link>
  );
};
