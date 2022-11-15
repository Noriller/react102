import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Button } from '../src/Button';

function WithIf() {
  const [random, setRandom] = useState(Math.random());

  return (
    <div>
      <div>
        <p>
          This one has a random value being generated and will show a component
          based on if the random value was smaller or bigger than 0.5.
        </p>
        <p>The random value was: {random.toFixed(2)}</p>
        <Button onClick={() => setRandom(Math.random())}>
          Click here to reload random
        </Button>
      </div>
      <div className='text-xl'>
        {random > 0.5 ? (
          <div>Random is True!</div>
        ) : (
          <div>Random is False!</div>
        )}
      </div>
    </div>
  );
}

export const RenderOnClientOnly = dynamic(Promise.resolve(WithIf), {
  ssr: false,
});

export default RenderOnClientOnly;
