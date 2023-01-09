import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom'
import ImageList from './ImageList';

jest.mock( '../../context/ListImageContext', () => ({
    useListImage: require('./__mocks__/ListImageContext').mockUseListImage
}))

jest.mock('../../environments', () => ({
    API_URL: 'http://test.test'
}))

describe('ImageList', () => {
    it('displays a list of images after fetching them from the API', async () => {
        const { getByAltText } = render(<ImageList />);
        await screen.findByAltText('image 1')
        expect(getByAltText('image 2')).toBeInTheDocument();
    });
});
