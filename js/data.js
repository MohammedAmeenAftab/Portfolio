/* ============================================================
   PORTFOLIO DATA
   ------------------------------------------------------------
   Edit everything here. The rest of the site reads from this
   single object and renders itself — you never need to touch
   index.html to update your content.
   ============================================================ */

const PORTFOLIO_DATA = {

  /* ---------- SITE / THEME ---------- */
  site: {
    title: "Mohammed Ameen Aftab — Software Engineer",
    favicon: "🜁"
  },

  /* ---------- PERSONAL ---------- */
  personal: {
    name: "Mohammed Ameen Aftab",
    initials: "MAA",
    role: "Final-Year BCA Student",
    tagline: "I build practical software and keep learning.",
    intro:
         "Bachelor of Computer Applications student at Presidency College, Bengaluru, with hands-on experience in software development through academic projects and a Full Stack Developer internship.",
       location: "Bengaluru, India",
    email: "mdameenaftab2006@email.com",
    phone: "+91 8310145263",
    availability: "Open to internships & software development roles",
    resumeFile: "resume/Mohammed_Ameen_Aftab_Resume.pdf",
    social: {
      github: "https://github.com/MohammedAmeenAftab",
      linkedin: "https://linkedin.com/in/MohammedAmeenAftab",
      leetcode: "https://leetcode.com/MohammedAmeenAftab",
      twitter: "https://twitter.com/MohammedAmeenAftab",
      portfolio: "https://mdameenaftab.dev"
    }
  },


    about: {
  summary:
    "I am a Bachelor of Computer Applications (BCA) student at Presidency College, Bengaluru, with a strong interest in software development. I enjoy building practical applications, learning new technologies, and turning ideas into working projects.",

  objective:
    "I am looking to grow as a software developer by working on real-world applications, strengthening my programming and problem-solving skills, and learning from experienced development teams.",

  lookingFor: [
    "Software development internships and fresher opportunities",
    "Opportunities to work on real-world applications and development projects",
    "Teams where I can learn, contribute, and improve my technical skills"
  ],

  strengths: [
    {
      title: "Problem Solving",
      desc: "I enjoy breaking down problems into smaller parts and finding practical solutions."
    },
    {
      title: "Learning",
      desc: "I like exploring new technologies and applying what I learn through projects."
    },
    {
      title: "Development",
      desc: "I enjoy building applications and understanding how different parts of a system work together."
    },
    {
      title: "Teamwork",
      desc: "My internship experience helped me gain experience working with others on development, testing, and debugging."
    }
  ],

  languages: [
  "Kannada",
  "Hindi",
  "English",
  "Telugu"
],
    education: [
      {
        degree: "Bachelor of Computer Applications (BCA)",
        school: "Presidency College, Bengaluru",
        period: "2024 — 2027",
        detail: "CGPA 7.8/10(till now) · Computer Applications · Coursework: OS, DBMS, Algorithms."
      },
      {
        degree: "Pre-University Course (PUC Board)",
        school: "SFS PU College, Tamaka, Kolar",
        period: "2022 — 2024",
        detail: "PCMB · Coursework: Physics, Chemistry, Mathematics, Biology."
      },
      {
        degree: "Secondary School (SSLC Board)",
        school: "Sri Venu Vidya Samasthe, Srinivaspur - Kolar",
        period: "Till 2022",
        detail: "95% · Strong academic performance."
      }
    ],
    interests: ["Software Development", "Web Development", "Backend Development", "Artificial Intelligence", "Problem Solving", "Long-distance running"]
  },

  /* ---------- SKILLS ---------- */
  skills: {
    categories: [
      {
        name: "Languages",
        items: [
          { name: "Java", level: 90 },
          { name: "Python", level: 88 },
          { name: "JavaScript", level: 80 },
          { name: "R", level: 65 }
        ]
      },
      {
        name: "Web Development",
        items: [
          { name: "HTML", level: 85 },
          { name: "CSS", level: 78 },
          { name: "JavaScript", level: 80 },
          { name: "React", level: 72 }
        ]
      },
      {
        name: "Backend & Database",
        items: [
          { name: "Java", level: 60 },
          { name: "Spring Boot", level: 64 },
          { name: "MySQL", level: 76 },
          { name: "SQL", level: 78 }
        ]
      },
      {
        name: "Tools",
        items: [
          { name: "Git / GitHub", level: 92 },
          { name: "VS Code", level: 95},
          { name: "Linux", level: 85 },
          { name: "IntelliJ IDEA", level: 80 },
          { name: "Android Studio", level: 60 }
        ]
      }
  ]
},
          
  /* ---------- PROJECTS ---------- */
  projects: [
  {
    title: "AI Email Classifier",
    tagline: "AI-powered email classification and reply assistant",
    image: "images/ai-email-classifier.png",
    description:
      "An AI-powered email classifier and assistant that connects with Gmail, categorizes emails, and helps generate replies.",
    problem:
      "Managing and organizing emails manually can be time-consuming, especially when dealing with a large number of messages.",
    solution:
      "Built an AI-powered system that connects with Gmail, classifies emails into categories, and assists with generating appropriate replies.",
    features: [
      "Gmail integration",
      "AI-powered email classification",
      "Automatic email categorization",
      "AI-assisted reply generation"
    ],
    stack: ["Python", "AI", "Gmail API"],
    challenges:
      "Working with email data and integrating AI-based classification while keeping the workflow simple and useful.",
    learnings:
      "Learned how to combine Python, APIs, and AI capabilities to build a practical automation tool.",
    future:
      "Improve classification accuracy, add more categories, and provide more advanced reply suggestions.",
    github: "https://github.com/MohammedAmeenAftab/ai-email-classifier",
    demo: null,
    timeline: "2026",
    impact:
      "A practical AI project focused on automating email organization and assistance."
  },

  {
    title: "URL Shortener",
    tagline: "Turn long URLs into short, shareable links",
    image: "images/url-shortener.png",
    description:
      "A full-stack URL shortener built with Python, Flask, SQLAlchemy, and SQLite that converts long URLs into short, shareable links and tracks link usage.",
    problem:
      "Long URLs can be difficult to share, remember, and manage. There is also no simple way to track how many times a shared link has been accessed.",
    solution:
      "Built a full-stack URL shortening system that validates long URLs, generates unique short codes, stores URL mappings in a database, redirects users to the original URL, and tracks click counts.",
    features: [
      "Long URL shortening",
      "Unique short-code generation",
      "Custom URL aliases",
      "URL validation",
      "Link expiration",
      "Click tracking and statistics",
      "REST API endpoints",
      "Rate limiting",
      "Copy-to-clipboard functionality",
      "Responsive web interface",
      "SQLite database integration",
      "Cloud deployment with Render"
    ],
      stack: ["Python","Flask","Flask-SQLAlchemy","SQLite","HTML","CSS","JavaScript","Git & GitHub","Gunicorn","Render"],
      challenges:
        "Handling URL validation, unique short-code generation, duplicate aliases, expiration, click tracking, and cloud deployment.",
      learnings:
        "Learned Flask, SQLAlchemy, database management, API development, HTTP redirects, Git/GitHub, environment variables, and Render deployment.",
      future:
        "Migrate to PostgreSQL, add Redis-based rate limiting, authentication, advanced analytics, stronger security, and custom domains.",
      impact:
        "A practical full-stack project demonstrating backend development, database integration, API design, frontend interaction, and cloud deployment.",  
      demo:"https://url-shortener-932q.onrender.com",
      github:"https://github.com/MohammedAmeenAftab/url-shortener"
  },

  {
    title: "Campus Seat Booking",
    tagline: "Campus seat booking system using Spring Boot",
    image: "images/campus-seat-booking.png",
    description:
      "A campus seat booking system developed using Spring Boot to manage and reserve available seats.",
    problem:
      "Managing campus seat availability and reservations manually can be difficult and inefficient.",
    solution:
      "Developed a web-based backend system using Spring Boot to manage seat availability and booking operations.",
    features: [
      "Campus seat management",
      "Seat booking",
      "Availability tracking",
      "Backend API development"
    ],
    stack: ["Java", "Spring Boot"],
    challenges:
      "Designing the booking workflow and handling seat availability correctly.",
    learnings:
      "Gained practical experience with Java, Spring Boot, backend development, and building application logic.",
    future:
      "Add authentication, database improvements, booking history, and an admin dashboard.",
    github: "https://github.com/MohammedAmeenAftab/campus-seat-booking",
    demo: null,
    timeline: "2026",
    impact:
      "A practical backend project demonstrating Java and Spring Boot development."
  },

  {
    title: "Face attendance system",
    tagline: "Real-time facial recognition attendance management",
    image: "images/face-attendance.png",
    description:
      "A web-based facial recognition attendance system that automatically identifies registered students through a webcam and records attendance in real time, with student management, admin dashboard, unknown-face detection, and attendance reporting.",
    problem:
      "Manually recording student attendance is time-consuming, repetitive, and can lead to inaccurate or duplicate attendance records.",
    solution:
      "Developed a web-based attendance system using FastAPI, OpenCV, and facial recognition technology to identify registered students through a webcam and automatically record their attendance while rejecting unregistered faces.",
    features: [
       "Student registration and management",
       "Real-time webcam face recognition",
       "Automatic attendance recording",
       "Unknown-face detection",
       "Admin authentication",
       "Attendance dashboard",
       "Attendance records and reporting",
       "Duplicate attendance prevention"
    ],
    stack: ["Python", "FastAPI", "OpenCV", "Facial Recognition", "SQLite", "HTML/CSS/JS"],
    challenges:
      "Implementing reliable real-time face recognition, handling webcam input, distinguishing registered students from unknown faces, preventing duplicate attendance, and configuring native dependencies such as dlib on Windows.",
    learnings:
      "Gained practical experience with Python backend development, FastAPI, computer vision, facial recognition, webcam integration, SQLite database management, authentication, API development, and deploying a complete local web application.",
    future:
      "Improve recognition accuracy, add liveness detection, introduce role-based authentication, migrate to PostgreSQL for larger deployments, strengthen biometric data protection, add advanced attendance analytics, and deploy the system to a cloud environment.",
    github: "https://github.com/MohammedAmeenAftab/face-attendence-system",
    demo: null,
    timeline: "2026",
    impact:
     "A practical full-stack computer-vision project demonstrating real-time facial recognition, automated attendance management, backend API development, database integration, and web application development."
  },


  {
    title: "Counter",
    tagline: "Simple Android counter application",
    image: "images/counter.jpeg",
    description:
      "A simple Android counter application built with Java.",
    problem:
      "Created as a practical Android development project to understand application structure and user interaction.",
    solution:
      "Built an Android application that allows users to increment and manage a counter through a simple interface.",
    features: [
      "Counter increment functionality",
      "Simple Android user interface",
      "Java-based Android development"
    ],
    stack: ["Java", "Android"],
    challenges:
      "Learning the Android application structure and implementing basic user interaction.",
    learnings:
      "Gained hands-on experience with Java and Android application development.",
    future:
      "Add reset functionality, persistent counter values, and additional customization options.",
    github: "https://github.com/MohammedAmeenAftab/Counter",
    demo: null,
    timeline: "2026",
    impact:
      "A foundational Android project demonstrating Java application development."
  }
],
  
  /* ---------- EXPERIENCE ---------- */
  experience: [
  {
    type: "Internship",
    role: "Full Stack Developer Intern",
    org: "iGeeks Technologies",
    period: "Jun 2026 — Jul 2026",
    location: "Bengaluru",
    points: [
      "Developed responsive web applications using HTML, CSS, JavaScript and React",
      "Worked with MySQL for database operations and data management",
      "Participated in testing, debugging, and feature implementation"
    ]
  },
  {
    type: "Projects",
    role: "Student Developer",
    org: "Personal Projects",
    period: "2025 — Present",
    location: "Bengaluru",
    points: [
      "Built and developed software projects using Java, Python, JavaScript and Spring Boot",
      "Worked on projects including an AI-powered email classifier and campus library seat booking system",
      "Used Git and GitHub for version control, project development, and collaboration"
    ]
  },
  {
    type: "Academic",
    role: "BCA Student",
    org: "Presidency College, Bengaluru",
    period: "2024 — 2027",
    location: "Bengaluru",
    points: [
      "Pursuing Bachelor of Computer Applications with a current CGPA of 7.85/10",
      "Developing skills in programming, databases, operating systems and computer networks",
      "Applying coursework through practical software development projects"
    ]
  }
],

  /* ---------- Highlights ---------- */
  Highlights: [
  {
    icon: "🎓",
    title: "95% in SSLC",
    detail: "Achieved 95% in the Secondary School Leaving Certificate (SSLC).",
    date: "2022"
  },
  {
    icon: "💻",
    title: "Full Stack Developer Internship",
    detail: "Completed a Full Stack Developer internship at iGeeks Technologies with hands-on experience in React, JavaScript, HTML/CSS, MySQL, testing and debugging.",
    date: "Jun 2026 — Jul 2026"
  },
  {
    icon: "🚀",
    title: "Software Projects",
    detail: "Built practical projects including an AI Email Classifier, Campus Seat Booking System, and Android Counter application.",
    date: "2025 — Present"
  },
  {
    icon: "🐙",
    title: "GitHub Projects",
    detail: "Built and maintained public software projects on GitHub while developing practical programming and software development skills.",
    date: "Present"
  }
],

  /* ---------- CERTIFICATIONS ---------- */
  certifications: [
  {
    name: "TATA GenAI Certificate",
    org: "TATA Consultancy Services",
    date: "2026",
    verified: true,
    link: "https://drive.google.com/file/d/1qSdZN-REanWR6IWi7rD2TGgz1_gWAyvu/view?usp=drivesdk"
  },
  {
    name: "Accenture AI Certificate",
    org: "Accenture",
    date: "2026",
    verified: true,
    link: "https://drive.google.com/file/d/16GBFA28OwOV71vOnS8hylpPwPFzzHA33/view?usp=drivesdk"
  },
  {
    name: "Google Data Analytics Certificate",
    org: "Coursera / Google",
    date: "2026",
    verified: true,
    link: "https://drive.google.com/file/d/1oZKI_G9rye2RkNnGXXukeLHxyNsYPbGj/view?usp=drivesdk"
  },
  {
    name: "Deloitte Data Analytics Certificate",
    org: "Deloitte",
    date: "2026",
    verified: true,
    link: "https://drive.google.com/file/d/1VxasCOJM42Y8202mQRx67lCIHrsA05fC/view?usp=drivesdk"
  },
  {
    name: "Python for AI",
    org: "Beep",
    date: "Jul 2026",
    verified: true,
    link: "https://drive.google.com/file/d/1vTZpqdHJNEggQp__IGEbw7GO4XDX2net/view?usp=drivesdk"
  },
 
],

  /* ---------- CODING PROFILES ---------- */
  codingProfiles: [
  {
    platform: "GitHub",
    handle: "@MohammedAmeenAftab",
    stat: "3 public repositories",
    link: "https://github.com/MohammedAmeenAftab"
  },
    {
    platform: "LeetCode",
    handle: "@MohammedAmeenAftab",
    stat: "7 problems solved · Java",
    link: "https://leetcode.com/u/MohammedAmeenAftab/"
  }
],

  /* ---------- BLOG (placeholders) ---------- */
  // blog: [
  //   {
  //     tag: "Fiction",
  //     title: "RB: The One Blood",
  //     date: "In Progress · 2026 — 2028",
  //     readTime: "Long-form fiction",
  //     link: "#"
  //   }
  // ],
  
  /* ---------- FAQ ---------- */
  faq: [
  {
    q: "What are you currently studying?",
    a: "I am pursuing a Bachelor of Computer Applications (BCA) at Presidency College, Bengaluru."
  },
  {
    q: "What kind of opportunities are you looking for?",
    a: "I am looking for opportunities where I can develop my software development skills, work on real-world projects, and learn from an experienced team."
  },
  {
    q: "What technologies do you work with?",
    a: "I work with Java, Python, JavaScript, HTML, CSS, React, Spring Boot, MySQL and SQL, along with tools such as Git, GitHub, VS Code and Android Studio."
  },
  {
    q: "Do you have professional experience?",
    a: "Yes. I completed a Full Stack Developer internship at iGeeks Technologies, where I gained practical experience in web development, React, JavaScript, MySQL, testing and debugging."
  },
  {
    q: "What projects have you built?",
    a: "My projects include an AI Email Classifier, Campus Seat Booking System using Spring Boot, and a Java-based Android Counter application."
  },
  {
    q: "Where can I see your code?",
    a: "You can explore my projects and source code on my GitHub profile: github.com/MohammedAmeenAftab."
  },
  {
    q: "Are you working on anything outside software development?",
    a: "Yes. I am also writing a fictional novel titled 'RB: The One Blood', which is a long-term creative project I plan to complete over approximately two years."
  }
],
  /* ---------- NUMBERS / STATS ---------- */
stats: [
  {
    value: 3,
    suffix: "+",
    label: "Projects"
  },
  {
    value: 1,
    suffix: "",
    label: "Internship"
  },
  {
    value: 3,
    suffix: "",
    label: "GitHub Repositories"
  },
  {
    value: 95,
    suffix: "%",
    label: "SSLC"
  },
  {
    value: 7.85,
    suffix: "/10",
    label: "BCA CGPA"
  },
  {
    value: 2,
    suffix: "+",
    label: "Years of Learning"
  }
],

  /* ---------- WHY HIRE ME ---------- */
  whyHireMe: [
  {
    icon: "💡",
    title: "Eager to Learn",
    desc: "I enjoy learning new technologies and applying what I learn through practical projects."
  },
  {
    icon: "🛠️",
    title: "Hands-On Builder",
    desc: "I learn best by building real applications and turning ideas into working solutions."
  },
  {
    icon: "🧩",
    title: "Problem Solver",
    desc: "I like breaking problems into smaller parts and finding simple, practical solutions."
  },
  {
    icon: "🤝",
    title: "Team Player",
    desc: "My internship experience helped me develop communication, collaboration, and teamwork skills."
  },
  {
    icon: "🚀",
    title: "Growth Mindset",
    desc: "I actively look for opportunities to improve my technical skills and become a better developer."
  }
],

  /* ---------- TECH STACK LOGOS (label-based, no external assets needed) ---------- */
  techStack: [
    "Java", "Python", "JavaScript", "HTML", "CSS", "React",
    "MySQL", "Sprint Boot", "VS Code", "GitHub", "Android Studio", "IntelliJ IDEA"
  ]
};
