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
    window.scrollTo(0, 0);
  }, [setTheme]);

  return (
    <div className="container max-w-3xl mx-auto">
      <Head>
        <title>Pang Poh Feng - Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta name="author" content="Pang Poh Feng" />
        <meta name="application-name" content="Pang Poh Feng's Portfolio" />
        <meta
          name="description"
          content="Full Stack Developer, I enjoyed developing web apps that run lighting fast."
        />
        <meta property="og:url" content="https://www.pf-pang.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pang Poh Feng's Portfolio" />
        <meta
          property="og:description"
          content="Full Stack Developer, I enjoyed developing web apps that run lighting fast."
        />
        <meta
          property="og:title"
          content="Pang Poh Feng - Full Stack Developer"
        />
        <meta />
        <link rel="canonical" href="https://www.pf-pang.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col mx-2">
        <Intro />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer className="flex flex-col items-center justify-between my-4 md:flex-row ">
        <div>
          <span>Developed with</span>
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
        </div>
        <div className="mt-2 md:mt-0">
          <p>© Pang Poh Feng. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
