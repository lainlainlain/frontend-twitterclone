import { Button, makeStyles, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import ChatIcon from "@material-ui/icons/ModeCommentOutlined";

const useStyles = makeStyles((theme) => ({
  wrapper: { display: "flex", height: "100vh" },
  blueSide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#71C9F8",
    flex: " 0 0 50%",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBigIcon: {
    position: "absolute",
    width: "350%",
    height: "350%",
    left: "50%",
    top: "53%",
    transform: "translate(-50%, -50%)",
  },
  blueSideListInfo: {
    position: "relative",
    margin: 0,
    padding: 0,
    listStyle: "none",
    width: 380,
    "& h6": {
      display: "flex",
      alignItems: "center",
      fontSize: 20,
      fontWeight: 700,
      color: "white",
    },
  },
  blueSideListInfoItem: { marginBottom: 40 },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    flex: "0 0 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideWrapperTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon
          color="primary"
          className={classes.blueSideBigIcon}
        ></TwitterIcon>
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon}></SearchIcon>
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon}></PeopleIcon>
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <ChatIcon className={classes.blueSideListInfoIcon}></ChatIcon>
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            className={classes.loginSideTwitterIcon}
            color="primary"
          ></TwitterIcon>
          <Typography
            className={classes.loginSideWrapperTitle}
            gutterBottom
            variant="h4"
          >
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к твиттеру прямо сейчас!</b>
          </Typography>
          <br></br>
          <Button
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
