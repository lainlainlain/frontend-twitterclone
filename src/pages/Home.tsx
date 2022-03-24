import React from "react";
import {
  Grid,
  IconButton,
  Typography,
  Container,
  InputBase,
  createStyles,
  Theme,
  Paper,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";

import { Tweet } from "../components/Tweet";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: { height: "100vh" },
  logo: { margin: "10px 0" },
  logoIcon: { fontSize: 36 },
  sideMenuList: { listStyle: "none", margin: 0, padding: 0 },
  sideMenuListItem: { display: "flex", alignItems: "center" },
  sideMenuListLabel: { fontWeight: 700, fontSize: 20, marginLeft: 15 },
  sideMenuListIcon: {
    fontSize: 28,
  },

  tweetsWrapper: {
    height: "100%",
    borderRadius: 0,
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderRadius: 0,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweet: {
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetUserName: {
    color: grey[500],
    marginLeft: 5,
  },
  tweetFooter: {
    display: "flex",
    justifyContent: "space-between",
    width: 450,
    position: "relative",
    left: -13,
  },
  tweetFooterIcon: {
    fontSize: 20,
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 45,
      padding: 0,
    },
  })
)(InputBase);

export const Home = () => {
  const classes = useHomeStyles();

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
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6"> Главная</Typography>
            </Paper>
            <Tweet
              text="Не особо высокий паренёк со стройным, но мускулистым телосложением. Волосы чёрные, коротко стриженные и взъерошенные; глаза широко распахнутые, с любопытством глядящие на мир; под левым глазом — тонкая полоска шрама. После атаки Акаину в битве при Маринфорде приобрёл ещё один огромный шрам в виде креста посередине груди. Вне критических ситуаций образ довершает ещё и улыбка «счастливого идиота» от уха до уха."
              classes={classes}
              user={{
                fullname: "Mugiwara",
                username: "Luffy",
                avatarUrl:
                  "https://shikimori.one/system/characters/original/40.jpg",
              }}
            ></Tweet>
            <Tweet
              text="Не особо высокий паренёк со стройным, но мускулистым телосложением. Волосы чёрные, коротко стриженные и взъерошенные; глаза широко распахнутые, с любопытством глядящие на мир; под левым глазом — тонкая полоска шрама. После атаки Акаину в битве при Маринфорде приобрёл ещё один огромный шрам в виде креста посередине груди. Вне критических ситуаций образ довершает ещё и улыбка «счастливого идиота» от уха до уха."
              classes={classes}
              user={{
                fullname: "Mugiwara",
                username: "Luffy",
                avatarUrl:
                  "https://shikimori.one/system/characters/original/40.jpg",
              }}
            ></Tweet>
            <Tweet
              text="Не особо высокий паренёк со стройным, но мускулистым телосложением. Волосы чёрные, коротко стриженные и взъерошенные; глаза широко распахнутые, с любопытством глядящие на мир; под левым глазом — тонкая полоска шрама. После атаки Акаину в битве при Маринфорде приобрёл ещё один огромный шрам в виде креста посередине груди. Вне критических ситуаций образ довершает ещё и улыбка «счастливого идиота» от уха до уха."
              classes={classes}
              user={{
                fullname: "Mugiwara",
                username: "Luffy",
                avatarUrl:
                  "https://shikimori.one/system/characters/original/40.jpg",
              }}
            ></Tweet>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField
            fullWidth
            placeholder="Поиск по Твиттеру"
          ></SearchTextField>
        </Grid>
      </Grid>
    </Container>
  );
};
