import { useState } from 'react';

export default function WithState() {
  const [state, setState] = useState(0);
  let outsideState = 0;

  const handleClick = (all = true) => {
    all && setState(s => s + 1);
    outsideState += 1;

    console.log({ state, outsideState });
  };

  return (
    <div>
      <div className='my-4 border-2 rounded-lg p-2 w-max hover:text-blue-500'>
        <button onClick={() => handleClick()}>
          Click Me to Increase Values
        </button>
      </div>

      <div className='my-4'>
        <p>This one is consuming from the state.</p>
        <p className='text-lg'>State: {state}</p>
      </div>
      <div className='my-4'>
        <p>This one is consuming from a variable.</p>
        <p className='text-lg'>Variable: {outsideState}</p>
      </div>
      <div className='my-4'>
        <p className='text-lg'>Check the console!</p>
        <p>
          Even if the variable increases, it doesn&apos;t render the changes
        </p>
        <p>
          It also recreates the whole component on each render, meaning the
          variable is always <pre className='inline bg-slate-600'>0</pre>
        </p>
        <div>
          <div className='my-4 border-2 rounded-lg p-2 w-max hover:text-blue-500'>
            <button onClick={() => handleClick(false)}>
              Click Me to Increase Only the Variable
            </button>
          </div>
          <p>
            Even if you try to increase only the variable, React doesn&apos;t
            know anything changed and so it doesn&apos;t rerender.
          </p>
        </div>
      </div>
    </div>
  );
}
