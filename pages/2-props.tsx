import { useState } from 'react';

export default function Props() {
  const [state, setState] = useState(0);
  const handleClick = (val: number) => {
    setState(val);
  };

  const list: [number, string][] = [
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
    [4, 'Four'],
    [5, 'Five'],
  ];

  return (
    <div>
      <p>Given this list:</p>
      <ul className='my-2 ml-4 list-disc'>
        {list.map(([num, text]) => (
          <li key={num} className='hover:text-blue-500'>
            <button
              onClick={() => handleClick(num)}
              className={`${state === num ? 'underline text-red-300' : ''}`}>
              {text}
            </button>
          </li>
        ))}
      </ul>
      <div className='mt-4'>
        {Boolean(state) && (
          <>
            <CustomElement value={state} />
            <div className='mt-4'>
              <p>
                The component above takes a{' '}
                <pre className='inline bg-slate-600'>value</pre> prop and
                renders something based on it.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CustomElement({ value }: { value: number }) {
  return (
    <div className='text-xl'>{`The value is: ${value} and it's a ${
      value % 2 === 0 ? 'even' : 'odd'
    } number`}</div>
  );
}
