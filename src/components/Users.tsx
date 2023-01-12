import {
  Typography,
  Paper,
  ListItemAvatar,
  ListItem,
  List,
  Divider,
  Avatar,
  ListItemText,
  Button,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { useSelector } from 'react-redux';
import { useHomeStyles } from '../pages/theme';
import { selectUsersStateItems } from '../store/ducks/users/selectors';

export const Users = () => {
  const classes = useHomeStyles();
  const items = useSelector(selectUsersStateItems);
  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Последние пользователи</b>
      </Paper>
      <List>
        {items.map((obj) => {
          <ListItem className={classes.rightSideBlockItem}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Dock Of Shame"
              secondary={
                <Typography component="span" variant="body2" color="textSecondary"></Typography>
              }
            />
            <Button color="primary">
              <PersonAddIcon />
            </Button>
          </ListItem>;
        })}
        <Divider component="li" />
      </List>
    </Paper>
  );
};
