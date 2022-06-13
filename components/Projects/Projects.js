import Card from './ProjectCard';

const Projects = () => {
  const portfolioSiteTech = [
    { text: 'NextJS', colorClass: 'shadow-[0_0_10px_#808080] bg-[#808080]' },
    {
      text: 'Tailwind CSS',
      colorClass: 'shadow-[0_0_10px_#3399FF] bg-[#3399FF]',
    },
  ];

  const eCommerceAppTech = [
    { text: 'React', colorClass: 'shadow-[0_0_10px_#7367f0] bg-[#7367f0]' },
    { text: 'SCSS', colorClass: 'shadow-[0_0_10px_pink] bg-pink-300' },
    {
      text: 'React Router',
      colorClass: 'shadow-[0_0_10px_#80FF00] bg-[#80FF00]',
    },
    { text: 'Redux', colorClass: 'shadow-[0_0_10px_#FF8000] bg-[#FF8000]' },
  ];

  const ticTacToeAppTech = [
    { text: 'Vue', colorClass: 'shadow-[0_0_10px_#80FF00] bg-[#80FF00]' },
    { text: 'SCSS', colorClass: 'shadow-[0_0_10px_pink] bg-pink-300' },
    {
      text: 'Node.js',
      colorClass: 'shadow-[0_0_10px_#80FF00] bg-[#80FF00]',
    },
    {
      text: 'Express.js',
      colorClass: 'shadow-[0_0_10px_#7367f0] bg-[#7367f0]',
    },
    {
      text: 'Socket.IO',
      colorClass: 'shadow-[0_0_10px_#3399FF] bg-[#3399FF]',
    },
  ];

  // const libraryApp = [
  //   { text: 'React', colorClass: 'shadow-[0_0_10px_#7367f0] bg-[#7367f0]' },
  //   { text: 'CSS', colorClass: 'shadow-[0_0_10px_#38bdf8] bg-sky-400' },
  //   {
  //     text: 'React Router',
  //     colorClass: 'shadow-[0_0_10px_#80FF00] bg-[#80FF00]',
  //   },
  //   { text: 'Redux', colorClass: 'shadow-[0_0_10px_#FF8000] bg-[#FF8000]' },
  // ];

  // const marvelComicInfoAppTech = [
  //   { text: 'Vue', colorClass: 'shadow-[0_0_10px_#84cc16] bg-lime-500' },
  //   { text: 'SCSS', colorClass: 'shadow-[0_0_10px_pink] bg-pink-300' },
  // ];

  return (
    <section id="projects" className="flex flex-col pt-16">
      <h2 className="my-4 text-4xl font-special-elite">Projects</h2>
      <p className="mb-2 text-base md:text-xl">
        Here are some projects I wrote as practice.
      </p>
      <Card
        appName="Portfolio Site"
        description="Build with Next.js and Tailwind CSS. Pre-renders website page to have better performance and SEO."
        techStack={portfolioSiteTech}
        demoLink="/"
        gitHubLink="https://github.com/pohfeng/portfolio-site"
      />
      <Card
        appName="React Ecommerce App"
        description="An Online Store build with React.js and SCSS."
        techStack={eCommerceAppTech}
        demoLink="https://react-ecommerce-app-dd10f.web.app/"
        gitHubLink="https://github.com/pohfeng/react-ecommerce-app"
      />
      <Card
        appName="Online Tic-Tac-Toe App"
        description="An Online Tic-tac-toe game."
        techStack={ticTacToeAppTech}
        demoLink="https://tic-tac-toe-client-five.vercel.app/#/"
        gitHubLink="https://github.com/pohfeng/tic-tac-toe-client"
      />
      {/* <Card appName="Library App" techStack={libraryApp} />
      <Card
        appName="Marvel Comic Info App"
        techStack={marvelComicInfoAppTech}
      /> */}
    </section>
  );
};

export default Projects;
