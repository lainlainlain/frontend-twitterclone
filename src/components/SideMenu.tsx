import React from "react";
import { useHomeStyles } from "../pages/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import { Button, IconButton, Typography } from "@material-ui/core";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton
          className={classes.logo}
          aria-label="delete"
          color="primary"
        >
          <TwitterIcon className={classes.logoIcon}></TwitterIcon>
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListIcon}></SearchIcon>
          <Typography className={classes.sideMenuListLabel} variant="h6">
            Поиск
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon
            className={classes.sideMenuListIcon}
          ></NotificationIcon>

          <Typography className={classes.sideMenuListLabel} variant="h6">
            Уведомления
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListIcon}></MessageIcon>

          <Typography className={classes.sideMenuListLabel} variant="h6">
            Сообщения
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListIcon}></BookmarkIcon>

          <Typography className={classes.sideMenuListLabel} variant="h6">
            Закладки
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListIcon}></ListIcon>

          <Typography className={classes.sideMenuListLabel} variant="h6">
            Список
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListIcon}></UserIcon>

          <Typography className={classes.sideMenuListLabel} variant="h6">
            Профиль
          </Typography>
        </div>
      </li>
      <li>
        <Button
          className={classes.SideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth
        >
          Твитнуть
        </Button>
      </li>
    </ul>
  );
};
