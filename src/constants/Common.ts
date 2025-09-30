import jsIcon from "@/assets/skills/js.svg";
import tsIcon from "@/assets/skills/ts.svg";
import cssIcon from "@/assets/skills/css.svg";
import htmlIcon from "@/assets/skills/html.svg";
import reactIcon from "@/assets/skills/react.svg";
import nextIcon from "@/assets/skills/next.svg";
import sassIcon from "@/assets/skills/sass.svg";
import jestIcon from "@/assets/skills/jest.svg";
import mongoIcon from "@/assets/skills/mongo.svg";
import pgIcon from "@/assets/skills/postgress.svg";
import nodeIcon from "@/assets/skills/node.svg";
import yarnIcon from "@/assets/skills/yarn.svg";
import viteIcon from "@/assets/skills/vite.svg";
import pyIcon from "@/assets/skills/py.svg";
import dockerIcon from "@/assets/skills/docker.svg";
import ksIcon from "@/assets/skills/ks.svg";
import reduxIcon from "@/assets/skills/redux.svg";
import goIcon from "@/assets/skills/go.svg";
import cpp from "@/assets/skills/cpp.svg";
import aws from "@/assets/skills/aws.svg";
import dj from "@/assets/skills/django.svg";
import codekarImg from "@/assets/work-images/codeKar.png";
import samvadImg from "@/assets/work-images/samvad.png";
import fdImg from "@/assets/work-images/fm.png";
import nlpImg from "@/assets/work-images/nlp.png";
import nstImg from "@/assets/work-images/nst.png";
import idfcLogo from "@/assets/exps/idfc.png";
import persiLogo from "@/assets/exps/persi.png";
import iiitdmLogo from "@/assets/exps/iiitdm.png";
import { StaticImageData } from "next/image";

export const ABOUT = {
  name: "ASHISH UPADHYAY",
  alias: "<Software Developer>",
  summary:
    "I am a full stack software developer with over 2 years of experience in the industrial settings. Currently, I am employed at IDFC FIRST BANK Ltd. where I have led several successful projects that have significantly improved operational efficiency and user experience. My primary expertise lies in full stack web development, encompassing front-end, back-end, and Dev Ops.",
};

export const SKILLS_ICONS = {
  js: jsIcon,
  css: cssIcon,
  html: htmlIcon,
  ts: tsIcon,
  react: reactIcon,
  next: nextIcon,
  sass: sassIcon,
  jest: jestIcon,
  pg: pgIcon,
  node: nodeIcon,
  mongo: mongoIcon,
  yarn: yarnIcon,
  vite: viteIcon,
  py: pyIcon,
  go: goIcon,
  docker: dockerIcon,
  kube: ksIcon,
  redux: reduxIcon,
  cpp: cpp,
  aws: aws,
  dj: dj,
};

export const SKILLS_NAMES: { [key: string]: string } = {
  js: "JavaScript",
  css: "CSS",
  html: "HTML",
  ts: "TypeScript",
  react: "ReactJS",
  next: "NextJS",
  sass: "Sass",
  jest: "Jest",
  pg: "Postgress",
  node: "NodeJS",
  mongo: "Mongo",
  yarn: "Yarn",
  vite: "Vite",
  py: "Python",
  go: "Golang",
  docker: "Docker",
  kube: "Kubernetes",
  redux: "Redux",
  cpp: "C++",
  aws: "AWS",
  dj: "Django",
};

