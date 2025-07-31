import { TracingBeam } from "@/components/ui/tracing-beam";
import projectsData from "@/data/projects"; // ajusta el path según tu estructura
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <TracingBeam className="px-6">
        <div className="p-8 max-w-3xl mx-auto text-white">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <p className="text-lg">{project.description}</p>


            <img src={project.image} alt={project.name} className="my-4 w-full" />
            <p className="text-lg">{project.description}</p>
            <img src={project.image} alt={project.name} className="my-4 w-full" />
            <p className="text-lg">{project.description2}</p>
            <img src={project.image} alt={project.name} className="my-4 w-full" />
            <p className="text-lg">{project.description3}</p>
        </div>
    </TracingBeam>
  );
}
