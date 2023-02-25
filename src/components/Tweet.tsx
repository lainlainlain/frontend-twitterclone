import { Avatar, IconButton, Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { useHomeStyles } from '../pages/theme';
import { Link, useHistory } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ImageList } from './ImageList';

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  _id: string;
  createdAt: string;
  images?: string[];
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
  createdAt,
  images,
}: TweetProps): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClickTweet = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };
  return (
    <a href={`/home/tweet/${_id}`} className={classes.tweetWrapper} onClick={handleClickTweet}>
      <Paper variant="outlined" className={classNames(classes.tweet, classes.tweetsHeader)}>
        <Avatar
          alt={`${user.username} avatar`}
          src={user.avatarUrl}
          className={classes.tweetAvatar}></Avatar>

        <div className={classes.tweetContent}>
          <div className={classes.tweetHeader}>
            <div>
              <b>{user.fullname}</b>&nbsp;
              <span className={classes.tweetUserName}>@{user.username}</span>
              &nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
            </div>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}> Удалить твит</MenuItem>
                <MenuItem onClick={handleClose}> Редактироватьь твит</MenuItem>
              </Menu>
            </div>
          </div>
          <Typography variant="body1" gutterBottom>
            {text}
            {images && <ImageList images={images} />}
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
      </Paper>{' '}
    </a>
  );
};
