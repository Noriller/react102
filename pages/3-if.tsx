import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

function WithIf() {
  const random = Math.random();
  const reload = useRouter().reload;

  return (
    <div>
      <div>
        <p>
          This one has a random value being generated and will show a component
          based on if the random value was smaller or bigger than 0.5.
        </p>
        <p>The random value was: {random.toFixed(2)}</p>
        <div className='my-4 border-2 rounded-lg p-2 w-max hover:text-blue-500'>
          <button onClick={reload}>Click here to reload the page</button>
        </div>
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
