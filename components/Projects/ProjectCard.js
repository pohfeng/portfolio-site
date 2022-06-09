import Link from 'next/link';
import Badge from '../Common/Badge';

import { AiOutlinePlayCircle, AiFillGithub } from 'react-icons/ai';

const ProjectCard = (props) => {
  const techStack = props.techStack || [];

  const techStackList = techStack.map((stack, index) => {
    return (
      <Badge key={`${index}_stack`} colorClass={stack.colorClass}>
        {stack.text}
      </Badge>
    );
  });

  return (
    <div className="group flex flex-col p-3 mx-3 my-3 min-h-[12rem] rounded-md h-full neon-container shadow-amber-400">
      <div className="text-xl font-special-elite">{props.appName}</div>
      <p className="font-light">{props.description}</p>
      <div className="flex flex-wrap mt-auto">{techStackList}</div>
      <div className="absolute top-0 left-0 z-40 invisible w-full h-full text-4xl text-black opcaity-0 group-hover:animate-neon_act_show">
        <div className="flex flex-col items-center justify-center h-full md:flex-row ">
          <Link href={props.demoLink}>
            <a
              target={props.demoLink !== '/' ? '_blank' : ''}
              className="flex items-center justify-center px-5 py-2 m-5 border-2 border-black border-solid rounded cursor-pointer hover:text-white active:scale-95"
            >
              <AiOutlinePlayCircle className="h-full" />
              <span>Demo</span>
            </a>
          </Link>
          <Link href={props.gitHubLink}>
            <a
              target="_blank"
              className="flex items-center justify-center px-5 py-2 mx-5 my-2 border-2 border-black border-solid rounded cursor-pointer hover:text-white"
            >
              <AiFillGithub className="h-full" />
              <span>GitHub</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
