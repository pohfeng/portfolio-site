import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from '../components/Projects/ProjectCard';

jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children
);

jest.mock('react-icons/ai', () => {
  const oriModule = jest.requireActual('react-icons/ai');

  return {
    __esModule: true,
    ...oriModule,
    AiOutlinePlayCircle: () => <span></span>,
    AiFillGithub: () => <span></span>,
  };
});

describe('Project Card', () => {
  it('renders correctly with props', () => {
    const mockTech = [
      { text: 'NextJS', colorClass: 'shadow-[0_0_10px_#808080] bg-[#808080]' },
      {
        text: 'Tailwind CSS',
        colorClass: 'shadow-[0_0_10px_#3399FF] bg-[#3399FF]',
      },
    ];

    render(
      <ProjectCard
        appName="Testing App"
        description="A Testing App"
        techStack={mockTech}
        demoLink="https://react-ecommerce-app-dd10f.web.app/"
        gitHubLink="https://github.com/pohfeng/react-ecommerce-app"
      />
    );

    const appName = screen.getByText('Testing App');
    const description = screen.getByText('A Testing App');
    const badges = screen.getAllByTestId('badge');

    expect(appName).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(badges).toHaveLength(2);
  });
});
