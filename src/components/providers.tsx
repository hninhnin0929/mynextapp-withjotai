'use client'

import { ReactNode } from 'react';
import { Provider } from 'jotai';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider>
      {children}
    </Provider>
  );
};