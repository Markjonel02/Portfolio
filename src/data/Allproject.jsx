import pandora from "../assets/images/pandora.png";
import strix from "../assets/images/strix.png";
import sweetpaw from "../assets/images/sweetpaw.png";
import freelance from "../assets/images/Freelance.png";
import ltd from "../assets/images/Love to dream.png";
import library from "../assets/images/library.png";
import ndd from "../assets/images/ndd.png";
import mamas from "../assets/images/mamas.png";
import wonderhome from "../assets/images/wonderhome.png";
import Bsi from "../assets/images/Bullseye.png";
import tlous from "../assets/images/Last of us 2.png";
import note from "../assets/images/Note Application1.png";
import hris from "../assets/images/HRIS.jpg";
const websites = (category, date, title, image, links, path, desc, stacks) => {
  return {
    category,
    date,
    title,
    image,
    links,
    comments: "No Comments",
    path,
    desc,
    stacks: stacks || [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chakra UI",
      "Tailwind CSS",
    ],
  };
};

export const posts = [
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/",
    "/pandora",
    "> Pandora’s Treasure – Skincare Ecommerce Website > I built this site as a full-featured ecommerce platform for skincare products, combining speed, clarity, and responsiveness. It’s powered by React and Vite for a smooth user experience, with dynamic product listings and optimized navigation. I implemented responsive design across breakpoints, and the layout adapts cleanly from desktop to mobile.",
    ["React", "Chakra UI", "Vercel", "Swiper.js", "Tailwind CSS", "Gsap"]
  ),
  websites(
    "WEB",
    "jul 8, 2024",
    "Freelance site",
    freelance,
    "https://projecthub-realtimechat.web.app/",
    "/freelance",
    "> Freelance Site > A platform designed for freelancers to showcase their work and connect with clients. Built with React and Firebase, it features real-time chat functionality, user authentication, and a responsive design.",
    [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Swiper.js",
      "Gsap",
      "Framer Motion",
      "Vite",
    ]
  ),
  websites(
    "WEB",
    "Aug 12, 2023",
    "Sweet Paw",
    sweetpaw,
    "https://sweetpaw.netlify.app/",
    "/sweetpaw",
    "> Sweet Paw > An online store for pet products, built with a focus on user experience and performance. The site features a clean design, intuitive navigation, and a seamless checkout process.",
    ["Html", "Css", "Javascript", "Swiper.js", "netlify"]
  ),
  websites(
    "WEB",
    "May 5, 2025",
    "The Last of Us",
    tlous,
    "https://the-last-of-us-5n1j.vercel.app/",
    "/the-last-of-us",
    "> The Last of Us > A fan-made tribute to the iconic game, showcasing its stunning visuals and emotional storytelling. Built with React and Vite, this project emphasizes performance and user engagement.",
    ["React", "Chakra UI", "Vercel", "Swiper.js", "Framer Motion", "Gsap"]
  ),
  websites(
    "WEB",
    "Dec 23, 2023",
    "Movie Strix",
    strix,
    "https://strix-virid.vercel.app/",
    "/strix",
    "> Movie Strix > A movie discovery platform that allows users to explore and find information about their favorite films. Built with React and Vite, it features a responsive design and dynamic content loading.",
    [
      "React",
      "Bootstrap 5 ",
      "Vercel",
      "Swiper.js",
      "Framer Motion",
      "Gsap",
      "Typescript",
      "axios",
    ]
  ),
  websites(
    "WEB",
    "Dec 12, 2024",
    "Online-Library",
    library,
    "https://online-library-phi.vercel.app/",
    "/online-library",
    "> Online Library > A digital library platform that allows users to browse and borrow books online. Built with React and Vite, it features a user-friendly interface and efficient book management.",
    ["Php", "Html", "Css", "Javascript", "Swiper.js", "Jquery"]
  ),

  websites(
    "WEB",
    "jul 10, 2022",
    "Ndd Tech",
    ndd,
    "https://nddtech.netlify.app/",
    "/ndd-tech",
    "> Ndd Tech > A technology blog that provides insights and news about the latest trends in  technology. Built with React and Vite, it features a clean design and easy navigation.",
    ["React", "HTML", "CSS", "Javascript", "Swiper.js", "netlify"]
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Note Application",
    note,
    "https://nodejs-mongodb-client.onrender.com",
    "/note-application",
    "> Note Application > A web application for managing notes, built with Node.js and MongoDB. It features user authentication, note creation, and a responsive design.",
    ["Node.js", "MongoDB", "Express", "react", "vite", "Postman"]
  ),
  websites(
    "WEB",
    "june 5, 2024",
    "Human Resource Information System",
    hris,
    "N/a",
    "/hris",
    "> Human Resource Management System (HRMS) is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and secured using JWT authentication. Designed for scalability and team collaboration, it streamlines core HR operations including employee management, shift scheduling, announcements, and performance tracking. The system features a modern dashboard with real-time KPIs, role-based access control, and modular components for attendance, internal messaging, and document management. Ideal for startups and growing teams, this HRMS is optimized for GitHub deployment and future PDF export.",
    [
      "Node.js",
      "MongoDB",
      "Express",
      "react",
      "vite",
      "Postman",
      "Chakra UI",
      "JWT",
      "nodemailer",
      "pdf-lib",
      "GitHub",
    ]
  ),
  websites(
    "WORDPRESS",
    "Aug 22, 2024",
    "Love To Dream",
    ltd,
    "https://lovetodream.ph/",
    "/love-to-dream",
    "> Love To Dream > A WordPress site for a sleepwear brand, showcasing their products and brand story. The site features a clean design, easy navigation, and a focus on user experience.",
    [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "PHP",
      "MySQL",
      "CSS",
      "HTML",
      "JavaScript",
      "aos",
      "Swiper.js",
      "Yoast SEO",
    ]
  ),
  websites(
    "WORDPRESS",
    "Aug 22, 2024",
    "Mamas & Papas",
    mamas,
    "https://mamasandpapas.ph/",
    "/mamas-and-papas",
    "> Mamas & Papas > A WordPress site for a parenting brand, featuring their products and parenting tips. The site is built with a focus on user experience, featuring a clean design and easy navigation.",
    [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "PHP",
      "MySQL",
      "CSS",
      "HTML",
      "JavaScript",
      "aos",
      "Swiper.js",
      "Yoast SEO",
    ]
  ),
  websites(
    "WORDPRESS",
    "Aug 22, 2024",
    "Wonderhome Naturals",
    wonderhome,
    "https://wonderhomenaturals.com/",
    "/wonderhome",
    "> Wonderhome Naturals > A WordPress site for a natural skincare brand, showcasing their products and brand philosophy. The site features a clean design, easy navigation, and a focus on user experience.",
    [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "PHP",
      "MySQL",
      "CSS",
      "HTML",
      "JavaScript",
      "aos",
      "Swiper.js",
      "Yoast SEO",
    ]
  ),
  websites(
    "WORDPRESS",
    "Aug 22, 2024",
    "Bullseye Solutions Inc.",
    Bsi,
    "https://bullseyeph.com/",
    "/bullseye",
    "> Bullseye Solutions Inc. > A WordPress site for a technology solutions provider, showcasing their services and expertise. The site features a modern design, easy navigation, and a focus on user experience.",
    [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "PHP",
      "MySQL",
      "CSS",
      "HTML",
      "JavaScript",
      "aos",
      "Swiper.js",
      "Yoast SEO",
    ]
  ),

  /*
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ),
  websites(
    "WEB",
    "May 5, 2024",
    "Pandora",
    pandora,
    "https://padoras-s-treasure.vercel.app/"
  ), */
];
