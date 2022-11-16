import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { SideBar } from '../src/SideBar';
import Link from 'next/link';
import { RepoLink } from '../src/RepoLink';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React 102</title>
        <meta
          name='description'
          content='Basics of React after the 101 stuff (not included).'
        />
      </Head>
      <header className='h-auto mb-2 border-b-4 flex justify-between items-center'>
        <div>
          <Link href='/'>
            <h1 className='font-bold text-3xl'>React 102</h1>
          </Link>
          <span className='text-sm'>
            Basics of React after the 101 stuff (not included).
          </span>
        </div>
        <RepoLink />
      </header>
      <div className='mb-auto h-auto flex'>
        <aside className='w-1/6 h-full px-2'>
          <SideBar />
        </aside>
        <main className='w-5/6'>
          <Component {...pageProps} />
        </main>
      </div>
      <footer className='h-auto border-t-2'>
        {`Bruno Noriller @2022${
          new Date().getFullYear() > 2022 ? `-${new Date().getFullYear()}` : ''
        }`}
      </footer>
    </>
  );
}
