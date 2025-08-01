import { lazy, Suspense } from "react";
const LazyWrapper = lazy(() => import("@/components/LazyWrapper"));
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import projectsData from "@/data/projects"; // ajusta el path según tu estructura
import Image from "next/image";
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
    <>
    <TracingBeam className="px-6">
        <section id="contact" className="py-20 px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

                <div className="py-8 mx-auto text-white md:col-span-3">
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
                

        <div className="p-8 max-w-3xl mx-auto text-white md:col-span-9">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <p className="text-lg">{project.description}</p>

            
            <Image width={600} height={400} src={project.image} alt={project.name} className="my-4 w-full" />
            <p className="text-lg">{project.description}</p>
            <Image width={600} height={400} src={project.image} alt={project.name} className="my-4 w-full" />
            <p className="text-lg">{project.description2}</p>
            <Image width={600} height={400} src={project.image} alt={project.name} className="my-4 w-full" />
            <p className="text-lg">{project.description3}</p>
        </div>

            </div>
        </section>

    </TracingBeam>
        <Footer />
    </>
  );
}
