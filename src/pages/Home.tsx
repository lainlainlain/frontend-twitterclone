import React from "react";
import {
  Grid,
  Typography,
  Container,
  InputBase,
  createStyles,
  Theme,
  Paper,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";

import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: { height: "100vh" },
  logo: { margin: "10px 0" },
  logoIcon: { fontSize: 36 },
  sideMenuList: { listStyle: "none", margin: 0, padding: 0, width: 230 },

  sideMenuListLabel: { fontWeight: 700, fontSize: 20, marginLeft: 15 },
  sideMenuListIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuListItem: {
    cursor: "pointer",
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },
    "& div": {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 10px",
      borderRadius: 30,
      height: 55,
      marginBottom: 15,
      transition: "background-color ease-in-out 0.1s",
    },
  },
  SideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
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
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6"> Главная</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
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
              ),
            ]}
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
