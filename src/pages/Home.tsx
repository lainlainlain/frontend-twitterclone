import React from "react";
import {
  Grid,
  Paper,
  IconButton,
  Typography,
  Container,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import { makeStyles } from "@material-ui/core";

const useHomyStyles = makeStyles(() => ({
  wrapper: { height: "100vh" },
  logo: { margin: "10px 0" },
  logoIcon: { fontSize: 36 },
  sideMenuList: { listStyle: "none", margin: 0, padding: 0 },
  sideMenuListItem: { display: "flex", alignItems: "center" },
  sideMenuListLabel: { fontWeight: 700, fontSize: 20, marginLeft: 15 },
  sideMenuListIcon: {
    fontSize: 28,
  },
}));

export const Home = () => {
  const classes = useHomyStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
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
              <IconButton aria-label="delete" color="primary">
                <SearchIcon className={classes.sideMenuListIcon}></SearchIcon>
              </IconButton>
              <Typography className={classes.sideMenuListLabel}>
                Поиск
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" color="primary">
                <NotificationIcon
                  className={classes.sideMenuListIcon}
                ></NotificationIcon>
              </IconButton>
              <Typography className={classes.sideMenuListLabel}>
                Уведомления
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" color="primary">
                <MessageIcon className={classes.sideMenuListIcon}></MessageIcon>
              </IconButton>
              <Typography className={classes.sideMenuListLabel}>
                Сообщения
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" color="primary">
                <BookmarkIcon
                  className={classes.sideMenuListIcon}
                ></BookmarkIcon>
              </IconButton>
              <Typography className={classes.sideMenuListLabel}>
                Закладки
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" color="primary">
                <ListIcon className={classes.sideMenuListIcon}></ListIcon>
              </IconButton>
              <Typography className={classes.sideMenuListLabel}>
                Список
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="delete" color="primary">
                <UserIcon className={classes.sideMenuListIcon}></UserIcon>
              </IconButton>
              <Typography className={classes.sideMenuListLabel}>
                Профиль
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
