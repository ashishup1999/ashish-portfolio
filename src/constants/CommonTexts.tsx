import { PROJECT_IMAGES } from "./StaticImages";

export const MENU = {
  ABOUT: "About",
  EXPERIENCE: "Experience",
  PROJECTS: "Projects",
  ACHIEVEMENT: "Achievements",
};

export const ABOUT_TEXTS = {
  greet: "Namaste 🙏 All, I am",
  name: "Ashish Upadhyay",
  title: "Software Developer (Full Stack)",
  summary:
    "Highly skilled and adaptable full-stack software developer with a passion for crafting robust and innovative digital solutions (specially in front end). With 1+ years of experience in the field, I have honed my expertise in both front-end and back-end development, enabling me to seamlessly bridge the gap between design and functionality. Also as an additional bonus, I have an extra skill of Deep learning in my arsenal as well, I have worked on several team based projects related to the respective field. ",
  skillTitle: "My Skills",
};

export const EXP_TEXTS = {
  summary:
    "I have accumulated approximately 2+ years of professional experience, comprising 1+ year of full-time employment and 1 year of prior internship roles. This entirety of work experience is detailed below.",
  exps: [
    {
      job: "Software Developer, IDFC First Bank Ltd.",
      duration: "Jul 2022 -  present",
      location: "Bengaluru, India",
      desc: "I have contributed to various banking projects aimed at enhancing system robustness and optimizing the user interface, facilitating seamless execution of a wide range of banking tasks.",
      techs: ["ReactJs", "JavaScript", "Styled Component", "Jest"],
    },
    {
      job: "Software Developer Intern, Persistent Systems",
      duration: "Jan 2022 - May 2022",
      location: "Remote",
      desc: "I played a key role in implementing a single-page application with React, which led to enhanced overall performance and user-friendliness. This was achieved within an Agile development framework that fostered improved team collaboration and resulted in a reduction in the Development Life Cycle timeline.",
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
    name: "Samvad (Chat Application)",
    link: "https://samvad-client.onrender.com/",
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
