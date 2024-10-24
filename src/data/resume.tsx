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
  avatarUrl: "",
  skills: [
   'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind Css', 'Git','github','JSON',"JWT",'OAuth',"Redux","webpack"
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      dates: "Jan 2024 - Feb 2024",
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
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],  
} as const;
