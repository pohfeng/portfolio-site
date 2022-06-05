import { useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';

import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';

export default function HomePage() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className="container max-w-3xl mx-auto">
      <Head>
        <title>Poh Feng's Portfolio</title>
        <meta name="description" content="Portfolio Page of Poh Feng Pang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col mx-2">
        <Intro />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer className="flex items-center my-4 ">
        <span>Build with</span>
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="px-3 text-[#5d5dd5] italic font-semibold"
          rel="noreferrer"
        >
          NextJS
        </a>
        <span>and</span>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="px-3 text-[#5d5dd5]  italic font-semibold"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
      </footer>
    </div>
  );
}
