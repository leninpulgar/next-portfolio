// Definimos el tipo de datos para nuestros proyectos
export interface Project {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
  summary: string;
  goal: string;
  coverImage: string;
  images?: string[];
  preview?: string;
  stack: string;
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
    summary:
      "The website www.thezingg.com is a platform for an introspective vision created for Eglantina Zingg. The site features conversations, or what is described as 'uncomfortable truths, adventures, and learnings,' on a variety of diverse and interesting topics with a focus on honesty and authenticity. Visitors can listen to this content on platforms like YouTube and Spotify.",
    goal:
      "The main goal of The Zingg is to provide a space without taboos where all kinds of topics can be discussed. The content seeks to offer people the necessary tools to 'avoid being an idiot' and to encourage authenticity. The site also has a shop section for the sale of branded merchandise.",
    coverImage: "/covers/cover-zingg.png",
    images: ["/img/zingg-1.png", "/img/zingg-2.png"],
    stack: "Wordpress, PHP, HTML, CSS, JavasScript, WooCommerce.",
    preview: "https://www.thezingg.com/",
  },
  {
    id: 2,
    name: "Teslo Shop",
    slug: "teslo-shop",
    icon: "/logos/teslo.png",
    description:
      "This website is a practice e-commerce platform that functions as a product store. It features a product catalog, a shopping cart, and an integrated payment gateway. The site includes a login system to differentiate between regular customers and administrators.",
    summary:
      "The site's technical foundation is built on a modern stack, including Next.js and React for the core framework and frontend logic. The state management is handled with Zustand, while the styling is managed using Tailwind CSS. Prisma is used as the ORM to interact with a PostgreSQL database, and Cloudinary is integrated for hosting and managing product images. The payment processing is handled through an integrated PayPal gateway.",
    goal:
      "The purpose of this project is to showcase web development skills by building a comprehensive e-commerce application. Its goal is to demonstrate the ability to create a functional online store with distinct user roles, and to manage product, user, and order administration through a dedicated backend section.",
    coverImage: "/covers/cover-teslo.png",
    images: ["/img/teslo-1.png", "/img/teslo-2.png"],
    stack: "Next.js, Zustand, Tailwind, Prisma, React, PostgreSQL, Cloudinary",
    preview: "https://example-shop.vercel.app/",
  },
  {
    id: 3,
    name: "WIC Studio",
    slug: "wic-studio",
    icon: "/logos/wicstudio.png",
    description:
      "WIC Studio is a creative studio shaped by the most perceptive minds, gathered together into one team with the ultimate goal of making the impossible possible.",
    summary:
      "They support and expand any idea attached to different kinds of creative projects that will help them become tangible. Seeing each project as an opportunity to go beyond boundaries, drive for innovation, explore territories, and all forms of communication, allow them to craft ideas, concepts, and business solutions for people with innovative minds and those who dare to change the status quo.",
    goal:
      "The goal of the site was to have a space to showcase ideas and concepts to their clients.",
    coverImage: "/covers/cover-wic.png",
    images: ["/img/wic-1.png", "/img/wic-2.png"],
    stack: "Wordpress, PHP, MySQL, HTML, CSS, JavaScript.",
    preview: "https://www.wicstudio.com/",
  },
];

export default projects;