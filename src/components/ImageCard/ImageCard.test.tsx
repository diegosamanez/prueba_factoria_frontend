import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ImageCard from './ImageCard';

describe('ImageCard', () => {
  it('should render the image and show the buttons on hover', () => {
    const src = 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_960_720.jpg';
    const alt = 'Test image';
    const onEdit = jest.fn();
    const onDelete = jest.fn();

    const { getByAltText, getByTestId, queryByTestId } = render(
      <ImageCard src={src} alt={alt} onEdit={onEdit} onDelete={onDelete} />
    );

    const image = getByAltText(alt);
    expect(image).toHaveAttribute('src', src);

    const card = getByTestId('image-card');
    
    expect(queryByTestId('button-edit')).toBeNull();
    expect(queryByTestId('button-delete')).toBeNull();
    
    // Simula un hover sobre la imagen
    fireEvent.mouseEnter(card);
    
    const buttonEdit = getByTestId('button-edit')
    const buttonDelete = getByTestId('button-delete')

    // Verifica que se muestran los botones al hacer hover
    expect(buttonEdit).not.toBeNull();
    expect(buttonDelete).not.toBeNull();

    fireEvent.click(buttonEdit);

    // Verifica que se ha llamado al manejador de evento onEdit
    expect(onEdit).toHaveBeenCalled();

    // Simula un click en el botón Delete
    fireEvent.click(buttonDelete);

    // Verifica que se ha llamado al manejador de evento onDelete
    expect(onDelete).toHaveBeenCalled();
  });
});