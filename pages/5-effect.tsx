import { useEffect, useState } from 'react';
import { Button } from '../src/Button';
import { CodeLike } from '../src/CodeLike';

export default function WithEffect() {
  const [state, setState] = useState(['initial state']);
  const [otherState, setOtherState] = useState(0);
  const [breakPage, setBreakPage] = useState(false);

  function pushToState(newValue: string) {
    setState(s => {
      return [...s, newValue];
    });
  }

  useEffect(() => {
    pushToState('useEffect []');

    const timeout = makeTimeout(() => {
      pushToState('useEffect [] > timeout');
    });

    return () => {
      pushToState('useEffect [] > return');
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    pushToState('useEffect [otherState]');

    return () => {
      pushToState('useEffect [otherState] > return');
    };
  }, [otherState]);

  useEffect(() => {
    if (breakPage) {
      pushToState('useEffect [state, breakPage]');
    }
  }, [state, breakPage]);

  return (
    <div>
      <div>
        <p className='m-2 text-xl font-bold'>Lifecycle!</p>
        <p className='m-2'>
          Because of Strict Mode, the code is initially ran twice.
        </p>
        <div className='m-2'>
          If you try to add <CodeLike>state</CodeLike> to the dependency array,
          since the effects are mutating the same <CodeLike>state</CodeLike>,
          then you end up with an infinite recursion and it will break the page.
        </div>
      </div>
      <pre className='my-4 bg-slate-700 p-2 rounded-lg'>
        {state.map(item => (
          <div key={item}>{item}</div>
        ))}
      </pre>
      <Button onClick={() => setOtherState(s => s + 1)}>
        <p>Click me to change the other state</p>
        <p>Other state curently at {otherState}</p>
      </Button>
      <div>
        <Button
          onClick={() => setBreakPage(true)}
          className='bg-red-900 hover:bg-red-500 hover:text-black'>
          <p>Break the page!</p>
          <span className='text-sm'>Tip: you will have to reload!</span>
        </Button>
      </div>
    </div>
  );
}

function makeTimeout(cb: Function, time = 500) {
  return setTimeout(cb, time);
}
