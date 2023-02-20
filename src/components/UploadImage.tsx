import React from 'react';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { IconButton } from '@material-ui/core';
import { useHomeStyles } from '../pages/theme';
import ClearIcon from '@material-ui/icons/Clear';
import { ImageObj } from './AddTweetForm';

interface UploadImageProps {
  images: ImageObj[];
  onChangeImages: (callback: (images: ImageObj[]) => ImageObj[]) => void;
}

export const UploadImage: React.FC<UploadImageProps> = ({ images, onChangeImages }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const classes = useHomeStyles();

  const inputClickHandle = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChangeFileInput = React.useCallback((event: Event) => {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file) {
        const fileObj = new Blob([file]);
        onChangeImages((prev) => [
          ...prev,
          {
            file,
            blobUrl: URL.createObjectURL(fileObj),
          },
        ]);
      }
    }
  }, []);

  const removeImage = (url: string) => {
    onChangeImages((state) => state.filter((obj) => obj.blobUrl !== url));
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChangeFileInput);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('change', handleChangeFileInput);
      }
    };
  }, []);

  return (
    <div>
      <IconButton color="primary" onClick={inputClickHandle}>
        <input ref={inputRef} type="file" id="upload-input" hidden />
        <ImageOutlinedIcon style={{ fontSize: 26 }} />
      </IconButton>
      <div className={classes.imagesList}>
        {images.map((obj) => (
          <>
            <div
              key={obj.blobUrl}
              className={classes.imagesListItem}
              style={{ backgroundImage: `url(${obj.blobUrl})` }}>
              <IconButton
                color="primary"
                className={classes.imagesListItemRemove}
                onClick={() => removeImage(obj.blobUrl)}>
                <ClearIcon style={{ fontSize: 16 }}></ClearIcon>
              </IconButton>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
