import { colors } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import ArrowBottomIcon from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHomeStyles } from "../pages/theme";

interface UserSideProfileProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const UserSideProfile: React.FC<UserSideProfileProps> = ({
  classes,
}: UserSideProfileProps): React.ReactElement => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLDivElement>();

  const handleOpenPopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    anchorRef.current = event.currentTarget;
    setVisiblePopup(true);
  };

  const handleClosePopup = (): void => {
    setVisiblePopup(false);
  };

  return (
    <>
      <div onClick={handleOpenPopup} className={classes.sideProfile}>
        <Avatar src="https://i.pinimg.com/originals/c3/3c/7c/c33c7c1423f9b53344588cae527d70a0.png" />

        <div className={classes.sideProfileInfo}>
          <b>test test</b>
          <Typography style={{ color: colors.grey[500] }}>@asdqwe</Typography>
        </div>
        <ArrowBottomIcon />
      </div>
      <Popover
        open={visiblePopup}
        onClose={handleClosePopup}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        The content of the Popover.
      </Popover>
    </>
  );
};
