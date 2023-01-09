import React, { useEffect } from 'react';
import { getImages } from '../../services/image.service';
import { API_URL } from '../../environments';
import ImageCard from '../ImageCard/ImageCard';
import { useListImage } from '../../context/ListImageContext';
import useImageList from '../../hooks/useImageList';
import { useModalImage } from '../../context/ModalImageContext';

export default function ImageList() {
  const { state: listImages, dispatch: dispatchList } = useListImage();
  const { state: modal, dispatch: dispatchModal} = useModalImage()
  const { edit, remove } = useImageList({ modal, dispatchModal, listImages, dispatchList })

  useEffect(() => { getImages().then(res => dispatchList(res)) }, []);

  return (
    <div className='gap-3 grid grid-cols-3'>
      {listImages.map((image) => (
        <ImageCard
          key={image.id}
          alt={image.name}
          src={`${API_URL}${image.path}`}
          className='rounded-lg shadow-lg'
          onEdit={() => edit(image)}
          onDelete={() => remove(image.id)}
        />
      ))}
    </div>
  );
}
