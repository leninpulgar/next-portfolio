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
  coverImage: string;
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
      <Image width={600} height={400} src={project.coverImage} alt={project.name} className="my-4 w-full" />
 
      <h2 className="dark:text-white text-white mt-4 text-sm font-light">
        {project.description.length > 200 
          ? `${project.description.substring(0, 200)}...` 
          : project.description}
      </h2>
      {/* <Link href={`/work/${project.slug}`} className="text-sm border font-light dark:border-white/[0.2] border-white/[0.2] rounded-full mt-4 text-white dark:text-white px-2 py-0.5">
        Read more
      </Link> */}

      <Link href={`/work/${project.slug}`} className="mt-4 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-0 text-sm font-medium text-white backdrop-blur-3xl">
          Read more
        </span>
      </Link>
    </div>);
};

export default Projects;
