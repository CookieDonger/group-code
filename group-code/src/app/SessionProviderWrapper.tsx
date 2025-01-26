'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SessionProviderWrapper({ children }: Props) {
  console.log('Rendering SessionProvider');
  return <SessionProvider>{children}</SessionProvider>;
}