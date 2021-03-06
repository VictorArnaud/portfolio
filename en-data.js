let en = {
    ...generic_info,
    updated_at: "Updated March 05, 2021",
    age: "27 years old",
    course: "Software engineer",
    address: "Brasilia - DF, Brazil",
    site_info: {
        information_navbar: "Information",
        skills_navbar: "Skills",
        projects_navbar: "Projects",
        experience_navbar: "Experience",
        knowledge_graph_navbar: "Knowledge Graph",
        language_icon: "img/br.png",
        who_title: "Who am I?",
        certificate: "Certificates",
        skills_title: "Current Skills",
        skills_description: "Levels of knowledge.",
        projects_title: "Projects",
        projects_description: "My most recent personal and open source projects.",
        experience_title: "Experience",
        experience_description: "Experiences based on personal projects, work in research laboratories, companies, startups, freelances and volunteer work.",
        graph_title: "Knowledge Graph",
        graph_description: "Graph of knowledge and technologies.",
        footer_thanks: "Thanks for visiting my website!",
        footer_question: "Do you have any questions or offers? You can contact me by sending an email to",
        footer_link: "Made by"
    },
    description: [
        `
            Software engineering student at the University of Brasília.
        `,
        `
            Knowledge in requirements analysis, process modeling, software quality, project management using
            agile methodology, work with mobile and web development with emphasis on python and javascript technologies
            that I would like to specialize, always aiming at best practices for software development. I have no problem
            learning new technologies if needed. I strive to improve my knowledge for better results and to ensure the
            quality of the product.
        `,
        `
            I always try to work as a team, with great satisfaction in teaching and learning any knowledge, helping to
            generate solutions for the company, meeting the objectives in the area in which it is assigned, also seeking
            professional development.
        `,
        `
            I am proactive, communicative, focused and punctual, I adapt to different routines and face any challenge as
            a great opportunity to develop my knowledge and always achieve positive results, I seek to understand what I
            did wrong and what I can improve, I look for a company that Allow for my intellectual and technical growth,
            so I can contribute to it for a long time as we grow together.
        `
    ],
    skills: {
        ...generic_skills,
        language: [
            {label: "English", junior: "33", pleno: "27", senior: ""},
            {label: "Portuguese", junior: "33", pleno: "33", senior: "25"},
            {label: "Spanish", junior: "20", pleno: "", senior: ""}
        ],
        others: [
            {label: "Software Engineering", junior: "33", pleno: "33", senior: "20"},
            {label: "Automated Testing", junior: "33", pleno: "33", senior: "2"},
            {label: "DevOps", junior: "33", pleno: "25", senior: ""},
        ]
    },
    projects: [
        {
            id: "vwapp",
            title: "VWApp",
            tecnology: "Flask + React",
            link: "https://www.vwapp.com.br/",
            description: `
                VWApp is a personal online task management platform, for example, storage of summaries and mind maps by wiki, home bills management,
                liability management, investment portfolio management, etc. This platform is initially being developed for personal use, but will
                soon be made available to the public.
            `
        },
        {
            id: "notebook",
            title: "Jupyter Notebook",
            tecnology: "Python",
            link: "https://github.com/VictorDeon/python-notebook",
            description: `Here are several summaries of python algorithms that I have learned over time.`
        },
        {
            id: "pgtbl",
            title: "PGTBL - Team Based Learning Management Platform",
            tecnology: "Django",
            link: "https://github.com/VictorDeon/PGTBL",
            description: `
                PGTBL is a platform to manage and apply the Team-based learning or TBL methodology
                that is a collaborative learning teaching strategy that focuses on a three-step cycle:
                Preparation, Class evaluations and Small project focused on the application
            `
        },
        {
            id: "softeng",
            title: "SoftEng - Software Engineering Ontology",
            tecnology: "Django",
            link: "https://github.com/VWApplications/SoftEng",
            description: `Software Engineering Ontology app to create pedagogical course project`
        },
        {
            id: "sdcurve",
            title: "SDCurve - Down Syndrome Growth Curves Microservice",
            tecnology: "Django Rest Framework",
            link: "https://github.com/VWApplications/sdcurve",
            description: `Microservice of growth curve, height, weight, EMC and cephalic perimeter for children with Down Syndrome`
        },
        {
            id: "drdown",
            title: "Dr-Down - System directed to assist the care of people with Down Syndrome",
            tecnology: "Django Rest Framework",
            link: "https://github.com/fga-eps-mds/2018.1-Dr-Down",
            description: `
                Information tool and union of people living with Down Syndrome. Dr. Down is a system aimed
                at assisting the care of people with Down Syndrome currently performed by the Regional Hospital
                of Asa Norte, located in Brasilia - DF, in a specialized treatment center called Cris Down.
            `
        },
        {
            id: "pigeon",
            title: "Pigeon - Intermediate of RabbitMQ services",
            tecnology: "Python",
            link: "https://github.com/VWApplications/Pigeon",
            description: `
                Pigeon is a framework developed in python that was made to intermediate the use of RabbitMQ
                services in a quick and easy way, these services of communication between components/services
                through different types of context of exchange of messages
            `
        },
        {
            id: "smartway",
            title: "SMARTWAY - Smart cane app",
            tecnology: "React Native",
            link: "https://github.com/pi2-fga/201901-SmartWay-Aplicativo",
            description: "Intelligent walking stick application with crosswalk detection using convolutional neural networks and more."
        },
        {
            id: "crosswalk",
            title: "Crosswalk Detector",
            tecnology: "Python",
            link: "https://github.com/VWApplications/Crosswalk-Detector",
            description: "Crosswalk detection using convolutional neural networks training."
        }
    ],
    experience: [
        {
            company: "ZAPAY",
            position: "Software engineer",
            time: "Current",
            description: [
                `
                    Zapay is a Fintech that enables the settlement of debts and taxes through
                    the use of credit card in installments up to 12X. In addition, the company
                    also has customized payment and penalty management solutions for the automotive
                    sector, which already covers 84% of the national fleet.
                `
            ]
        },
        {
            company: "PetGuard",
            position: "CTO",
            time: "2020",
            description: [
                `
                PetGuard aims to take care of those who teach love, it's a new startup focused on the pet market, being more
                specific to the Pet Care area. And aims helping ONGs throughout Brazil!
                `
            ]
        },
        {
            company: "Information Technology Research and Application Center (ITRAC)",
            position: "Full-Stack Developer Leader",
            time: "2018 - 2019",
            description: [
                `
                    Development of a tool to cost government services before and after digital transformation
                    to Ministry of planning using technologies like Spring Boot and Angular 6 and worked in the
                    area devops for some time creating the pipeline of continuous integration and continuous
                    deploy of software.
                `
            ]
        },
        {
            company: "Embrapa",
            position: "Hackathon",
            time: "2016",
            description: [
                `
                    Certificate of participation of the first Hackathon of the company Embrapa, a Brazilian company
                    of agricultural research, developing a solution within the theme: Integrated pest management for
                    the sustainability of agroecosystems, being among the top 8 of the competition.
                `
            ]
        },
        {
            company: "Advanced Laboratory of production, research and innovation in software (LAPPIS)",
            position: "Python Full-Stack Developer",
            time: "2016 - 2017",
            description: [
                `
                    Lappis is a laboratory of the campus of engineering of the gama that takes care mainly of
                    maintenance and evolution of free software. I worked in the software maintenance and evolution
                    team, Gestorpsi, in the back-end and front-end, improving my knowledge in Django, using agile
                    methodologies such as Scrum and XP.
                `
            ]
        },
        {
            company: "UnB",
            position: "Volunteer Works",
            time: "2014 - 2019",
            description: [
                `
                    <b>Student Mentor (2018)</b>: Mentor in the discipline software metering and analysis in the university
                    of brasilia, campus of engineering UnB-Gama.
                `,
                `
                    <b>Student Mentor (2018)</b>: Mentor in the discipline Software Testing and Software Development Methodology
                    in the university of brasilia, campus of engineering UnB-Gama
                `,
                `
                    <b>Student Mentor (2017)</b>: Mentor in the discipline APC - Programming algorithms for computers in the
                    university of brasilia, campus of engineering UnB-Gama
                `,
                `
                    <b>Student Mentor (2016)</b>: Basic Computer Monitoring in which it helps the students of the discipline to
                    program in the C language
                `,
                `
                    <b>Taekwondo Teacher (2014 - 2017)</b>: Teacher of taekwondo, black belt 1 ° dan at the university of brasília
                    on the campus of engineering of the gama, project culture and leisure.
                `,
                `
                    <b>Sports and Events (2014 - 2015)</b>: I helped DA to organize university sports and events in the university
                    of brasilia, campus of engineering UnB-Gama.
                `
            ]
        }
    ]
}