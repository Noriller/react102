import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section>
      <p>Use the links on the left to navigate the examples.</p>
      <p>
        The code is in the{' '}
        <a target='_blank' href='https://github.com' rel='noreferrer'>
          Github
        </a>
      </p>
    </section>
  );
}
