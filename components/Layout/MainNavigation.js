import Link from 'next/link';
import { useTheme } from 'next-themes';

import { FiSun, FiMoon } from 'react-icons/fi';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const MainNavigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const changeThemeHandler = (theme) => {
    setTheme(theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const lightThemeToggleBtn = (
    <button
      aria-label="Change to light theme"
      onClick={changeThemeHandler.bind(null, 'light')}
    >
      <FiSun className="mx-2 text-3xl" />
    </button>
  );

  const darkThemeToggleBtn = (
    <button
      aria-label="Change to dark theme"
      onClick={changeThemeHandler.bind(null, 'dark')}
    >
      <FiMoon className="mx-2 text-3xl" />
    </button>
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed z-10 flex justify-center w-full bg-white dark:bg-black bg-opacity-90">
      <div className="flex flex-col  w-full text-center grow-[1] md:max-w-5xl md:flex-row">
        <div className="flex justify-center w-full px-5 pt-1 md:justify-between">
          <div className="flex items-center text-3xl font-special-elite">
            <Link href="/">
              <h1>Poh Feng</h1>
            </Link>
            {mounted && theme === 'dark' && lightThemeToggleBtn}
            {mounted && theme === 'light' && darkThemeToggleBtn}
          </div>
          <nav className="hidden md:flex md:justify-center">
            <ul className="flex space-x-2 text-lg font-semibold">
              <li className="py-2 rounded-md md:px-4 sm:px-2">
                <Link href="/#about">About</Link>
              </li>
              <li className="py-2 rounded-md md:px-4 sm:px-2">
                <Link href="/#experience">Experience</Link>
              </li>
              <li className="py-2 rounded-md md:px-4 sm:px-2">
                <Link href="/#projects">Projects</Link>
              </li>
              <li className="py-2 rounded-md md:px-4 sm:px-2">
                <a href="/resume.pdf" target="_blank" rel="nofollow">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <ul className="flex items-center justify-center ml-2 md:ml-0">
            <li className="mx-2 text-3xl cursor-pointer">
              <a
                href="https://www.linkedin.com/in/pang-poh-feng-055272226/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="mx-2 text-3xl cursor-pointer">
              <a
                href="https://github.com/pohfeng"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>
        <nav className="flex justify-center md:hidden">
          <ul className="flex space-x-2 text-lg font-semibold">
            <li className="pt-2 rounded-md md:px-4 sm:px-2">
              <Link href="/#about">About</Link>
            </li>
            <li className="pt-2 rounded-md md:px-4 sm:px-2">
              <Link href="/#experience">Experience</Link>
            </li>
            <li className="pt-2 rounded-md md:px-4 sm:px-2">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="pt-2 rounded-md md:px-4 sm:px-2">
              <Link href="/resume" rel="nofollow">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
