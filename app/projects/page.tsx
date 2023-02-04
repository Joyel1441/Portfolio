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
    <div>
    {data.map((project) => (
        <div key={project.id}>
          <p>{project.project_title}</p>
          <p>{project.project_description}</p>
          <Image 
          src={project.image_link} alt="project image" width={500} height={500}/>
        </div>
      ))}
     </div>
  )
}

export default Projects