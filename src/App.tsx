import React from 'react';
import ImageList from './components/ImageList/ImageList';
import { useModalImage } from './context/ModalImageContext';
import ModalCreateImage from './components/ModalCreateImage/ModalCreateImage';
import { createImage } from './services/image.service';

function App() {
  const { state: modal, dispatch} = useModalImage()
  const addImage = () => {
    dispatch({state: modal.state, type: 'save'} );
  };

  
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold text-gray-900 text-center mb-3'>
        Mis Imagenes
      </h1>
      <div className='flex justify-center items-center'>
        <button
          onClick={addImage}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3 text-center'
        >
          Agregar Imagen
        </button>
      </div>
      <ModalCreateImage />
      <ImageList />
    </div>
  );
}

export default App;
