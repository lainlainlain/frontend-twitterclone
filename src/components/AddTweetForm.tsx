import React, { useState } from "react";
import classNames from "classnames";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
} from "@material-ui/core";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { useHomeStyles } from "../pages/Home/theme";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = useState<string>("");
  const textLimitPercent = (text.length / MAX_LENGTH) * 100;

  const handleChangeTextare = (event: React.FormEvent<HTMLTextAreaElement>) => {
    if (event.currentTarget) {
      setText(event.currentTarget.value);
    }
    console.log(text);
  };

  const textCount = MAX_LENGTH - text.length;

  return (
    <div>
      <div className={classes.addForm}>
        <div className={classes.addFormBody}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя UserAvatar`}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTaNrcaY1Y6gn75dO4tQgm0NYlp7mVlTvBw&usqp=CAU"
          />
          <TextareaAutosize
            onChange={handleChangeTextare}
            className={classes.addFormTextarea}
            placeholder="Что происходит?"
            value={text}
            // rowsMax={maxRows}
          />
        </div>
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="static"
                  size={20}
                  thickness={5}
                  value={textLimitPercent > 100 ? 100 : textLimitPercent}
                  style={textLimitPercent >= 100 ? { color: "red" } : undefined}
                />
                <CircularProgress
                  style={{ color: "rgba(0, 0, 0, 0.1)" }}
                  variant="static"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}

          <Button
            disabled={textLimitPercent >= 100}
            color="primary"
            variant="contained"
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};
