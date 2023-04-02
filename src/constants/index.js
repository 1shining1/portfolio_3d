import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "UX / UI Developer",
        icon: web,
    },
    {
        title: "React.js Developer",
        icon: mobile,
    },
    {
        title: "Python Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },

    {
        title: "Frontend Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "APR 2019 - May 2021",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Customer Service",
        company_name: "Restaurants in Australia",
        icon: shopify,
        iconBg: "#383E56",
        date: "Feb 2016 - Mar 2018",
        points: [
            "Managed inventory levels by monitoring stock levels and placing orders for products when needed.",
            "Handled cash, credit, and debit transactions for customers in a fast-paced environment.",
            "Counted and balanced cash drawers at the beginning and end of each shift.",
            "Took orders and served food and beverages to customers in a busy restaurant environment.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Cheonga does.",
        name: "Salvatore DePalma",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
        testimonial: "Good Good.",
        name: "Bomi Kim",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        testimonial: "Perfect!",
        name: "Yuna",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
];

const projects = [
    {
        name: "Pohang City Hall",
        description:
            "Created and maintained responsive websites for various organizations in Pohang City, including foreign language versions of city hall, the mayor's official website, the Agricultural Technology Center, etc.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Handong Global University",
        description:
            "Created mobile and web applications for Handong Global University's attendance system.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Yonsei University Severance Hospital",
        description:
            "Created a hospital reservation application using Bootstrap.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
