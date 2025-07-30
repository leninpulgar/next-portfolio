import Projects from "@/components/Projects";



const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, shopping cart, and checkout process.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Social Media Dashboard",
    description:
      "A real-time social media dashboard that tracks metrics like engagement rates, user growth, and content performance.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "A personal portfolio website to showcase clien skills, projects, and contact information.",
    image: "https://placehold.co/600x400",
  },
];

export default function Work() {
  return (
    <div>
      <section id="contact" className="py-20 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-8xl font-bold tracking-tighter mb-8" style={{
              WebkitTextStroke: '2px white',
              WebkitTextFillColor: 'black'
            }}>Work</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Welcome to my portfolio of web development work. I specialize in creating modern, responsive web applications and websites using cutting-edge technologies. From interactive single-page applications to dynamic business websites, my projects demonstrate a commitment to clean code, intuitive user experiences, and innovative solutions that help businesses thrive in the digital space.
              </p>
            </div>
          </div>
          <div>
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