import Link from 'next/link';
import { useTheme } from 'next-themes';

import { FiSun, FiMoon } from 'react-icons/fi';
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
    <button onClick={changeThemeHandler.bind(null, 'light')}>
      <FiSun className="mx-2 text-3xl" />
    </button>
  );

  const darkThemeToggleBtn = (
    <button onClick={changeThemeHandler.bind(null, 'dark')}>
      <FiMoon className="mx-2 text-3xl" />
    </button>
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed z-10 flex justify-center w-full bg-white dark:bg-black bg-opacity-90">
      <div className="flex flex-col justify-between w-full text-center md:max-w-3xl md:flex-row">
        <div className="flex justify-center">
          <div className="flex items-center text-3xl font-special-elite ">
            <Link href="/">Poh Feng</Link>
          </div>
          {mounted && theme === 'dark' && lightThemeToggleBtn}
          {mounted && theme === 'light' && darkThemeToggleBtn}
        </div>
        <nav className="flex justify-center">
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
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
