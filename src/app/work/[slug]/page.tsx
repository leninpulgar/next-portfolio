import { lazy, Suspense } from "react";
const LazyWrapper = lazy(() => import("@/components/LazyWrapper"));
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import projectsData from "@/data/projects"; // ajusta el path según tu estructura
import Image from "next/image";
import { notFound } from "next/navigation";
import { LinkPreview } from "@/components/ui/link-preview";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found'
    };
  }

  return {
    title: `${project.name} | Lenin Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Lenin Portfolio`,
      description: project.description,
      images: [project.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | Lenin Portfolio`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}


export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <>
    <TracingBeam className="px-6">
        <section id="contact" className="md:py-20 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-16">

                <div className="md:py-8 ml-6 md:mx-auto text-white md:col-span-3 w-[150px]">
                    <Suspense>
                        <LazyWrapper dimensions={{ width: 230, height: 90 }}>
                            <Image 
                                src={project.icon}
                                alt={project.name}
                                width={100}
                                height={100}
                                className="w-full h-auto"
                                priority
                            />
                        </LazyWrapper>
                    </Suspense>
                </div>
                

        <div className="p-8 sm:pt-0 max-w-3xl mx-auto text-white md:col-span-9">
            <Image width={600} height={400} src={project.coverImage} alt={project.name} className="my-4 w-full" />
            <h1 className="text-3xl font-bold my-4">{project.name}</h1>
            <p className="text-lg">{project.description}</p>
            {project.images && project.images[0] && (
                <Image width={600} height={400} src={project.images[0]} alt={project.name} className="my-4 w-full" />
            )}
            <p className="text-lg">{project.summary}</p>
            {
                project.images && project.images[1] && (
                    <Image width={600} height={400} src={project.images[1]} alt={project.name} className="my-4 w-full" />
                )
            }
            <p className="text-lg">{project.goal}</p>

            <hr className="my-8" />
            <div className="text-lg text-neutral-400">
                <strong>Preview: </strong> 
                <LinkPreview url={project.preview || ''} className="text-white hover:underline">
                    {project.preview}
                </LinkPreview>
            </div>

            <hr className="my-8" />
            <p className="text-lg text-neutral-400"><strong>Tech stack:</strong> {project.stack}</p>
        </div>

            </div>
        </section>

    </TracingBeam>
        <Footer />
    </>
  );
}
