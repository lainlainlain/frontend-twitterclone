import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHomeStyles } from "../pages/Home/theme";
import { selectTweetsIsLoaded } from "../store/ducks/tweets/selectors";

import { selectTagsItems } from "../store/tags/selectors";

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({
  classes,
}: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectTweetsIsLoaded);

  if (!isLoaded) {
    return null;
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((obj, index) => (
          <React.Fragment key={obj.text + index}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${obj.text}`}>
                <ListItemText
                  primary={obj.text}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      Твитов: {obj.count}
                    </Typography>
                  }
                />
              </Link>{" "}
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};
