import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export function Button({ children, onClick }: Props) {
  return (
    <div className='my-4 border-2 rounded-lg p-2 w-max hover:text-blue-500'>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
