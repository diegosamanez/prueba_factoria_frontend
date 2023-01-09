import React, { useState, useEffect, useRef } from 'react';
import { useRatioImage } from '../../hooks/useRatioImage';

interface ImageCardProps {
    src: string;
    alt: string;
    className?: string;
    onEdit: () => void;
    onDelete: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
    src,
    alt,
    className,
    onEdit,
    onDelete,
}) => {
    const [showButtons, setShowButtons] = useState(false);
    const [aspectRatio, setAspectRatio] = useState('1-1');
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const image = imageRef.current;
        if (!image) {
            return;
        }
        useRatioImage({ image, setAspectRatio });
    }, [src]);

    return (
        <div
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
            className={`relative h-0 aspect-ratio--${aspectRatio} ${className}`}
            data-testid='image-card'
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className='absolute h-full w-full object-cover rounded-lg shadow-lg'
            />
            {showButtons && (
                <>
                    <div className='absolute top-0 right-0 p-4 flex justify-between w-full'>
                        <button data-testid='button-edit' onClick={onEdit} className='btn btn-blue'>
                            <i className='f5-pencil text-white hover:text-gray-300 cursor-pointer mr-4 bg-blue-400 hover:bg-blue-600 font-bold py-2 px-4 rounded'></i>
                        </button>
                        <button data-testid='button-delete' onClick={onDelete} className='btn btn-red'>
                            <i className='f5-trash text-white hover:text-gray-300 cursor-pointer bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded'></i>
                        </button>
                    </div>
                    <p className='text-center text-2xl font-bold absolute bottom-0 w-full mb-4 text-white bg-black opacity-75'>
                        {alt}
                    </p>
                </>
            )}
        </div>
    );
};

export default ImageCard;