export const WORKS = [
  {
    id: "codekar",
    img: codekarImg,
    name: "<CodeKar>",
    open: "https://codekar-one.vercel.app/",
    ui: "https://github.com/ashishup1999/codekar",
    server: "https://github.com/ashishup1999/codekar-server",
    desc: `Developed an authentication-based platform enabling users to create mini projects using HTML, CSS, and
            JavaScript. Also built a code-editor playgrounds supporting 5 languages that are Java, Python, Go, C++, and Js.
            <br/><br/> Introduced a unique whiteboard-like code-editor mode devoid of common editor features such as auto-suggestion,
            auto-completion, and auto-indentation to help users grasp a deeper understanding of language’s features.
            <br/><br/> Facilitated user exploration of other user’s playgrounds with the option to connect and collaborate.
            <br/><br/> Used a Go based server as Go can handle as many as 1000 concurrent requests per second, making the app faster.
            <br/><br/> Tech Stack: NextJs, Golang, MongoDB, Docker`,
  },
  {
    id: "samvad",
    img: samvadImg,
    name: "<Samvad>",
    open: "https://samvad-client-img-latest.onrender.com/",
    ui: "https://github.com/ashishup1999/samvad-client",
    server: "https://github.com/ashishup1999/samvad-server",
    desc: `Led the development of Samvad, a responsive web application tailored for real-time 1-on-1 chatting with friends.
            Implemented cutting-edge web socket technology to enable seamless real-time communication, resulting in a 30%
            increase in chat responsiveness.
            <br/><br/> Engineered an authentication system with a password retrieval mechanism based on OTP, enhancing security and
            reducing login issues by 25%.
            <br/><br/> Tech Stack: ReactJs, NodeJs, Web Socket, MongoDB, Docker, Jest
`,
  },
  {
    id: "fmd",
    img: fdImg,
    name: "<Face Mask Detector>",
    open: "https://github.com/ashishup1999/Face-Mask-Detector-for-COVID-pandemic",
    desc: `I have created a system capable of identifying whether a person is wearing a mask using live camera input. 
            To achieve this, I utilized the facenet-pytorch and MobileNetV3 neural networks to construct the system.
            <br/><br/> Tech Stack: Python, Pytorch, NumPy, OpenCV`,
  },
  {
    id: "nlp",
    img: nlpImg,
    name: "<Twitter Sentiment Analysis>",
    open: "https://github.com/ashishup1999/NLP-on-twitter-sentiments",
    desc: `I developed an algorithm capable of determining whether a sentence expresses support for or opposition to the concept of global warming. 
            The dataset used for this task was collected from tweets posted by various Twitter users discussing the topic of global warming.
            <br/><br/> Tech Stack: Python, Scikit Learn, NumPy, NLTK`,
  },
  {
    id: "nst",
    img: nstImg,
    name: "<Neural Style Transfer>",
    open: "https://github.com/ashishup1999/Neural-Style-Transfer-pytorch-",
    desc: `I have created a system capable of identifying whether a person is wearing a mask using live camera input. To achieve this, I utilized the facenet-pytorch and MobileNetV3 neural networks to construct the system.
            <br/><br/> Tech Stack: Python, Pytorch, NumPy, OpenCV`,
  },
];

export const EXPS = [
  {
    id: "idfc2",
    img: idfcLogo,
    name: "<Software Developer>",
    extra: "IDFC First Bank | May 2023 - present",
    desc: `Led the digitization of the bank's NRI Savings Account onboarding, transitioning from manual to fully digital
            processes with a streamlined UI, resulting in an 80% reduction in account opening time.<br/><br/>
            Implemented automated data retrieval and seamless document upload to AWS, with automatic rollback in case of
            failures. Resulted in a 200% increase in the bank's NRI user base.<br/><br/>
            Orchestrated the successful integration of a video-driven identity verification process for NRI account openings,
            resulting in a 20% reduction in account setup timelines and improved operational efficiency.<br/><br/>
            Optimized the other existing account opening journeys codebase, resulting in a 10% increase in platform’s
            performance.`,
  },
  {
    id: "idfc1",
    img: idfcLogo,
    name: "<Application Engineer>",
    extra: "IDFC First Bank | Jul 2022 - May - 2023",
    desc: `Developed a Go-based communication platform to streamline message delivery from banks to users across
            multiple channels such as SMS, email, and WhatsApp. Achieved an 8% improvement in system throughput.<br/><br/>
            Programmed robust communication systems across multiple channels, significantly increasing message delivery
            efficiency. Resulted in a 2x rise in the bank-wide customer base.`,
  },
  {
    id: "persi",
    img: persiLogo,
    name: "<SDE Intern>",
    extra: "Persistent Systems | Jan 2022 - May 2022",
    desc: `Designed an application using ReactJs within an Agile development methodology, resulting in a notable 15%
            improvement in overall performance and usability.
            <br/><br/> The approach not only improved team collaboration but also led to a reduction in the Development Life Cycle time
            by 50%.
`,
  },
  {
    id: "iiitdm",
    img: iiitdmLogo,
    name: "<Machine Learning Intern>",
    extra: "IIITDM Jabalpur | June 2021 - Oct 2021",
    desc: "I created a system capable of identifying and rectifying incorrect verb forms within sentences based on grammar rules. Additionally, I authored a research paper on this specific topic.",
  },
];
