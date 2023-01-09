import Image from "../entities/Image.interface";
import { ModalImageContextStateI } from "../interfaces/ModalContext.interface";
import { removeImage } from "../services/image.service";

interface useImageListI {
    modal: ModalImageContextStateI;
    dispatchModal: ({state, type, data}: ModalImageContextStateI) => void;
    listImages: Image[];
    dispatchList: (newState: Image[]) => void;
}

const useImageList= ({ modal, dispatchModal, listImages, dispatchList }: useImageListI) => {
    const edit = (image: Image) => {
        dispatchModal({
            state: modal.state,
            type: 'update',
            data: image
        })
    };

    const remove = (id: number) => {
        removeImage(id).then(res => {
            if (res) dispatchList(listImages.filter(image => image.id !== id))
        })
    };

    return { edit, remove }
}

export default useImageList