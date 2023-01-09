import React, { useReducer, useContext, createContext } from 'react';
import Image from '../entities/Image.interface';

const ListImageContext = createContext<{
  state: Image[];
  dispatch: (newState: Image[]) => void;
}>({ state: [], dispatch: () => {} });

const listImageReducer = (state: Image[], newState: Image[]) => {
  return [...newState]
}

export function ListImageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(listImageReducer, []);
  return (
    <ListImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ListImageContext.Provider>
  );
}

export function useListImage() {
  const context = useContext(ListImageContext);
  if (context === undefined) {
    throw new Error('useListImage must be used within a ListImageProvider');
  }
  return context;
}
