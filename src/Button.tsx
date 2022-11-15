import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
};

export function Button({ children, onClick, className = '' }: Props) {
  return (
    <div
      className={`my-4 border-2 rounded-lg p-2 w-max hover:text-blue-500 ${className}`}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
