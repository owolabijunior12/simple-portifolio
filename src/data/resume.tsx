import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Owolabi Destiny Oluwanifemi",
  initials: "IB",
  url: "https://iboytech123.vercel.app",
  location: "Surulere,Lagos, NG",
  locationLink: "https://www.google.com/maps/place/lagos",
  description:
    "Software Engineer || React Native Developer || Javascript Developer.",
  summary:
    "I'm a self-taught Software Developer based in Lagos, Nigeria. I have a passion for creating engaging and intuitive user experiences on the web. With over 2 year of experience in building, integrating, scaling, and supporting web applications, I have developed a strong skill set and a keen eye for detail. As a forward-thinking individual, I constantly strive for excellence in my work. I believe in pushing the boundaries of what is possible in web development, always seeking innovative solutions to deliver outstanding results. One of my key strengths is my ability to organize and manage projects effectively. I am adept at coordinating with team members and stakeholders to ensure smooth collaboration and successful project delivery. Additionally, my interpersonal skills enable me to communicate ideas clearly and work well in a team environment. Throughout my journey as a frontend developer, I have had the opportunity to work on various projects, honing my skills and keeping up with the latest industry trends. I am proficient in leveraging modern frameworks and technologies to create responsive, scalable, and visually appealing web applications. I invite you to explore my portfolio, where you will find examples of my work showcasing my attention to detail, creativity, and dedication to delivering exceptional user experiences. I am confident that my skills and experience will be valuable in any project I undertake.",
  avatarUrl: "/me.jpeg",
  skills: [
   'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind Css', 'Git','github','JSON',"JWT",'OAuth',"Redux","webpack"
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "owolabijunior12@gmail.com",
    tel: "+2348136652504",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/owolabijunior12",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://ng.linkedin.com/in/owolabi-destiny-oluwanifemi-231222265",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Iboytech123",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:owolabijunior12@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Rabah360",
      href: "https://rabah360.com/static/img/favicon.png",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "https://rabah360.com/static/img/favicon.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "Worked on a full stack project as the Frontend developer of a project called rabah for event management",
    },
    {
      company: "FIverr",
      badges: [],
      href: "https://images.app.goo.gl/AQgxQjRfw87kjmvM6",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/fiverr.png",
      start: "Jun 2023",
      end: "Present",
      description:
        "Designed, developed, and deployed fully responsive websites and web applications using MERN stack",
    },
    {
      company: "Instaskool Ltd",
      href: "https://Instaskool.com",
      badges: [],
      location: "Lagos, NG",
      title: "Web Developer",
      logoUrl: "/Instaskool-logo.webp",
      start: "Jan 2023",
      end: "Mar 2023",
      description:
        "Assisted in developing and maintaining responsive web applications using HTML, CSS, and JavaScript",
    },   
  ],
  education: [
    {
      school: "Olabisi Onabanjo University",
      href: "https://web.oouagoiwoye.edu.ng/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/oou.jpeg",
      start: "2024",
      end: "Present",
    },
    {
      school: "Yaba College of Technology",
      href: "https://www.yabatech.edu.ng/",
      degree: "Naional Diploma in Computer Science (OND)",
      logoUrl: "/yabatech.jpeg",
      start: "2021",
      end: "2023",
    },
   
  ],
  projects: [
    {
      title: "Rabah360",
      href: "https://rabah360.com",
      dates: "Aug 2024 - Sept 2024",
      active: true,
      description:
        "Worked on the frontend ",
      technologies: [
        "Html5",
        "Css",
        "Javascript"
      ],
      links: [
        {
          type: "Website",
          href: "https://rabah360.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Rabah360 .png",
      video:
        "",
    },
    {
      title: "Rock Paper Scissor GAme",
      href: "https://iboytech-game-rps.vercel.app/",
      dates: "June 2023 - Sept 2023",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "React.js",        
        "Css",
        "Socket.io",
        "Nodejs",
        "Expressjs",        
      ],
      links: [
        {
          type: "Website",
          href: "https://iboytech-game-rps.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/owolabijunior12/Rock-papper-scissors-game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rps-game-project.png",
      video: "",
    },
    {
      title: "Music Web App",
      href: "https://iboytech-music-app.vercel.app/",
      dates: "Jan 2023 - Mar 2023",
      active: true,
      description:
        "",
      technologies: [
        "React.js",
        "Typescript",
        "mongoDb",        
        "TailwindCSS",
        "Nodejs",
        "firebase",
        "Expressjs",
        "Jwt",
        "OAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://iboytech-music-app.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/owolabijunior12/mern-stack-ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Iboytech Music App.png",
      video: "",
    },
    {
      title: "E-commerce",
      href: "https://iboytech-e-commerce.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "",
      technologies: [
        "React.js",       
        "TailwindCSS",
        "Jwt",
        "OAuth",      
        "MongoDb",
        "framer-motion",
        "react-toastify",
        "Expressjs",
        "Paystack",
        "Firebase",
        "Nodejs",
      ],
      links: [
        {
          type: "Website",
          href: "https://iboytech-e-commerce.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/owolabijunior12/mern-stack-ecommerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Iboytech Music App - Google Chrome 10_25_2024 10_01_05 AM.png",
      video:
        "",
    },
  ],  
} as const;
