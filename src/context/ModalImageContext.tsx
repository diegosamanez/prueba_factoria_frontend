import React, { useReducer, useContext, createContext } from 'react';
import { ModalImageContextStateI } from '../interfaces/ModalContext.interface';

const ModalImageContext = createContext<{
  state: ModalImageContextStateI;
  dispatch: ({state, type}: ModalImageContextStateI) => void;
}>({ state: {state: false, type: 'save'}, dispatch: () => {} });

function modalImageReducer(oldState: ModalImageContextStateI, newState: ModalImageContextStateI) {
    return {...newState, state: !newState.state}
}

export function ModalImageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(modalImageReducer, {state: false, type: 'save'});
  return (
    <ModalImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalImageContext.Provider>
  );
}

export function useModalImage() {
  const context = useContext(ModalImageContext);
  if (context === undefined) {
    throw new Error('useModalImage must be used within a ModalImageProvider');
  }
  return context;
}
