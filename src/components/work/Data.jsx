import Work0 from '../../assets/nycproj.avif'
import Work1 from '../../assets/aiproj.png'
import Work2 from '../../assets/mad.png'
import Work3 from '../../assets/uplay.png'
import Work4 from '../../assets/uxdesign.avif'
import Work5 from '../../assets/fsdp.avif'
import Work6 from '../../assets/appdev.avif'
import Work7 from '../../assets/webdev.avif'

export const projectsData = [
    {
        id: 1,
        image: Work0,
        title: "NYC EReg Project",
        category: "others",

        description:
            "Developed a RPA solution to automate NYC e-Registry processes, reducing manual work and improving efficiency.",

        points: [
            "Built an end-to-end automation workflow using UiPath.",
            "Automated document processing and file management.",
            "Implemented error handling for reliable execution.",
            "Used version control for collaborative development.",
        ],
    },
    {
        id: 2,
        image: Work1,
        title: "The Long Drive",
        category: "web",

        description:
            "An AI-powered transport management system that enhances operational efficiency, safety, and service reliability.",

        points: [
            "Developed a full-stack AI web application.",
            "Integrated machine learning and computer vision models.",
            "Designed an intuitive interface for real-time insights.",
        ],
    },
    {
        id: 3,
        image: Work2,
        title: "Movie Rater",
        category: "app",

        description:
            "A movie rating application developed using Kotlin to apply fundamental Android development concepts and UI design.",

        points: [
            "Built using Kotlin and Android Studio.",
            "Designed layouts and interactive UI components.",
            "Developed a functional movie rating system.",
        ],
    },
    {
        id: 4,
        image: Work3,
        title: "UPlay",
        category: "web",

        description:
            "A full-stack web application designed to enhance the UPlay user experience and improve sales.",

        points: [
            "Designed a modern and user-friendly interface.",
            "Built the frontend using React.",
            "Developed backend services using ASP.NET Core and Entity Framework.",
            "Developed interactive features to support user engagement.",
        ],
    },
    {
        id: 5,
        image: Work6,
        title: "RentCycle",
        category: "web",

        description:
            "A bicycle rental platform designed to promote convenient and sustainable transportation.",

        points: [
            "Developed a user-friendly bicycle rental website.",
            "Implemented account and booking management features.",
            "Integrated bicycle and station management.",
        ],
    },
    {
        id: 6,
        image: Work4,
        title: "Hotel N15",
        category: "web",

        description:
            "A web application designed to provide users with a convenient platform for exploring and booking hotel stays.",

        points: [
            "Developed a user-friendly hotel booking website.",
            "Implemented room browsing and booking features.",
            "Added account and reservation management.",
            "Designed an intuitive interface for a seamless user experience."
        ],
    },
    {
        id: 7,
        image: Work7,
        title: "GymFit",
        category: "web",

        description:
            "A web application designed to provide users with a convenient platform for managing their gym activities and memberships.",

        points: [
            "Developed a user-friendly gym website.",
            "Implemented membership and account management features.",
            "Added features for booking and managing gym activities.",
            "Designed an intuitive interface for a seamless user experience."
        ],
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'others',
    },
]