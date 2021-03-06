let br = {
    ...generic_info,
    updated_at: "Atualizado em 05 de março de 2021",
    age: "27 anos",
    course: "Engenheiro de Software",
    address: "Brasília - DF, Brasil",
    site_info: {
        information_navbar: "Informações",
        skills_navbar: "Habilidades",
        projects_navbar: "Projetos",
        experience_navbar: "Experiências",
        knowledge_graph_navbar: "Gráfo de Conhecimento",
        language_icon: "img/eua.png",
        who_title: "Quem sou eu?",
        certificate: "Certificados",
        skills_title: "Habilidades Atuais",
        skills_description: "Níveis de conhecimento.",
        projects_title: "Projetos",
        projects_description: "Meus projetos pessoais e de código aberto mais recentes.",
        experience_title: "Experiências",
        experience_description: `
            Experiências baseadas em projetos pessoais, trabalhos em laboratórios de pesquisa, empresas, startups,
            freelancers e trabalhos voluntários.
        `,
        graph_title: "Grafo de Conhecimento",
        graph_description: "Grafo de conhecimentos atuais e tecnologias interligadas.",
        footer_thanks: "Obrigado por visitar meu site!",
        footer_question: "Você tem alguma pergunta ou oferta? Você pode entrar em contato comigo enviando um email para",
        footer_link: "Feito por"
    },
    description: [
        `
            Estudante de engenharia de software na Universidade de Brasília.
        `,
        `
            Conhecimento em análise de requisitos, modelagem de processos, qualidade de software, gerenciamento de projetos
            utilizando metodologias ágeis, trabalho com desenvolvimento mobile e web, com ênfase nas tecnologias python e javascript
            na qual gostaria de me especializar, sempre buscando as melhores práticas para o desenvolvimento de software. Não tenho
            problemas em aprender novas tecnologias, se necessário. Esforço-me por aprimorar meus conhecimentos para obter melhores
            resultados e garantir a qualidade do produto.
        `,
        `
            Procuro sempre trabalhar em equipe, com grande satisfação em ensinar e aprender qualquer conhecimento, ajudando a gerar
            soluções para a empresa, atendendo aos objetivos da área em que está inserida, buscando também o desenvolvimento profissional.
        `,
        `
            Sou proativo, comunicativo, focado e pontual, me adapto a diferentes rotinas e enfrento qualquer desafio como uma grande oportunidade
            para desenvolver meus conhecimentos e sempre alcançar resultados positivos, procuro entender o que fiz de errado e o que posso melhorar,
            procuro uma empresa que permite o meu crescimento intelectual e técnico, para que eu possa contribuir por um longo tempo à medida que
            crescemos juntos.
        `
    ],
    skills: {
        linguagens_de_programação: [
            ...generic_skills.programming_language
        ],
        frameworks: [
            ...generic_skills.frameworks
        ],
        ferramentas: [
            ...generic_skills.tools
        ],
        idiomas: [
            {label: "Inglês", junior: "33", pleno: "27", senior: ""},
            {label: "Português", junior: "33", pleno: "33", senior: "25"},
            {label: "Espanhol", junior: "20", pleno: "", senior: ""}
        ],
        outros: [
            {label: "Engenharia de Software", junior: "33", pleno: "33", senior: "2"},
            {label: "Testes Automatizados", junior: "33", pleno: "33", senior: "2"},
            {label: "DevOps", junior: "33", pleno: "25", senior: ""}
        ]
    },
    projects: [
        {
            id: "vwapp",
            title: "VWApp",
            tecnology: "Flask + React",
            link: "https://www.vwapp.com.br/",
            description: `
                O VWApp é uma plataforma pessoal de gerenciamento de tarefas online, por exemplo, armazenamento de resumos e mapas mentais via wiki,
                gestão de contas da casa, gestão de gastos, gerenciamento de carteira de investimento e etc. Essa plataforma inicialmente está
                sendo desenvolvida para uso pessoal, porém em breve será disponibilizada para o público.
            `
        },
        {
            id: "notebook",
            title: "Jupyter Notebook",
            tecnology: "Python",
            link: "https://github.com/VictorDeon/python-notebook",
            description: `Aqui tem vários resumos de algorítmos em python que aprendi ao longo do tempo.`
        },
        {
            id: "pgtbl",
            title: "PGTBL - Plataforma de Gerenciamento de Team Based Learning",
            tecnology: "Django",
            link: "https://github.com/VictorDeon/PGTBL",
            description: `
                O PGTBL é uma plataforma para gerenciar e aplicar a metodologia de aprendizagem baseada em equipe ou TBL,
                que é uma estratégia de ensino de aprendizagem colaborativa que se concentra em um ciclo de três etapas:
                preparação, avaliação de aulas e pequeno projeto focado na aplicação.
            `
        },
        {
            id: "softeng",
            title: "SoftEng - Ontologia para cursos de engenharia de software",
            tecnology: "Django",
            link: "https://github.com/VWApplications/SoftEng",
            description: `Aplicativo criado em uma disciplina de engenharia de software com ênfase em ontologias para criar projeto de curso pedagógico.`
        },
        {
            id: "sdcurve",
            title: "SDCurve - Microsserviço para curvas de crescimento de síndrome de Down",
            tecnology: "Django Rest Framework",
            link: "https://github.com/VWApplications/sdcurve",
            description: `Microsserviço de curva de crescimento, altura, peso, EMC e perímetro cefálico para crianças com Síndrome de Down.`
        },
        {
            id: "drdown",
            title: "Dr-Down - Sistema direcionado ao atendimento de pessoas com Síndrome de Down",
            tecnology: "Django Rest Framework",
            link: "https://github.com/fga-eps-mds/2018.1-Dr-Down",
            description: `
                O Dr. Down é um sistema voltado para o atendimento de pessoas com Síndrome de Down, atualmente atendidas pelo
                Hospital Regional da Asa Norte, localizado em Brasília - DF, em um centro de tratamento especializado denominado Cris Down.
            `
        },
        {
            id: "pigeon",
            title: "Pigeon - Intermediário dos serviços do RabbitMQ",
            tecnology: "Python",
            link: "https://github.com/VWApplications/Pigeon",
            description: `
                O Pigeon é um framework desenvolvido em python que foi feito para intermediar o uso dos serviços RabbitMQ de maneira rápida
                e fácil, serviços de comunicação entre componentes/serviços através de diferentes tipos de contexto de troca de mensagens.
            `
        },
        {
            id: "smartway",
            title: "SMARTWAY - Aplicativo para portadores de deficiência visual.",
            tecnology: "React Native",
            link: "https://github.com/pi2-fga/201901-SmartWay-Aplicativo",
            description: "Aplicação inteligente acoplada a uma bengala com detecção de faixa de pedestres usando redes neurais convolucionais e muito mais..."
        },
        {
            id: "crosswalk",
            title: "Detector de Faixa de pedestre",
            tecnology: "Python",
            link: "https://github.com/VWApplications/Crosswalk-Detector",
            description: "Detecção de faixa de pedestres usando treinamento em redes neurais convolucionais."
        }
    ],
    experience: [
        {
            company: "ZAPAY",
            position: "Engenheiro de Software",
            time: "Atualmente",
            description: [
                `
                    Zapay é um Fintech que permite a quitação de dívidas e impostos através do uso de cartão de crédito em parcelas de até 12X.
                    Além disso, a empresa também personalizou soluções de pagamento e gerenciamento de multas para o setor automotivo, que já
                    cobre 84% da frota nacional.
                `
            ]
        },
        {
            company: "PetGuard",
            position: "CTO",
            time: "2020",
            description: [
                `
                    PetGuard tem como objetivo cuidar de quem ensina o amor, ou seja, é uma startup nova voltado ao mercado pet, sendo
                    mais especifico para a área de Pet Care. Além de ajudar financeiramente ONGs por todo o Brasil!
                `
            ]
        },
        {
            company: "Information Technology Research and Application Center (ITRAC)",
            position: "Desenvolvedor Líder Full-Stack",
            time: "2018 - 2019",
            description: [
                `
                    Desenvolvimento de uma ferramenta para custear os serviços do governo antes e depois da transformação digital
                    para o Ministério do planejamento usando tecnologias como Spring Boot e Angular 6 e trabalhei na área de devops
                    por algum tempo, criando o pipeline de integração contínua e implantação contínua de software.
                `
            ]
        },
        {
            company: "Embrapa",
            position: "Hackathon",
            time: "2016",
            description: [
                `
                    Certificado de participação do primeiro Hackathon da empresa Embrapa, empresa brasileira de pesquisa agrícola,
                    desenvolvendo uma solução dentro do tema: Manejo integrado de pragas para a sustentabilidade dos agroecossistemas,
                    estando entre os 8 primeiros da competição.
                `
            ]
        },
        {
            company: "Advanced Laboratory of production, research and innovation in software (LAPPIS)",
            position: "Desenvolvedor Full-Stack",
            time: "2016 - 2017",
            description: [
                `
                    Lappis é um laboratório do campus de engenharia da gama que cuida principalmente da manutenção e evolução do
                    software livre. Trabalhei na equipe de manutenção e evolução de software, Gestorpsi, no back-end e front-end,
                    aprimorando meus conhecimentos em Django, utilizando metodologias ágeis como Scrum e XP.
                `
            ]
        },
        {
            company: "UnB",
            position: "Trabalhos Voluntários",
            time: "2014 - 2019",
            description: [
                `
                    <b>Monitoria (2018)</b>: Mentor na disciplina de medição e análise de software na universidade de brasilia,
                    campus de engenharia da UnB-Gama.
                `,
                `
                    <b>Monitoria (2018)</b>: Mentor na disciplina Teste de Software e Metodologia de Desenvolvimento de Software na universidade de brasilia,
                    campus de engenharia UnB-Gama.
                `,
                `
                    <b>Monitoria (2017)</b>: Mentor na disciplina APC - Algoritmos de programação para computadores na universidade de brasilia,
                    campus de engenharia UnB-Gama.
                `,
                `
                    <b>Monitoria (2016)</b>: Mentor na disciplina de Computação Básica Basic ajudando os estudantes a aprenderam lógica de programação
                    na linguagem C.
                `,
                `
                    <b>Professor de Taekwondo (2014 - 2017)</b>: Professor de taekwondo, faixa preta 1 ° dan da universidade de brasília, no campus de
                    engenharia da gama, projeto cultura e lazer.
                `,
                `
                    <b>Esportes e Eventos (2014 - 2015)</b>: Ajudei o diretório acadêmico a organizar esportes e eventos universitários na universidade de brasilia,
                    campus de engenharia da UnB-Gama.
                `
            ]
        }
    ]
}