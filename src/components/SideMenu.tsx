import React from "react";
import { useHomeStyles } from "../pages/theme";
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
import { Link } from "react-router-dom";
import { UserSideProfile } from "./UserSideProfile";
import HomeIcon from "@material-ui/icons/HomeOutlined";

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
    <>
      <ul className={classes.sideMenuList}>
        <li className={classes.sideMenuListItem}>
          <Link to="/home">
            <IconButton
              className={classes.logo}
              aria-label="delete"
              color="primary"
            >
              <TwitterIcon className={classes.logo}></TwitterIcon>
            </IconButton>
          </Link>
        </li>
        <li className={classes.sideMenuListItem}>
          <Link to="/home">
            <div>
              <HomeIcon className={classes.sideMenuListItemIcon} />

              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Главная
              </Typography>
            </div>
          </Link>
        </li>

        <li className={classes.sideMenuListItem}>
          <div>
            <SearchIcon className={classes.sideMenuListItemIcon}></SearchIcon>

            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Поиск
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <NotificationIcon
              className={classes.sideMenuListItemIcon}
            ></NotificationIcon>

            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Уведомления
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <MessageIcon className={classes.sideMenuListItemIcon}></MessageIcon>

            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Сообщения
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <BookmarkIcon
              className={classes.sideMenuListItemIcon}
            ></BookmarkIcon>

            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Закладки
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <ListIcon className={classes.sideMenuListItemIcon}></ListIcon>

            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Список
            </Typography>
          </div>
        </li>
        <li className={classes.sideMenuListItem}>
          <div>
            <UserIcon className={classes.sideMenuListItem} />

            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Профиль
            </Typography>
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
            Твитнуть
            <CreateIcon />
          </Button>
          <ModalBlock
            visible={visibleAddTweetForm}
            onClose={modalBlockCloseHandler}
          >
            <div style={{ width: 540 }}>
              <AddTweetForm maxRows={15} classes={classes}></AddTweetForm>
            </div>
          </ModalBlock>
        </li>
      </ul>
      <UserSideProfile classes={classes} />
    </>
  );
};
