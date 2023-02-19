import React from 'react';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { IconButton } from '@material-ui/core';
import { useHomeStyles } from '../pages/theme';

export const UploadImage = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [images, setImages] = React.useState<string[]>([]);
  const classes = useHomeStyles();

  const inputClickHandle = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', (event) => {
        if (event.target) {
          const target = event.target as HTMLInputElement;
          const file = target.files?.[0];

          if (file) {
            const blobObj = new Blob([file]);
            setImages((prev) => [...prev, URL.createObjectURL(blobObj)]);
          }
        }
      });
    }
  }, []);

  return (
    <div>
      <IconButton color="primary" onClick={inputClickHandle}>
        <input ref={inputRef} type="file" id="upload-input" hidden />
        <ImageOutlinedIcon style={{ fontSize: 26 }} />
      </IconButton>
      <div className={classes.imagesList}>
        {images.map((imageUrl) => (
          <div className={classes.imagesListItem} style={{ backgroundImage: `url(${imageUrl})` }} />
        ))}{' '}
      </div>
    </div>
  );
};
