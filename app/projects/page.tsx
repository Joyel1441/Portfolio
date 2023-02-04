import ProjectCard from "@/components/projectcard";
import Image from "next/image";
import {prisma} from '../../prisma/index';

async function getProjects() {
    try {
      const data = await prisma.projects.findMany()
      return data
     }
     catch (error) {
      console.log(error)
      return null
     }
  }
  

const Projects = async () => {
    const data: {
        id: number;
        project_title: string;
        project_description: string;
        github_link: string;
        demo_link: string;
        image_link: string;
      }[] | null = await getProjects();
    
  if (data === null) return <div><p>Cannot fetch Projects</p></div>
  return (
    <div className="flex w-full h-full justify-center items-center mt-4">
    {data.map((project) => (
        <div key={project.id}>
          <ProjectCard id={project.id} project_title={project.project_title} project_description={project.project_description} github_link={project.github_link} demo_link={project.demo_link} image_link={project.image_link}/>
        </div>
      ))}
     </div>
  )
}

export default Projects