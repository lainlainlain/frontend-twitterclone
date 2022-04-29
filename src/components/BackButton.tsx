import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

export const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory();

  const clickBackButtonHandler = () => {
    history.goBack();
  };

  return (
    <IconButton
      onClick={clickBackButtonHandler}
      color="primary"
      style={{ marginRight: 20 }}
    >
      <ArrowBackIcon></ArrowBackIcon>
    </IconButton>
  );
};
