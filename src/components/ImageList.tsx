import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { useHomeStyles } from '../pages/theme';
import { IconButton } from '@material-ui/core';

interface ImageListProps {
  images: string[];
  onRemoveImage?: (url: string) => void;
}

export const ImageList: React.FC<ImageListProps> = ({ images, onRemoveImage }) => {
  const classes = useHomeStyles();

  if (!images.length) {
    return null;
  }

  return (
    <div className={classes.imagesList}>
      {images.map((url) => (
        <div className={classes.imagesListItem}>
          <img alt={`картинка ${url}`} src={url} />
          {onRemoveImage && (
            <IconButton
              color="primary"
              className={classes.imagesListItemRemove}
              onClick={() => onRemoveImage(url)}>
              <ClearIcon style={{ fontSize: 16 }}></ClearIcon>
            </IconButton>
          )}
        </div>
      ))}
    </div>
  );
};
