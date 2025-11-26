import { FaDiscord, FaGithub, FaMapPin, FaLinkedin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Vanathi",
    },
    social: {
        github: "VanathiS06",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "HelpDesk - Ticket Tracking Application",
            description: `Implemented and monitored a full-stack IT support ticket tracking system to streamline issue reporting,
assignment, and resolution within corporate environments.`,
            image: "/projects/project-1.webp",
            technologies: [ `React.js`, `Node.js`,` Nest.js`, `PostgreSQL`, `TypeScript` ],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Eagle Tele Services - Case Management Application",
            description: `Built and supported the core case management platform powering Eagle Tele Services roadside assistance
operations`,            image: "/projects/project-2.webp",
            technologies: [`React.js`,`AWS-Lambda`, `Node.js`,` Express.js`, `PostgreSQL`, `javaScript`],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "DMS File Management System",
            description: `Built dashboards, search filters, and barcode integration for real-time stock visibility. 
            Implemented authentication and role-based permissions.`,
            image: "/projects/project-3.webp",
            technologies: [`React.js`, `Node.js`,` Express.js`, `PostgreSQL`, `TypeScript`],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "Warehouse Management System (WMS)",
            description:`Streamlined inventory tracking, order management, and supplier coordination. 
            Built dashboards, search filters, and barcode integration for real-time stock visibility.`,
            image: "/projects/project-4.webp",
            technologies: [`React.js`, `Node.js`,` Express.js`, `PostgreSQL`, `TypeScript`],
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            title: "Enginero - Building Management System",
            description: `Developed a centralized platform for managing building infrastructure, maintenance schedules, and tenant requests
            .Integrated real-time monitoring tools and automated alerts for system failures.`,
            image: "/projects/project-5.webp",
            technologies: [`React.js`, `Node.js`,` Express.js`, `PostgreSQL`, `TypeScript`],
            github: "#",
            demo: "#"
        }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "React", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "MUI", level: "Intermediate" }

            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Aws-Lambda", level: "Advanced", hot: true },
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "Express.js", level: "Advanced", hot: true },
                { name: "Nest.js", level: "Advanced", hot: true },
                { name: "TypeScript", level: "Intermediate", hot: true },
                { name: "PostgreSQL", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Intermediate", hot: false }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Swagger", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" ,hot: true },
                { name: "Git", level: "Advanced",hot: true  },
                { name: "SVN", level: "Advanced" },
                { name: "Jira", level: "Advanced" },
                { name: "MondayBoard", level: "Advanced",hot: true  }
            ]
        }
    ],
    experiences: [
        {
            position: "Junior Programmer Analyst",
            company: "SrinSoft Technologies Pvt Ltd",
            period: "2024 - Present",
            location: "chennai , India",
            description: "Developing modern, responsive applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web applications.",
            responsibilities: [
                "Developed scalable full-stack applications using React, NestJS, AWS Lambda, and PostgreSQL",
                "Designed and optimized RESTful APIs for high-performance backend systems.",
                "Led deployments and testing using Git, Swagger, and Postman",
                "Collaborated with cross-functional teams in Agile/Scrum environments",
                "Delivered 5+ client-facing web projects, boosting engagement and satisfaction",
                "Monitored and improved backend performance through query tuning and API enhancements"
            ],
            technologies: ["React", "Nest.js", "JavaScript", "AWS Lambda", "PostgreSQL"]
        },
        {
            position: "Trainee – Full Stack Developer",
            company: "SrinSoft Technologies Pvt Ltd",
            period: "2023 - 2024",
            location: "chennai , India",
            description: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
            responsibilities: [
                "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
                "Implemented RESTful APIs and integrated third-party services",
                "Built responsive user interfaces and optimized application performance",
                "Worked on database design and backend architecture"
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "TypeScript", "PERN Stack"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@vanathi",
            link: `https://github.com/VanathiS06`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "vanathee2015@gmail@gmail.com",
            link: "mailto:vanathee2015@gmail.com"
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "linkedin.com/in/vanathis",
            link: "https://www.linkedin.com/in/vanathis"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}