export const siteConfig = {
  name: "Alister David",
  title: "Aspiring Software Engineer",
  description: "Portfolio website of Alister David",
  accentColor: "#1d4ed8",
  social: {
    email: "alisterdavid03@gmail.com",
    linkedin: "https://linkedin.com/in/alisterdavid/",
    github: "https://github.com/alisterd1503",
  },
  cv: "/AlistersCV.pdf",
  aboutMe:
    "Adaptable and motivated aspiring software engineer with hands on experience in full stack development, real time systems, and data visualisation. Seeking a junior software or apprenticeship role to build on industry experience and contribute meaningfully to a development team.",
  skills: ["Javascript", "React", "Node.js", "Python", "Python", "Docker", "PostgreSQL", "Git"],
  projects: [
    {
      name: "Ripple - Chat App",
      description:
        "a secure real time chat app with end-to-end encryption, online presence, JWT auth, and a Node.js + PostgreSQL backend.",
      link: "https://ripple-chat.netlify.app/",
      skills: ["Typescript","React", "Node.js", "PostgreSQL"],
    },
    {
      name: "ADI Design Agency - Portfolio Website",
      description:
        "Developed a responsive portfolio website with HTML, CSS, and JavaScript to showcase creative media and enable client enquiries.",
      link: "https://adidesignagency.co.uk",
      skills: ["HTML", "CSS", "Javascript"],
    },
  ],
  experience: [
    {
      company: "Newmedica Private Eyeclinic",
      title: "Ophthalmic Theatre & Clinic Assistant",
      dateRange: "Nov 2024 - Present",
      bullets: [
        "Assist in surgeries including cataract, oculoplastics, and vitreoretinal procedures",  
        "Support pre-op and post-op care, theatre preparation, and patient discharge",
        "Perform OCT/autorefractor scans and scribe for consultants in diagnostic clinics",
        "Proficient in OpenEyes and CPM for clinical and admin workflow"
      ],
    },
    {
      company: "IQHQ - Defence & Security",
      title: "Apprentice Software Engineer",
      dateRange: "Oct 2023 - Oct 2024",
      bullets: [
        "Built export functionality for dashboard logs (SQL, Express.js, PostgreSQL)",
        "Integrated real time data capture for situational awareness device (React, WebSockets)",
        "Developed interactive data visualisation tools (HTML Canvas, Chart.js)",
        "Collaborated on full stack features in a secure, high-performance environment"
      ],
    },
  ],
  education: [
    {
      school: "Swansea University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2021 - 2023",
      achievements: [
        "Programming, Professional Issues, Concepts of Computer Science, Modelling, Computing Systems",
        "Events Co-ordinator Swansea Mallu Soc",
        "Sports Rep Swansea Asian Society",
        "Football, Badminton, Basketball, Chess",
      ],
    },
    {
      school: "Cheney School",
      degree: "Sixth Form",
      dateRange: "2019 - 2021",
      achievements: [
        "Computer Science, Biology, Physics",
        "School Football Team",
        "Coding Club",
      ],
    },
    {
      school: "Cheney School",
      degree: "GCSE",
      dateRange: "2014 - 2019",
      achievements: [
        "Physics, Biology, English Literature, Geography, Religious Studies, Computer Science, Chemistry, History, Maths, English Language",
        "5 A*, 4 A, 2 B",
        "School Football Team",
        "Badminton Club",
        "Completed Silver DofE"
      ],
    },
  ],
  certification: [
    {
      location: "Harvard University Online",
      qualification: "CS50x Course",
      dateRange: "2023 - 2024",
      summarys: [
        "Gained strong understanding of algorithms, data structures, and computational thinking",
        "Programmed in Python, C, and SQL, developing coding proficiency",
        "Built web development projects with HTML, CSS, and JavaScript",
        "Practiced debugging, testing, and version control, preparing for real world software projects",
      ],
    },
    {
      location: "University of Oxford, Department of Physics",
      qualification: "Flying Start Program",
      dateRange: "2019 - 2020",
      summarys: [
        "Explored advanced physics concepts beyond standard curriculum, enhancing analytical skills",
        "Attended weekly lectures and hands on sessions, practicing scientific reasoning",
        "Completed problem solving tasks requiring critical thinking and data analysis",
        "Built a strong foundation for STEM related learning and research approaches",
      ],
    },
    {
      location: "Oxford Scholastica",
      qualification: "Technology & Engineering Couse",
      dateRange: "2020 - 2020",
      summarys: [
        "Worked in international teams to design and build functional websites",
        "Learned to apply engineering and design principles to practical challenges",
        "Presented project outcomes to peers and mentors, improving communication and presentation skills",
        "Gained experience in collaboration, planning, and iterative problem solving",
      ],
    },
  ],
};
