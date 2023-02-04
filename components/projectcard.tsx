import React from 'react'
import Image from 'next/image'

type Props = {
    id: number;
    project_title: string;
    project_description: string;
    github_link: string;
    demo_link: string;
    image_link: string;
}

const ProjectCard = (props: Props) => {
    const {id} = props
    const {project_title} = props
    const {project_description} = props
    const {github_link} = props
    const {demo_link} = props
    const {image_link} = props
  return (
    <div className="mx-4">
        <div>
            <Image src={image_link} alt="project image" width={200} height={200}/>
            <h1>{project_title}</h1>
            <p>{project_description}</p>
        </div>
    </div>
  )
}

export default ProjectCard