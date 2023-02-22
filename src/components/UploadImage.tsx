import React from 'react';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { IconButton } from '@material-ui/core';
import { ImageObj } from './AddTweetForm';
import { ImageList } from './ImageList';

interface UploadImageProps {
  images: ImageObj[];
  onChangeImages: (callback: (images: ImageObj[]) => ImageObj[]) => void;
}

export const UploadImage: React.FC<UploadImageProps> = ({ images, onChangeImages }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

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
      <ImageList images={images.map((obj) => obj.blobUrl)} onRemoveImage={removeImage}></ImageList>
    </div>
  );
};
