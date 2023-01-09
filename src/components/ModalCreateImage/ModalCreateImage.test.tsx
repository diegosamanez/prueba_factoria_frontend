import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ModalCreateImage from './ModalCreateImage';

jest.mock('../../environments', () => ({
    API_URL: 'http://test.test'
}))

jest.mock( '../../context/ModalImageContext', () => ({
    useModalImage: require('./__mocks__/ModalImageContext').mockUseModalImage
}))

describe('ModalCreateImage', () => {
    it('renders the modal when state.state is true', () => {
        const { queryByTestId, container } = render(<ModalCreateImage />);
        expect(queryByTestId('modal-image')).not.toBeNull()
    });
});