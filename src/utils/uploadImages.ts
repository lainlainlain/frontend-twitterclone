import { axios } from '../core/axios';

interface uploadImagesProps {
  url: string;
  size: number;
  height: number;
  width: number;
}

export const uploadImages = async (image: any): Promise<uploadImagesProps> => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
