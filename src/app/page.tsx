"use client"
import { atom, useAtom } from 'jotai';
import { countAtom } from './store';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [count, setCounter] = useAtom(countAtom);
  const onClick = () => setCounter(prev => prev +1 );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center flex flex-col font-mono text-sm lg:flex">
        <h1>{count}</h1>
        <button onClick={onClick} className='border-t-indigo-500 bg-blue-950 text-white'>
          Click
        </button>
        <button className="btn btn-primary">Button</button>
      </div>
    </main>
  );
}
