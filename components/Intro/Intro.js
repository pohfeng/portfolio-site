import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';

import Typed from 'typed.js';

const Intro = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Hi there!', "I'm Poh Feng.", 'A Full Stack Developer.'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      startDelay: 500,
      backDelay: 1200,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen wrap">
      <div id="intro" className="mt-auto text-6xl text-center md:text-8xl">
        <span
          className="h-10 text-black font-special-elite dark:text-white dark:neon-text"
          ref={el}
        />
      </div>
      <div className="flex flex-col items-center p-8 mt-auto text-black dark:text-white">
        <strong className="pb-2">Know More About Me</strong>
        <Link href="/#about">
          <IoChevronDownOutline className="text-6xl cursor-pointer animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Intro;
