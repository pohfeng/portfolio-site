import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <section id="experience" className="pt-16">
      <h2 className="my-4 text-4xl font-special-elite">Work Experience</h2>
      <ExperienceItem summary="Fusionex Group (2018 - present)" open={true}>
        <p className="text-justify">
          Joined Fusionex as a solutions development consultant in 2018.
          Familiar in frontend and backend development of web application.
        </p>
        <ul className="pl-5 mt-2 text-base list-disc">
          <li>Forms Development with Vue.js and Knockout.js</li>
          <li>REST API Development with Express.js framework</li>
          <li>Integrate API with NoSQL database (MongoDB)</li>
          <li>
            Build private packages with Typescript and publish to Nexus
            repository manager
          </li>
          <li>Python scripting</li>
          <li>Experienced with message broker such as Rabbit MQ</li>
          <li>Experienced with Docker and Kubernetes</li>
          <li>CI/CD with Jenkins auto deployment</li>
          <li>Familiar with GIT versioning control</li>
          <li>Work under scrum methodology</li>
        </ul>
      </ExperienceItem>
    </section>
  );
};

export default Experience;
