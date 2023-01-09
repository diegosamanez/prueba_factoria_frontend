import Image from "../entities/Image.interface"

export interface ModalImageContextStateI {
    state: boolean,
    type: string
    data?: Image
}