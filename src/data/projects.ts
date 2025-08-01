// Definimos el tipo de datos para nuestros proyectos
export interface Project {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
  description2: string;
  description3: string;
  image: string;
}

// Exportamos un array de proyectos con el tipo definido
const projects: Project[] = [
  {
    id: 1,
    name: "the Zingg",
    slug: "the-zingg",
    icon: "/logos/zingg.png",
    description:
      "Eglantina Zingg is a venezuelan influencer, she was born in the Amazonas and then move on to Miami to pursue her career in the entertainment business as a host.",
    description2:
      "A full-featured e-commerce platform with product listings, shopping cart, and checkout process.",
    description3:
      "A full-featured e-commerce platform with product listings, shopping cart, and checkout process.",
    image: "/covers/cover-zingg.png",
  },
  {
    id: 2,
    name: "Social Media Dashboard",
    slug: "social-media-dashboard",
    icon: "https://picsum.photos/300/200",
    description:
      "A real-time social media dashboard that tracks metrics like engagement rates, user growth, and content performance.",
    description2:
      "A real-time social media dashboard that tracks metrics like engagement rates, user growth, and content performance.",
    description3:
      "A real-time social media dashboard that tracks metrics like engagement rates, user growth, and content performance.",
    image: "https://picsum.photos/600/400",
  },
  {
    id: 3,
    name: "Portfolio Website",
    slug: "portfolio-website",
    icon: "https://picsum.photos/300/200",
    description:
      "A personal portfolio website to showcase client skills, projects, and contact information.",
    description2:
      "A personal portfolio website to showcase client skills, projects, and contact information.",
    description3:
      "A personal portfolio website to showcase client skills, projects, and contact information.",
    image: "https://picsum.photos/600/400",
  },
];

export default projects;