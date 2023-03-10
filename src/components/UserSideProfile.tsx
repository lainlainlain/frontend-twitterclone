import { colors, MenuItem } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import ArrowBottomIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHomeStyles } from '../pages/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../store/ducks/user/selectors';
import { Menu } from '@material-ui/core';
import { signOut } from '../store/ducks/user/actionCreators';

interface UserSideProfileProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const UserSideProfile: React.FC<UserSideProfileProps> = ({
  classes,
}: UserSideProfileProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const handleClosePopup = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    window.localStorage.removeItem('token');
    dispatch(signOut());
  };

  const handleOpenPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setAnchorEl(event.currentTarget);
  };

  const userData = useSelector(selectUserData);

  return (
    <>
      <div onClick={handleOpenPopup} className={classes.sideProfile}>
        <Avatar src="https://i.pinimg.com/originals/c3/3c/7c/c33c7c1423f9b53344588cae527d70a0.png" />

        <div className={classes.sideProfileInfo}>
          <b>{userData?.fullname}</b>
          <Typography style={{ color: colors.grey[500] }}>@asdqwe</Typography>
        </div>
        <ArrowBottomIcon />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClosePopup}
        classes={{ paper: classes.profileMenu }}>
        <MenuItem onClick={handleClosePopup}>Профиль</MenuItem>
        <MenuItem onClick={handleSignOut}>Выйти</MenuItem>
      </Menu>
    </>
  );
};
