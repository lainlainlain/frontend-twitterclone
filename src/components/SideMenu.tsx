import React from "react";
import { useHomeStyles } from "../pages/Home/theme";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import { Button, IconButton, Typography, Hidden } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { ModalBlock } from "./ModalBlock";
import { AddTweetForm } from "./AddTweetForm";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  const [visibleAddTweetForm, setVisibleAddTweetForm] =
    React.useState<boolean>(false);

  const modalBlockCloseHandler = () => {
    setVisibleAddTweetForm(false);
  };

  const modalBlockOpenHandler = () => {
    setVisibleAddTweetForm(true);
  };

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
          <SearchIcon className={classes.sideMenuListItemIcon}></SearchIcon>
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon
            className={classes.sideMenuListItemIcon}
          ></NotificationIcon>

          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon}></MessageIcon>

          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon}></BookmarkIcon>

          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon}></ListIcon>

          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItem} />

          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>

      <li className={classes.sideMenuListItem}>
        <Button
          // onClick={handleClickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth
          onClick={modalBlockOpenHandler}
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <ModalBlock
          visible={visibleAddTweetForm}
          onClose={modalBlockCloseHandler}
          title=""
        >
          <AddTweetForm classes={classes}></AddTweetForm>
        </ModalBlock>
      </li>
    </ul>
  );
};
