import Link from 'next/link';
import { useRouter } from 'next/router';

export function SideBar() {
  const router = useRouter();

  const routes: [string, string, boolean][] = [
    ['/1-basic', 'basic render'],
    ['/2-props', 'with props'],
    ['/3-if', 'with if'],
    ['/4-state', 'with state'],
    ['/5-effect', 'with effect'],
    // ['/', ''],
  ].map(([href, name]) => [href, name, href === router.asPath]);

  return (
    <ul>
      {routes.map(([href, name, active]) => {
        return (
          <li key={href} className='hover:text-blue-500'>
            <Link
              href={href}
              className={`${
                active ? 'text-cyan-200 font-bold' : ''
              } underline`}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
