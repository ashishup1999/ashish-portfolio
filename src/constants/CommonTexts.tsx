import { PROJECT_IMAGES } from "./StaticImages";

export const MENU = {
  ABOUT: "About",
  EXPERIENCE: "Experience",
  PROJECTS: "Projects",
  ACHIEVEMENT: "Achievements",
};

export const ABOUT_TEXTS = {
  greet: "Hi, I am",
  name: "Ashish Upadhyay",
  title: "Software Developer",
  summary: `Highly skilled and adaptable full-stack software developer with a passion for crafting robust and innovative digital solutions. I'm Currently employed as a software developer in a fintech company with over 2 years of experience in the field, 
  I have honed my expertise in both front-end and back-end development, enabling me to seamlessly bridge the gap between design and functionality. Additionally,
  I also have a strong background in Deep Learning, having worked on several team-based projects in this field.`,
  skillTitle: "My Skills",
};

export const EXP_TEXTS = {
  summary: `I am presently employed as a software developer in a fintech company, with more than 2 years of experience in industrial
    environments. My expertise lies in Full stack web development, encompassing Frontend, Backend and Devops.`,
  exps: [
    {
      job: "Software Developer, IDFC First Bank Ltd.",
      duration: "May 2023 - present",
      location: "Bengaluru, India",
      desc: `● Spearheaded the transformation of the bank's NRI Savings Account onboarding journey from manual
      pen-and-paper processes to a fully digital platform, featuring a robust and user-friendly UI. Achieved an impressive
      80% reduction in account opening time.
      ● Implemented key features including automatic data retrieval from existing sources and seamless document
      upload to AWS with automatic rollback in case of failure. These enhancements significantly improved user
      experience and contributed to a remarkable 200% increase in the bank's NRI user base.
      ● Currently driving the implementation of a video-based verification system for NRI customer account openings,
      aimed at further reducing account opening time by 20%.
      ● Concurrently optimized the other existing account opening journeys codebase, resulting in a 10% increase in
      platform’s performance.
      `,
      techs: ["ReactJs", "JavaScript", "Go", "Docker", "Typescript", "Kafka", "WebSockets", "Jest"],
    },
    {
      job: "Application Engineer, IDFC First Bank Ltd.",
      duration: "Jul 2022 -  May 2023",
      location: "Bengaluru, India",
      desc: `● Contributed to the development of a Go-based communication platform. This platform facilitated the
      transmission of messages from banks to users through various channels including SMS, email, and WhatsApp.
      Enhancing system throughput by 8%..
      ● Built robust communication systems and ensured seamless delivery across multiple channels. This initiative
      resulted in a significant increase in message delivery efficiency, with a measurable impact on user engagement
      and satisfaction. Which led to a significant rise of 2 times of the bank wide customer base.
      `,
      techs: ["ReactJs", "JavaScript", "Go", "Docker", "Typescript", "Kafka", "WebSockets", "Jest"],
    },
    {
      job: "Software Developer Intern, Persistent Systems",
      duration: "Jan 2022 - May 2022",
      location: "Remote",
      desc: `● Contributed to the implementation of an application using ReactJs, enhancing overall performance and usability
      within an Agile development methodology by 15%.
      ● The approach not only improved team collaboration but also led to a reduction in the Development Life Cycle time
      by 50%.`,
      techs: ["ReactJs", "JavaScript", "HTML", "CSS"],
    },
    {
      job: "Machine Learning Research Intern, IIITDM-Jabalpur",
      duration: "June 2021 - Oct 2021",
      location: "Jabalpur, India",
      desc: "I created a system capable of identifying and rectifying incorrect verb forms within sentences based on grammar rules. Additionally, I authored a research paper on this specific topic.",
      techs: ["Python", "Machine Learning", "Natural Language Processing"],
    },
  ],
};

export const PROJECTS_TEXT = [
  {
    name: "CodeKar (Coding Platform)",
    link: "https://codekar-one.vercel.app/",
    image: PROJECT_IMAGES.codeKarImg,
    github: "https://github.com/ashishup1999/codekar-server",
    desc: `An authentication-based platform enabling users to create mini projects using HTML, CSS, and
    JavaScript. Provides code-editor playgrounds supporting 5 languages that are Java, Python, Go, C++, and Js.
    Introducing a unique whiteboard-like code-editor mode devoid of common editor features such as auto-suggestion,
    auto-completion, and auto-indentation to help users grasp a deeper understanding of language’s features.
    Facilitates exploration of other user’s playgrounds with the option to connect and collaborate.
    Used a Go based server as Go can handle as many as 1000 concurrent requests per second, making the app faster`,
    tools: [
      "NextJs",
      "TypeScript",
      "Go",
      "MongoDB",
      "Styled Component",
      "Docker",
    ],
  },
  {
    name: "Samvad (Chat Application)",
    link: "https://samvad-client-img-latest.onrender.com/",
    image: PROJECT_IMAGES.samvadImg,
    github: "https://github.com/ashishup1999/samvad-client",
    desc: "Samvad is a web-based, responsive application designed for real-time chatting with friends. This project highlights the effective use of web sockets for seamless real-time communication. The user interface offers a smooth experience, allowing users to easily log in and initiate conversations with their loved ones.",
    tools: [
      "ReactJs",
      "JavaScript",
      "Styled Component",
      "Socket.io",
      "NodeJs",
      "MongoDB",
      "Vite",
      "Jest",
      "Docker",
    ],
  },
  {
    name: "Neural Style Transfer (Pytorch)",
    image: PROJECT_IMAGES.nstImg,
    github: "https://github.com/ashishup1999/Neural-Style-Transfer-pytorch-",
    desc: "Developed a neural network-powered system for performing style transfer between two images. In this system, you can upload an image representing a particular painting and another image onto which you want to apply the artistic styles. This neural network accepts both images as input and generates a distinctive stylized image as the output.",
    tools: ["Python", "Pytorch", "Numpy", "OpenCV"],
  },
  {
    name: "Face Mask Detector for COVID-19 pandemic",
    image: PROJECT_IMAGES.faceMaskImg,
    github:
      "https://github.com/ashishup1999/Face-Mask-Detector-for-COVID-pandemic",
    desc: "I have created a system capable of identifying whether a person is wearing a mask using live camera input. To achieve this, I utilized the facenet-pytorch and MobileNetV3 neural networks to construct the system.",
    tools: ["Python", "Pytorch", "Numpy", "OpenCV"],
  },
  {
    name: "Sentiment Analysis on Global Warming using NLP",
    image: PROJECT_IMAGES.nlpImg,
    github: "https://github.com/ashishup1999/NLP-on-twitter-sentiments",
    desc: "I developed an algorithm capable of determining whether a sentence expresses support for or opposition to the concept of global warming. The dataset used for this task was collected from tweets posted by various Twitter users discussing the topic of global warming.",
    tools: ["Python", "Scikit Learn", "Numpy", "Pandas", "NLTK"],
  },
];

export const ACHIEVEMENT_TEXTS = {
  certifications: [
    "Deep Learning Specialization - Coursera",
    "Python Certification - CCA",
  ],
  achievements: [
    "Ranked 297 globally in Code Chef Starters 17",
    "Ranked 2203 in Google Kick-start 2021 Round F",
    "Achieved 5 stars in Hackerrank problem solving assessments",
    "Solved over 500+ questions on Leetcode and GeeksForGeeks",
  ],
  LnC: "Licenses & certifications",
  ACHVS: "Achievements",
};
