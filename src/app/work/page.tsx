import Projects from "@/components/Projects";
import projectsData from "@/data/projects";

// Usamos los datos importados del archivo JSON
const projects = projectsData;

export default function Work() {
  return (
    <div>
      <section id="contact" className="py-20 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          <div className="md:col-span-4">
            <h2 className="text-8xl font-bold tracking-tighter mb-8" style={{
              WebkitTextStroke: '2px white',
              WebkitTextFillColor: 'black'
            }}>Work</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Welcome to my portfolio. With <b>over 9 years of experience</b> as a <b>Full-Stack Developer</b>, I specialize in building <b>modern, responsive applications</b> and <b>dynamic digital experiences</b>. My projects showcase expertise in <b>ReactJS, Next.js, Node.js</b>, and comprehensive skills in <b>UI/UX design</b>, <b>API integration</b>, and <b>Agile development</b>. Explore how I deliver <b>scalable, customer-centric solutions</b> from concept to deployment.
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            {/* Right content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Projects key={project.id} {...project} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}