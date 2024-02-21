import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Front End Developer",
        company_name: "Apps Innovation Technologies",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "September 2021 - September 2023",
        points: [
            "Developed a dynamic web application with Next.js, React, and Nest.js, harnessing the power of Redis, OCR, and an AI scanner", 
            "Implemented a RESTful API with MongoDB, and ensured code quality with Redux and Jest. Utilized Material UI for a sleek user interface", 
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Reduced load times and introduced lazy loading in the front end by optimizing the Redux store structure and streamlining MongoDB queries",
        ],
    },
    {
        title: "Junior Front End Developer",
        company_name: "Information Evolution",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "January 2021 -September 2021 ",
        points: [
            "Built and managed an event booking application with a React front end and a Node.js back end.",
            "Optimized webpages for better performance and faster loading times",
            "Integrated third-party APIs to add additional features to the website"
        ],
    },
    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Charliethesage',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ruban-charles-aa1239165/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Scout',
        description: 'Developed a web application for the US Government that tracks, monitors, and displays information to officers and officer supervisors. This includes details such as keystrokes, messages, location, MMS, SMS, files, screenshots, screen captures, media, and documents from the phones of parolees and probation prisoners.',
        link: 'https://rcomscout.com/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: ' Naval-hydrography Social Media Application',
        description: 'Created a full-stack Social media application enabling users to post images/videos and engage in conversations.',
        link: 'https://github.com/Charliethesage/Naval-hydrography',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Fekki',
        description: 'Designed and built a Clothing brand web app for Fekki and intergrated Paymentgateway',
        link: 'https://fekkistore.com/collections/unisex',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://exequencedesigns.com',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link:'https://social-app-asaprogrammer.vercel.app/'
    },

    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Industry level weather App',
        description: 'AThis application integrates with weather service APIs to fetch real-time data, ensuring the information displayed is accurate and up-to-date',
        link: 'https://weather-forecast-ten-rust.vercel.app/',
    },
    
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        //link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
