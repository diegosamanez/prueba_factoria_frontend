import '@testing-library/jest-dom'

export const mockListImages = [
    { id: 1, name: 'image 1', path: '/image1.jpg' },
    { id: 2, name: 'image 2', path: '/image2.jpg' }
];

export const mockDispatchList = jest.fn();

export const mockUseListImage = jest.fn(() => ({
    state: mockListImages,
    dispatch: mockDispatchList
}));