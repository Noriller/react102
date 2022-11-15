import React from 'react';

export function CodeLike({ children }: { children: React.ReactNode }) {
  return <pre className='inline bg-slate-600 p-0.5 rounded-sm'>{children}</pre>;
}
