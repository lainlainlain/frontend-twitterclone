import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import ChatIcon from "@material-ui/icons/ModeCommentOutlined";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { ModalBlock } from "../components/ModalBlock";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: { boxSizing: "border-box", display: "flex", height: "100vh" },
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
    width: "260%",
    height: "260%",
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
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

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
              ?????????????? ?? ??????, ?????? ?????? ??????????????????.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon}></PeopleIcon>
              ??????????????, ?? ?????? ?????????????? ?? ????????.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <ChatIcon className={classes.blueSideListInfoIcon}></ChatIcon>
              ?????????????????????????????? ?? ??????????????.
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
            ??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????
          </Typography>
          <Typography>
            <b>?????????????????????????????? ?? ???????????????? ?????????? ????????????!</b>
          </Typography>
          <br></br>
          <Button
            onClick={handleClickOpenSignUp}
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            ????????????????????????????????????
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleClickOpenSignIn}
          >
            ??????????
          </Button>
          <ModalBlock
            visible={visibleModal === "signIn"}
            onClose={handleCloseModal}
            classes={classes}
            title="?????????? ?? ??????????????"
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="????????????"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  ??????????
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === "signUp"}
            onClose={handleCloseModal}
            classes={classes}
            title="???????????????? ?????????????? ????????????"
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="??????"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="????????????"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  ??????????
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
