// Definimos el tipo de datos para nuestros proyectos
export interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  description2: string;
  description3: string;
  image: string;
}

// Exportamos un array de proyectos con el tipo definido
const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description:
      "A full-featured e-commerce platform with product listings, shopping cart, and checkout process.",
    description2:
      "A full-featured e-commerce platform with product listings, shopping cart, and checkout process.",
    description3:
      "A full-featured e-commerce platform with product listings, shopping cart, and checkout process.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    name: "Social Media Dashboard",
    slug: "social-media-dashboard",
    description:
      "A real-time social media dashboard that tracks metrics like engagement rates, user growth, and content performance.",
    description2:
      "A real-time social media dashboard that tracks metrics like engagement rates, user growth, and content performance.",
    description3:
      "A real-time social media dashboard that tracks metrics like engagement rates, user growth, and content performance.",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    name: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A personal portfolio website to showcase client skills, projects, and contact information.",
    description2:
      "A personal portfolio website to showcase client skills, projects, and contact information.",
    description3:
      "A personal portfolio website to showcase client skills, projects, and contact information.",
    image: "https://placehold.co/600x400",
  },
];

export default projects;