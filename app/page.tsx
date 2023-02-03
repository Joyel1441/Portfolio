import Image from "next/image";

async function getProjects() {
  const res = await fetch(`${process.env.NOW_URL}/api/getProjects`);
  if (!res.ok) {
    console.log("Cannot fetch projects");
  }
  return res.json();
}

export default async function Home() {
  const data: {
    id: number;
    project_title: string;
    project_description: string;
    github_link: string;
    demo_link: string;
    image_link: string;
  }[] = await getProjects();
  return (
    <main>
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
    </main>
  );
}
