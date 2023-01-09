import '@testing-library/jest-dom'

export const mockDispatchModal = jest.fn();

export const mockUseModalImage = jest.fn(() => ({
    state: {
        state: true,
        type: 'save'
    },
    dispatch: mockDispatchModal
}));