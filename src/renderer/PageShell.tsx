import { StrictMode } from 'react';
import '../index.css';

export function PageShell({ children }: { children: React.ReactNode }) {
  return <StrictMode>{children}</StrictMode>;
}

