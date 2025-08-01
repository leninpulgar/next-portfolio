"use client"

import Link from "next/link";
// Imports
import { Icon } from "./ui/evervault-card";
import Image from "next/image";


// Types
type Projects = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
};

// Component
const Projects = (project: Projects) => {
  return (
    <div className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30em]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
 
      
      <h1>{project.name}</h1>
      <Image width={600} height={400} src={project.image} alt={project.name} className="my-4 w-full" />
 
      <h2 className="dark:text-white text-white mt-4 text-sm font-light">
        {project.description}
      </h2>
      <Link href={`/work/${project.slug}`} className="text-sm border font-light dark:border-white/[0.2] border-white/[0.2] rounded-full mt-4 text-white dark:text-white px-2 py-0.5">
        Read more
      </Link>
    </div>);
};

export default Projects;
