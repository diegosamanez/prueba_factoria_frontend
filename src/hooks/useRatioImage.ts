import { divideRatio } from '../helpers/ratio';

const aspectRatioList = ['1/1', '2/1', '3/2', '4/3', '16/9', '9/16', '3/4', '2/3', '1/2'];

interface useRatioImageProps {
    image: HTMLImageElement;
    setAspectRatio: React.Dispatch<React.SetStateAction<string>>;
}

const updateAspectRatio = ({image, setAspectRatio}: useRatioImageProps) => {
    const imageAspectRatio = divideRatio(`${image.naturalWidth}/${image.naturalHeight}`);
    if (!aspectRatioList.includes(imageAspectRatio)) {
        setAspectRatio('golden');
        return;
    }
    setAspectRatio(imageAspectRatio.replace('/', '-'));
}

export const useRatioImage = ({ image, setAspectRatio }: useRatioImageProps) => {
    if (image.complete) {
        updateAspectRatio({image, setAspectRatio});
    } else {
        image.addEventListener('load', () => {
            updateAspectRatio({image, setAspectRatio});
        });
    }
}
