import { MouseEvent } from 'react';
import { createImage, updateImage as updateImageService } from "../services/image.service";
import { ModalImageContextStateI } from '../interfaces/ModalContext.interface';
import Image from '../entities/Image.interface';

interface useModalCreateImageI {
    dispatch: ({state, type, data}: ModalImageContextStateI) => void;
    dispatchListImage: ([]: Image[]) => void;
    state: ModalImageContextStateI;
    listImage: Image[];
    setName: (name: string) => void;
    setFile: (file: File | null) => void;
    name: string;
    file: File | null
}

const useModalCreateImage = ({ dispatch, dispatchListImage, state, listImage, setName, setFile, name, file }: useModalCreateImageI) => {

    const createFormData = () => {
        const formData = new FormData();
        formData.append('name', name);
        if (file) formData.append('image', file);
        return formData
    }

    const saveImage = (name: string, file: File | null) => {
        const formData = createFormData()
        createImage(formData).then((res) => {
          dispatch({state: state.state, type: 'save', data: undefined});
          dispatchListImage([res, ...listImage])
        });
      };

    const updateImage = (id: number, name: string, file: File | null) => {
        const formData = createFormData()
        updateImageService(id, formData).then(res => {
            dispatch({state: state.state, type: 'update', data: undefined});
            const newListImage = listImage.map(image => image.id === id ? res : image)
            dispatchListImage(newListImage)
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (state.type === 'save') {
            saveImage(name, file)
        } else {
            if (state.data) updateImage(state.data.id, name, file)
        }
        setName('')
        setFile(null)
    };

    const closeModal = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.classList.contains('modal-create-image')) dispatch(state);
    };

    return { handleSubmit, closeModal }
}

export default useModalCreateImage