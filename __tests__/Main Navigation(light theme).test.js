import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainNavigation from '../components/Layout/MainNavigation';
import { useTheme } from 'next-themes';

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children
);
jest.mock('react-icons/fi', () => {
  const oriModule = jest.requireActual('react-icons/fi');

  return {
    __esModule: true,
    ...oriModule,
    FiSun: () => <span></span>,
    FiMoon: () => <span></span>,
  };
});
jest.mock('react-icons/fa', () => {
  const oriModule = jest.requireActual('react-icons/fa');

  return {
    __esModule: true,
    ...oriModule,
    FaLinkedin: () => <span></span>,
    FaGithubSquare: () => <span></span>,
  };
});
jest.mock('next-themes', () => {
  const instance = { theme: 'light', setTheme: jest.fn() };
  const useTheme = jest.fn(() => instance);

  return {
    __esModule: true,
    useTheme,
  };
});

describe('Main Navigation (dark theme)', () => {
  it('show toggle light theme button by default', async () => {
    render(<MainNavigation />);

    const button = await screen.findByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Change to dark theme');
  });

  it('call setTheme function on button click', async () => {
    render(<MainNavigation />);

    const button = await screen.findByRole('button');
    fireEvent.click(button);
    expect(useTheme().setTheme).toBeCalledTimes(1);
  });
});
