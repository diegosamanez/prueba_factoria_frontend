import React, { useState, useEffect } from 'react';
import { useModalImage } from '../../context/ModalImageContext';
import { useListImage } from '../../context/ListImageContext';
import useModalCreateImage from '../../hooks/useModalCreateImage';

const ModalCreateImage = () => {
    const [name, setName] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const { state, dispatch } = useModalImage()
    const { state: listImage, dispatch: dispatchListImage } = useListImage()
    const { handleSubmit, closeModal } = useModalCreateImage({ dispatch, dispatchListImage, state, listImage, setName, setFile, name, file })

    useEffect(() => {
        setName(state.data?.name ?? '')
      return () => {}
    }, [state.data])

    return (
        state.state ? (
            <div data-testid='modal-image' onClick={closeModal} className='fixed w-full top-0 left-0 h-full flex justify-center items-start pt-40 z-10 modal-create-image'>
                <form onSubmit={handleSubmit} className="w-11/12 h-auto text-white bg-slate-800 p-4 space-y-4 rounded-lg text-center">
                    <div className="mb-5">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium leading-5 text-white-700">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            className="form-input block w-full py-2 px-3 text-gray-800 leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="mb-2 block text-sm font-medium leading-5 text-white-700">
                            Imagen:
                        </label>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            id="image"
                            onChange={event => setFile(event.target.files?.[0] ?? null)}
                            className="form-input block w-full py-2 px-3 leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border hover:bg-white hover:text-slate-800">
                            {state.type === 'save' ? 'Guardar' : 'Actualizar'}
                        </button>
                    </div>
                </form>
            </div>
        )
            : null
    );
};

export default ModalCreateImage;
