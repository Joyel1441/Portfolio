import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  project_title: string;
  project_description: string;
  github_link: string;
  demo_link: string;
  image_link: string;
};

const ProjectCard = (props: Props) => {
  const { id } = props;
  const { project_title } = props;
  const { project_description } = props;
  const { github_link } = props;
  const { demo_link } = props;
  const { image_link } = props;
  return (
    <div className="text-xl">
      <div className="grid grid-flow-row gap-2">
        <div className="w-full block relative h-72">
        <Image src={image_link} alt="project image" fill={true} className="rounded-md"/>
        </div>
        <h1 className="font-bold text-2xl">{project_title}</h1>
        <p>{project_description}</p>
        {github_link.length > 0 && <span className="w-max"><Link href={github_link} className="text-blue-700">Source code</Link></span>}
        {demo_link.length > 0 && <span className="w-max"><Link href={demo_link} className="text-blue-700">Visit</Link></span>}
      </div>
    </div>
  );
};

export default ProjectCard;
