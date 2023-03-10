import ProjectCard from "@/components/projectcard";
import { prisma } from "../../prisma/index";

async function getProjects() {
  try {
    const data = await prisma.projects.findMany();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const Projects = async () => {
  const data:
    | {
        id: number;
        project_title: string;
        project_description: string;
        github_link: string;
        demo_link: string;
        image_link: string;
      }[]
    | null = await getProjects();

  if (data === null)
    return (
      <div>
        <p>Cannot fetch Projects</p>
      </div>
    );
  return (
    <div className="flex w-screen h-full justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 md:mt-10 gap-4 mt-20">
        {data.map((project) => (
          <div
            key={project.id}
            className="p-4 w-full border-2 border-solid border-blue-200 rounded-xl hover:border-blue-700 hover:-translate-y-2 hover:shadow-md hover:shadow-blue-500 max-w-xs md:max-w-md md:mt-10"
          >
            <ProjectCard
              id={project.id}
              project_title={project.project_title}
              project_description={project.project_description}
              github_link={project.github_link}
              demo_link={project.demo_link}
              image_link={project.image_link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
